const {createPost, readPosts, readPostBySlug, updatePost, deletePost} = require('./utils/crud-post.js');
const {createTags, readTags} = require('./utils/crud-tag.js');
const {createCategories, readCategories} = require('./utils/crud-category.js');

// creo le categorie
createCategories(['Tecnologia', 'Programmazione', 'Economia', 'Politica'], (categories) => {
    console.log(`Categorie ${categories} creati con successo`);
})

// creo i tags
createTags(['#Tecnologia','#Programmazione','#Economia','#Politica','#Fitness','#Design','#Musica','#Film','#Libri','#Arte','#Moda','#Sport','#Ambiente','#Scienza','#Finanza'], (tags) => {
    console.log(`Tags ${tags} creati con successo`);
});

// creazione di un post
// const postData = {
//     title: 'Titolo post',
//     slug: 'titolo-post',
//     content: 'Contenuto post',
//     category: {
//         connect: {
//             name: 'Tecnologia'
//         }
//     },
//     tags: {
//         connect: [
//             {
//                 name: '#Tecnologia'
//             },
//             {
//                 name: '#Programmazione'
//             }
//         ]
//     }
// }