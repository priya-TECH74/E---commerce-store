// Default user
let user = { username: "Nilaa", password: "1234" };

// Initial posts
let postData = [
    { user: "Aishu", img: "https://picsum.photos/400/300?1", text: "Good vibes only ✨", likes: 0, comments: [] },
    { user: "Karthi", img: "https://picsum.photos/400/300?2", text: "Nature therapy 🌿", likes: 0, comments: [] }
];

// Login function
function login() {
    if (username.value === user.username && password.value === user.password) {
        loginBox.style.display = "none";
        feed.style.display = "block";
        renderPosts();
    } else { alert("Wrong login ❌"); }
}

// Render posts
function renderPosts() {
    posts.innerHTML = "";
    postData.forEach((p,i)=>{
        posts.innerHTML += `
        <div class="post">
            <div class="post-header">
                <img class="avatar" src="https://i.pravatar.cc/50?img=${i+5}">
                <b>${p.user}</b>
            </div>
            ${p.img?`<img class="post-image" src="${p.img}">`:""}
            <div class="post-text">${p.text}</div>
            <div class="actions">
                <button onclick="likePost(${i})">❤️ ${p.likes}</button>
                <button onclick="commentPost(${i})">💬</button>
                <button onclick="alert('Post shared 🔁')">🔁</button>
            </div>
            <div class="comments">${p.comments.join("<br>")}</div>
        </div>`;
    });
}

// Like
function likePost(i) {
    postData[i].likes++;
    renderPosts();
}

// Comment
function commentPost(i) {
    let c = prompt("Enter comment:");
    if(c) { postData[i].comments.push("💬 "+c); renderPosts(); }
}

// Add new post
function addPost() {
    let text=postText.value, img=postImage.value;
    if(text) {
        postData.unshift({ user:"Nilaa", img, text, likes:0, comments:[] });
        postText.value=""; postImage.value="";
        renderPosts();
    }
}
