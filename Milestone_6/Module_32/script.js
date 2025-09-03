document.getElementById('btn').addEventListener('click', function() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
      .then(response => response.json())
      .then(json => loadData(json));
});

const loadData = (data) => {
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