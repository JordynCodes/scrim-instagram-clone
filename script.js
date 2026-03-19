const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "/images/avatar-vangogh.jpg",
        post: "/images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "/images/avatar-courbet.jpg",
        post: "/images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "/images/avatar-ducreux.jpg",
        post: "/images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");
    for (let i = 0; i < posts.length; i++) {
        let post = posts[i]
        main.innerHTML +=
            `<section class="post">
                <div class="post-header">
                    <img class="poster-avatar" src="${post.avatar}" alt="Poster's avatar">
                    
                    <div class="poster-info">
                        <p class="name">${post.name}</p>
                        <p class="location">${post.location}</p>
                    </div>
                </div>
                
                <img class="post-image" src="${post.post}" alt="Image posted by user">
                
                <div class="post-icons">
                    <img class="icon" src="/images/icon-heart.png" alt="Like">
                    <img class="icon" src="/images/icon-comment.png" alt="Comment">
                    <img class="icon" src="/images/icon-dm.png" alt="Share">
                </div>
                
                <p class="like-count">${post.likes} likes</p>
                <p class="caption"><span class="username">${post.username}</span> ${post.comment}</p>
            </section>`
    }
})
