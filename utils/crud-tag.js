const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const createTags = (tagNames, callback) => {
    prisma.tag.createMany({
        data: tagNames.map(tagName => ({name: tagName}))
    })
   .then(tag => callback(tag))
   .catch(error => console.log(error))
}

const readTags = (callback) => {
    prisma.tag.findMany()
   .then(tags => callback(tags))
   .catch(error => console.log(error))
}

module.exports = {
    createTags,
    readTags
}