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

// Declaration
let mainEl = document.getElementById("main-el")


// Render app
function renderPosts() {
    mainEl.innerHTML = ""
    for(let i = 0; i < posts.length; i++){
        mainEl.innerHTML += `<section>


                <div class="post-header">
                    <img class="avatar" src=${posts[i].avatar}>
                    <div class="post-user-info">
                        <p><span class="bold">${posts[i].name}</span></p>
                        <p>${posts[i].location}</p>
                    </div>
                </div>

                <div>
                    <img ondblclick="addLike(this)" name=${i} class="post-picture" src=${posts[i].post}>
                </div>

                <div class="post-interaction">
                    <div class="interactions-container">
                        <button ondblclick="addLike(this)" name=${i} class="icon-interactions like-btn"><img class="icon" alt="like" src="images/icon-heart.png"></button>
                        <button class="icon-interactions"><img class="icon" alt="comment" src="images/icon-comment.png"></button>
                        <button class="icon-interactions"><img class="icon" alt="direct message" src="images/icon-dm.png"></button>
                    </div>
                    <div>
                        <p><span class="bold">${posts[i].likes} likes</span></p>
                    </div>
                    <div class="comment">
                        <p><span class="bold">${posts[i].username}</span> ${posts[i].comment}</p>
                    </div>
                </div>


        </section>`
    }
}

renderPosts()

function addLike(button){
    // console.log("button clicked")
    posts[button.name].likes++
    renderPosts()
}