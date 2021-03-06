db.books.drop()

var books = [
  {
    name: "リーダブルコード",
    url: "http://www.oreilly.co.jp/books/9784873115658/",
    term: "2015-05-01,2015-05-31",
    image: "readable_code.jpg",
    description: "美しいコードを見ると感動する。優れたコードは見た瞬間に何をしているかが伝わってくる。そういうコードは使うのが楽しいし、自分のコードもそうあるべきだと思わせてくれる。本書の目的は、君のコードを良くすることだ。（本書「はじめに」より） コードは理解しやすくなければならない。本書はこの原則を日々のコーディングの様々な場面に当てはめる方法を紹介します。名前の付け方、コメントの書き方など表面上の改善について。コードを動かすための制御フロー、論理式、変数などループとロジックについて。またコードを再構成するための方法。さらにテストの書き方などについて、楽しいイラストと共に説明しています。日本語版ではRubyやgroongaのコミッタとしても著名な須藤功平氏による解説を収録。",
    pages: 260,
    color: '#5687d1',
    progress: 0
  },
  {
    name: "Webアプリエンジニア養成読本",
    url: "http://gihyo.jp/book/2014/978-4-7741-6367-3",
    term: "2015-06-01,2015-06-15",
    image: "webapp_engineer.jpg",
    description: "Webアプリケーションは、プログラム、データベース、サーバなどを含むさまざまなレイヤから構成されるシステムであり、またそのしくみも日々進歩し続けていることから、新人エンジニア、経験のないエンジニアには、覚えるべきことが多く全体像の理解も難しい側面があります。本書では、こうしたWebアプリケーション開発の基礎を、前提知識、開発、デプロイ、運用の各フェーズに分けて解説し、全体像の体系的な理解を促すものとして刊行します。最前線の現場で活躍する著者勢が各々の得意分野について書いているので、実践的な内容に仕上がりました。プログラミング言語としてはPHP、Ruby、一部Perlを取り上げ、それぞれ動作可能なサンプルアプリケーションをつくりながら、最新の技術トレンドを踏まえた開発手法を紹介。また、見落としがちなWebを配信するための本番環境の構築。そして運用に関してもピックアップしています。",
    pages: 144,
    color: '#7b615c',
    progress: 0
  },
  {
    name: "PHPエンジニア養成読本",
    url: "https://gihyo.jp/book/2013/978-4-7741-5971-3",
    term: "2015-06-16,2015-06-30",
    image: "php_engineer.jpg",
    description: "PHPはWebシステムの進化と歩みを共にして進化してきた，世界中のWebサイトで利用されている人気のサーバサイドスクリプト言語です。本書では，これからPHPを使って本格的なWeb開発を行いたい方，いまどきのPHP開発技法を習得したい方を対象に，PHP 5.3から最新版5.5までここ数年で盛り込まれた新機能，PEARに代わるライブラリ管理ツールとして注目されるComposerの活用法や，自分にあったフレームワークの見つけ方・使い方，そしてUnitテストやGitによる開発など，今，PHPによる開発を行ううえで押さえておきたいトピック満載でお届けします。",
    pages: 128,
    color: '#de783b',
    progress: 0
  },
  {
    name: "JavaScriptデザインパターン",
    url: "http://www.oreilly.co.jp/books/9784873116181/",
    term: "2015-07-01,2015-08-31",
    image: "learning_javascript_design_patterns.jpg",
    description: "JavaScriptの人気とともに、JavaScriptでのデザインパターンの利用局面も増えています。本書ではGoFのデザインパターンに沿って、その実装例やパターンの適用事例を網羅的に示し、デザインパターンをJavaScriptにも応用したいというニーズに応えています。モジュール、オブサーバ、ファサード、メディエータといったGoFの代用的なデザインパターンだけでなく、リビーリングモジュールパターンや擬古典的デコレータパターンといった、新しいパターンも取り上げています。美しく、かつ構造化され、メンテナンス性の高いJavaScriptを書くために有用な一冊です。",
    pages: 282,
    color: '#6ab975',
    progress: 0
  },
  {
    name: "CodeIgniter徹底入門",
    url: "http://codeigniter.jp/tettei/",
    term: "2015-09-01,2015-11-30",
    image: "codeigniter.jpg",
    description: "速い・簡単・効率UpのPHPフレームワーク「CodeIgniter」開発バイブル登場!CodeIgniterとは、習得の容易さ、構造のシンプルさ、動作の高速性にフォーカスし設計/作成された最新のPHPフレームワークです。理解しやすい構造で習得の容易さは他のPHPフレームワークを圧倒しており、初心者にもやさしいフレームワークです。 本書は、日本初のCodeIgniter解説書です。CodeIgniterのインストールや運用法、開発の基礎知識を 紹介するとともに、主なライブラリの使い方や活用法、応用テクニックなどを具体的なサンプルプログラムを交えて徹底的に解説していきます。PHPフレームワーク導入を検討しているWeb開発者、また、他のPHPフレームワークが難しいと感じているユーザーにお勧めの1冊です。",
    pages: 632,
    color: '#a173d1',
    progress: 0
  },
  {
    name: "初めてのSQL",
    url: "http://www.oreilly.co.jp/books/4873112818/",
    term: "2015-12-01,2016-01-31",
    image: "learning_sql.jpg",
    description: "本書『初めてのSQL』は、SQL言語に初めて触れるプログラマを対象に、SQL言語の基本を解説する書籍です。その特徴は、実践に必要なポイントを過不足なく、コンパクトにまとめたこと。「データベースの歴史」から始まり「データベースの作成と設定」「クエリ」「フィルタリング」「複数テーブルからのデータの取得」「集合」「データの作成、変換、操作」「グループ化と集約化」「サブクエリ」「結合」「条件ロジック」「トランザクション」「インデックスと制約」などについて、丁寧に解説を行います。本書のサンプルは、MySQLを使用していますが、Oracle、SQL Serverなどでも動作するように配慮されています。各章末には練習問題を掲載し、読者の理解を助けます。SQL言語の基本を確実に身に付けたい方におすすめです。",
    pages: 320,
    color: '#ffa500',
    progress: 0
  },
  {
    name: "JavaScript で学ぶ関数型プログラミング入門",
    url: "http://www.oreilly.co.jp/books/9784873116600/",
    term: "2016-02-01,2016-05-01",
    image: "functional_javascript.jpg",
    description: "本書はJavaScriptを使って関数型プログラミングを学ぶ書籍です。関数型言語としてJavaScriptを理解し、使用することにより、コードがより洗練され、美しく、そして読みやすいものになることを目的としています。JavaScriptビルトインのデータ型を上手に利用するための基本知識やJavaScriptにおける関数の持つ特性など、関数型プログラミングの技術とその考え方について解説します。また実際のJavaScriptコーディングに関数型プログラミングのエッセンスを加えるポイントをサンプルを使って丁寧に説明します。関数型プログラミングに精通した著者が書き下ろした本書はテクニックを増やし、コーディングのイマジネーションを広げたいエンジニア必携の一冊です。",
    pages: 352,
    color: '#32cd32',
    progress: 0
  },
];

db.books.save(books);
