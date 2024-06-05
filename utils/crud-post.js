// istanziare prisma
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const createPost = (data, callback) => {
    prisma.post.create({data})
    .then(post => callback(post))
    .catch(error => console.log(error))
}

const readPosts = (callback) => {
    prisma.post.findMany({
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

const readPostBySlug = (slug, callback) => {
    prisma.post.findUnique({
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
    .then(post => callback(post))
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

const deletePost = (slug, callback) => {
    prisma.post.delete({
        where: {
            slug
        }
    })
    .then(post => callback(post))
    .catch(error => console.log(error))
}

const publishedPosts = (callback) => {
    prisma.post.findMany({
        where: {
            published: true
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

const searchString = (string, callback) => {
    prisma.post.findMany({
        where: {
            content: {
                contains: string
            }
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

module.exports = {
    createPost,
    readPosts,
    readPostBySlug,
    updatePost,
    deletePost,
    publishedPosts,
    searchString
}