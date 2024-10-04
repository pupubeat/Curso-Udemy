const posts = [
    {
        userId: 1,
        id: 1,
        title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body:
            "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
];

// Estructura promesa
const findPostByID = (id) => {
    const post = posts.find(post => post.id === id)

    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                if (post) {
                    resolve(post);
                } else {
                    reject(`no se encontro el ID ${id}`);
                }
            }, 2000
        );
    });
};

// findPostByID(4)
//     .then((post) => console.log(post))
//     .catch((e) => console.log(e));

// Situación de una sola solicitud //
// const buscar = async (id) => {
//     let loading = true
//     try {
//         const posts = await findPostByID(id);
//         console.log(posts);
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log('Carga completa');
//         loading = false;
//     }
// }

// Situación de múltiples solicitudes //
const buscar = async (id) => {
    try {
        const posts = await Promise.all([findPostByID(1), findPostByID(2)]);
        console.log(posts.title[1], posts.title[2])
    } catch (error) {
        console.log(error);
    }
}
buscar(4)