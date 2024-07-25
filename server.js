const { PrismaClient } = require("@prisma/client");
const express = require("express");
const app = express();
const PORT = 8000;

/*
https://www.prisma.io/docs/orm/prisma-client/queries/crud#update
*/

const prisma = new PrismaClient();
// json形式を認識できるように明示的にmiddlewareで設定
app.use(express.json());

// DBの全てを取得
app.get("/", async (req, res) => {
  const posts = await prisma.posts.findMany();
  return res.json(posts);
});

// 特定のデータを取得
app.get("/:id", async (req, res) => {
  const id = req.params.id;
  const post = await prisma.posts.findUnique({
    where: {
      id: Number(id),
    },
  });
  return res.json(post);
});

// データの追加
app.post("/", async (req, res) => {
  const { title, body } = req.body;
  const posts = await prisma.posts.create({
    data: {
      title: title,
      body: body,
    },
  });
  return res.json(posts);
});

// データの更新
app.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { title, body } = req.body;
  const updatedPost = await prisma.posts.update({
    where: {
      id: Number(id),
    },
    data: {
      title: title,
      body: body,
    },
  });
  return res.json(updatedPost);
});

// データの削除
app.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const deletedPost = await prisma.posts.delete({
    where: {
      id: Number(id),
    },
  });
  return res.json(deletedPost);
});

app.listen(PORT, () => {
  console.log("サーバーが起動中...");
});
