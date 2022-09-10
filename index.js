const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainEl = document.getElementById('main')

let html = ''

for(let i = 0; i< posts.length; i++) {
    html += `
        <section>
            <div class="encabezado">
                <img src="${posts[i].avatar}" class="profile">
                <div>
                    <h1>${posts[i].name}</h1>
                    <p>${posts[i].location}</p>
                </div>
            </div>
            <img src="${posts[i].post}" class="picture">
        </section>
        <footer>
            <div class="iconos">
                <img src="images/icon-heart.png" class="logos">
                <img src="images/icon-comment.png" class="logos">
                <img src="images/icon-dm.png" class="logos">
            </div>
            <h1>
                ${posts[i].likes} likes
            </h1>
            <div class="comentarios">
                <h1>${posts[i].username}</h1>
                <p class="parrafo">${posts[i].comment}</p>
            </div>
            <script src="index.js"></script>
        </footer>
    `
}

mainEl.innerHTML += html

