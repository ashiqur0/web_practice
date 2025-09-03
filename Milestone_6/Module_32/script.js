const post_url = 'https://jsonplaceholder.typicode.com/posts';
document.getElementById('btn').addEventListener('click', function() {
    fetch(post_url)
      .then(response => response.json())
      .then(json => loadData(json));
      // .then(json => console.log(json));
});

const loadData = (data) => {
  document.getElementById('card-container').innerText = '';
  data.forEach(element => {
    const div = document.createElement('div');
    div.innerHTML = `
    <li class="w-5/6 h-full p-2.5 bg-white mb-4 rounded-2xl mx-auto shadow-xl">
      <h1 class="text-red-400 text-2xl font-semibold">${element.title}</h1>
      <p class='text-gray-600 mt-2'>${element.body}</p>
    
    </li>
    
    `
    document.getElementById('card-container').appendChild(div);
  });
}

const comment_url = 'https://jsonplaceholder.typicode.com/comments';
document.getElementById('btn2').addEventListener('click', function() {
    fetch(comment_url)
      .then(response => response.json())
      .then(json => {
        loadData2(json)
      });
});

const loadData2 = (data) => {
  document.getElementById('card-container').innerText = '';
  let i = 1;
  data.forEach(element => {
    const div = document.createElement('div');
    div.innerHTML = `
    <li class="w-5/6 h-full p-2.5 bg-white mb-4 rounded-2xl mx-auto shadow-xl">
      <h1 class="text-red-400 text-2xl font-semibold">${i++} ${element.name}</h1>
      <p class='text-purple-600 mt-2'>${element.email}</p>
      <p class='text-gray-600 mt-2'>${element.body}</p>    
    </li>    
    `
    document.getElementById('card-container').appendChild(div);
  });
}