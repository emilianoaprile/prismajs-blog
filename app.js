const {createPost, readPosts, readPostBySlug, updatePost, deletePost} = require('./utils/crud-post.js');
const {createTags, readTags} = require('./utils/crud-tag.js');
const {createCategories, readCategories} = require('./utils/crud-category.js');

// creo le categorie
// createCategories(['Tecnologia', 'Programmazione', 'Economia', 'Politica'], (categories) => {
//     console.log(`Categorie ${categories} creati con successo`);
// })

// // creo i tags
// createTags(['#Tecnologia','#Programmazione','#Economia','#Politica','#Fitness','#Design','#Musica','#Film','#Libri','#Arte','#Moda','#Sport','#Ambiente','#Scienza','#Finanza'], (tags) => {
//     console.log(`Tags ${tags} creati con successo`);
// });

// creazione di un post
const postData = {
    title: 'Titolo post 2',
    slug: 'titolo-post-prova-2',
    image: 'https://picsum.photos/200/300',
    content: 'Contenuto post 2',
    published: true,
    categoryId: 1,
    tags: {
        connect: [{id: 1}, {id: 2}]
    }
}

createPost(postData, (post) => {
    console.log(`Post ${post} creato con successo`);
})