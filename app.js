const {createPost, readPosts, readPostBySlug, updatePost, deletePost, publishedPosts} = require('./utils/crud-post.js');
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
    title: 'Titolo post non pubblicato',
    slug: 'titolo-post-prova-post-non-pubblicato',
    image: 'https://picsum.photos/200/300',
    content: 'Contenuto post non pubblicato',
    published: false,
    categoryId: 2,
    tags: {
        connect: [{id: 10}]
    }
}

// createPost(postData, (post) => {
//     console.log(`Post ${post} creato con successo`);
// })

publishedPosts((posts) => {
    console.log(posts);
})