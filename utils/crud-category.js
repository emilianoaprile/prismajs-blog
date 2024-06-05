const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const createCategories = (categoryNames, callback) => {
    prisma.category.createMany({
        data: categoryNames.map(categoryName => ({name: categoryName}))
    })
   .then(category => callback(category))
   .catch(error => console.log(error))
}

const readCategories = (callback) => {
    prisma.category.findMany()
   .then(categories => callback(categories))
   .catch(error => console.log(error))
}

module.exports = {
    createCategories,
    readCategories
}