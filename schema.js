// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema
/*
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model Post {
  id       String    @id @default(uuid())
  title    String
  body     String
  comments Comment[]
}

model User {
  id       String    @id @default(uuid())
  name     String
  comments Comment[]
  likes    Like[]
}

model Comment {
  id        String    @id @default(uuid())
  message   String
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  user      User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  userId    String
  post      Post      @relation(fields: [postId], references: [id], onDelete: Cascade)
  postId    String
  parent    Comment?  @relation("ParentChild", fields: [parentId], references: [id], onDelete: Cascade)
  children  Comment[] @relation("ParentChild")
  parentId  String?
  likes     Like[]
}

model Like {
  user      User    @relation(fields: [userId], references: [id], onDelete: Cascade)
  comment   Comment @relation(fields: [commentId], references: [id], onDelete: Cascade)
  userId    String
  commentId String

  @@id([userId, commentId])
}
*/