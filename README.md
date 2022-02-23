# react-express-todoApp

## 環境構築
#### 1. レポジトリをローカルにクローンする.
```
git clone https://github.com/masatotezuka/react-express-todoApp.git
```

#### 2. npmのインストール
```
npm i
```

#### 4. MySQLの起動
```
brew services start mysql;
mysql --user="usename" --password="password";
CREATE USER 'root'@'127.0.0.1' IDENTIFIED BY 'tezukamasato1370';
CREATE DATABASE todoapp_db;
GRANT ALL PRIVILEGES ON todoapp_db.* TO root@'127.0.0.1';
```

#### 3. DBマイグレーション（MySQL）
```
npx sequelize-cli db:migrate
```

#### 4. バックエンドのサーバーを立ち上げる
```
npm start
```

#### 5. フロントエンドのサーバーを立ち上げる
```
cd client
npm start
```
