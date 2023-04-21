import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function seed() {
    await prisma.post.deleteMany()
    await prisma.user.deleteMany()
    const kyle = await prisma.user.create({ data: { name: "Kyle" } })
    const sally = await prisma.user.create({ data: { name: "Sally" } })

    const post1 = await prisma.post.create({
        data: {
            body: "Welocome to Re-Late. A website where our motto is For the students.",
            title: "Re-Late First Post",
        },
    })
    const post2 = await prisma.post.create({
        data: {
            body: "This is an intro forum into how the Re Late webpage works.",
            title: "How to use Re-Late",
        },
    })

    const post3 = await prisma.post.create({
        data: {
            body: "This is a post from one of the webpage builders, Yanice.",
            title: "Yanice's Post",
        },
    })

    const post4 = await prisma.post.create({
        data: {
            body: "This is a post from one of the webpage builders, Nouran.",
            title: "Nouran's Post",
        },
    })

    const post5 = await prisma.post.create({
        data: {
            body: "This is a post from one of the webpage builders, Irbahim.",
            title: "Ibrahim's Post",
        },
    })



    const comment1 = await prisma.comment.create({
        data: {
            message: "I am the second comment",
            userId: kyle.id,
            postId: post1.id,
        },
    })

    const comment2 = await prisma.comment.create({
        data: {
            parentId: comment1.id,
            message: "I am a nested comment",
            userId: sally.id,
            postId: post1.id,
        },
    })

    const comment3 = await prisma.comment.create({
        data: {
            message: "I am first comment",
            userId: sally.id,
            postId: post1.id,
        },
    })
}

seed()