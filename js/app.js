function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => loadPosts(data))
}

getPosts()

function loadPosts(posts) {
    const postSection = document.getElementById('posts-section');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        `
        postSection.appendChild(div);
    }
}