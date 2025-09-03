const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(response => response.json())
    .then(data => displayPost(data));
};

const displayPost = (posts) => {
    const postContainer = document.getElementById('post-container');
    postContainer.innerText = '';
    
    posts.forEach(post => {
        const li = document.createElement('li');
        li.innerText = post.title;
        postContainer.appendChild(li);
    });
};