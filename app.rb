require 'sinatra/base'
require 'sinatra/contrib'
require 'sinatra/reloader'
require 'json'
require 'mongo'
require 'date'
require 'csv'

class App < Sinatra::Base
  before do
    db_con = Mongo::Connection.new('localhost', 27017)
    @db    = db_con.db('sawada_books')
    @comments = @db.collection('comments')
    @books = @db.collection('books')
    @password = ENV['SAWADA_BOOKS_PASSWORD']
  end

  helpers do
    include Rack::Utils
    alias_method :h, :escape_html
  end

  def generate_csv
    csv = @books.find().inject([]) do |acc, book|
      acc << ['既読-' + book['name'].to_s, book['progress'].to_i]
      acc << ['未読-' + book['name'], book['pages'].to_i - book['progress'].to_i]
    end

    running_dir = File.dirname(__FILE__)
    running_dir = Dir.pwd if (running_dir == '.')
    CSV.open(running_dir + '/public/sawada-progress.csv', 'wb'){|writer|
      csv.each{|row|
        writer << row
      }
    }
  end

  get '/' do
    @book = @books.find().select do |book|
      term = book['term'].split(',')
      (Date.parse(term[0])..Date.parse(term[1])).cover?(Date.today)
    end
    erb :index
  end

  post '/api/update/progress' do
    @book = @books.find().select do |book|
      term = book['term'].split(',')
      (Date.parse(term[0])..Date.parse(term[1])).cover?(Date.today)
    end
    if (params[:progress]).to_i <= (@book[0]['pages']).to_i and params[:password].to_s == @password
      @books.update( {:_id => @book[0]['_id']}, {"$set" => {:progress => params[:progress].to_i}})
      generate_csv
      status 200
      body ''
    else
      status 400
      body ''
    end
  end

  post '/api/comment/thumbsup' do
    @comments.update( {'_id' => BSON::ObjectId(params[:id])}, {"$inc" => {:thumbsup => 1}})
  end

  get '/about' do
    erb :about
  end

  post '/new' do
    if params[:password].to_s == @password
      @comments.insert( :body => params[:body], :book => params[:book],
                       :date => Time.now.strftime("%Y-%m-%d %H:%M"),
                       :thumbsup => 0 )
    else
      status 401
      redirect '/'
    end
    redirect '/'
  end

  get '/books' do
    erb :books
  end

  get '/progress' do
    erb :progress
  end

  get '/api/books/name' do
    json @books.find().map {|h| h['name']}
  end

  get '/api/books/pages' do
    json Hash[@books.find().map { |h| [h['name'],h['pages']] }]
  end

  get '/api/books/pages/total' do
    json @books.find().inject(0) { |sum, h| sum + h['pages'] }
  end

  get '/api/books/progress' do
    json Hash[@books.find().map { |h| [h['name'],h['progress']]}]
  end

  get '/api/books/progress/total' do
    json @books.find().inject(0) { |sum, h| sum + h['progress'] }
  end

  get '/api/books/color' do
    json Hash[@books.find().map { |h| [h['name'],h['color']] }]
  end

  post '/api/check/password' do
    if params[:password].to_s == @password
      status 200
      body ''
    else
      status 401
      body ''
    end
  end

  post '/delete' do
    id = BSON::ObjectId( params[:id] )
    @comments.find('_id' => id).each { |d_comment|
      @comments.remove( d_comment )
    }
  end
end
