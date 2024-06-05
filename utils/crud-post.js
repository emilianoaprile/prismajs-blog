// istanziare prisma
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const createPost = (data, callback) => {
    prisma.post.create({data})
    .then(post => callback(post))
    .catch(error => console.log(error))
}

const readPosts = (slug, callback) => {
    prisma.post.findMany({
        where: {
            slug
        },
        include: {
            tags: {
                select: {
                    name: true
                }
            },
            category: {
                select: {
                    name: true
                }
            }
        }
    })
    .then(posts => callback(posts))
    .catch(error => console.log(error))
}

const updatePost = (slug, data, callback) => {
    prisma.post.update({
        where: {
            slug
        },
        data
    })
    .then(post => callback(post))
    .catch(error => console.log(error))
}