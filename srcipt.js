const block = document.querySelector(".block");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

let count = 1;


btnNext.onclick = () => {
  count++;
  fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
    .then((reponce) => reponce.json())
    .then((data) => {
      block.innerHTML = `
        <h2>${data.title}</h2>
        <span>${data.id}</span>
        <h3>${data.completed}</h3>
        `;
    });
};

btnPrev.onclick = () => {
  fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    .then((reponce) => reponce.json())
    .then((data) => {
      block.innerHTML = `
      <h2>${data.title}</h2>
      <span>${data.id}</span>
      <h3>${data.completed}</h3>
      `;
    });
};

const getRequest = () => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
    .then((reponce) => reponce.json())
    .then((data) => {
      block.innerHTML = `
        <h2>${data.title}</h2>
        <span>${data.id}</span>
        <h3>${data.completed}</h3>
        `;
    });
};
getRequest();


fetch("https://jsonplaceholder.typicode.com/posts")
  .then((reponce) => reponce.json())
  .then((data) => {
    console.log(data);
  });
