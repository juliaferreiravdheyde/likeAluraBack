import express from "express";

const posts = [
    {
        id: 1,
        descricao: "uma foto teste",
        imagem: "http://placecats.com/millie/300/150",
    },
    {
        id: 2,
        descricao: "outra foto engraçada",
        imagem: "http://placecats.com/whiskers/400/200",
    },
    {
        id: 3,
        descricao: "gato dormindo",
        imagem: "http://placecats.com/sleepy/350/250",
    },
    {
        id: 4,
        descricao: "gato brincando",
        imagem: "http://placecats.com/playful/500/300",
    },
    {
        id: 5,
        descricao: "gato observador",
        imagem: "http://placecats.com/watchful/450/350",
    },
    {
        id: 6,
        descricao: "gato curioso",
        imagem: "http://placecats.com/curious/600/400",
    },
    {
        id: 7,
        descricao: "gato fofo",
        imagem: "http://placecats.com/cute/550/450",
    },
];


const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscaPostPorId(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscaPostPorId(req.params.id);
    res.status(200).json(posts[index]);
});