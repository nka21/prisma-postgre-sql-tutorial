### リポジトリの説明
この動画の学習リポジトリ

[【Prisma入門】次世代ORMで簡単にデータベース管理ができるようになろう](https://www.youtube.com/watch?v=9mE1j1vzUAQ)

### このリポジトリで使用している技術
- Prisma
- PostgreSQL

### 学習したこと
- Prismaを用いて、CRUDの実装
- migrateのやり方

### 使用したコマンド
Migrateコマンド
```sh
pnpm dlx prisma migrate dev --name init
```
DBの中身を確認するコマンド
```sh
pnpm dlx prisma studio
```