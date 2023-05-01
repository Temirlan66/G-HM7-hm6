const block = document.querySelector(".block");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

// Извиняюсь что нарушил  еще принцип DRY , другого варианта не нашел....(

let count = 1;
const request = async () => {
  try {
    const reponce = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${count}`
    );
    const data = await reponce.json();
    block.innerHTML = `
          <h1>Count:${count}</h1>
            <h2>${data.title}</h2>
           <span>${data.id}</span>
            <h3>${data.completed}</h3>`;

    btnNext.addEventListener("click", async () => {
      count++;
      const reponce = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${count}`
      );
      const data = await reponce.json();
      block.innerHTML = `
            <h1>Count:${count}</h1>
              <h2>${data.title}</h2>
             <span>${data.id}</span>
              <h3>${data.completed}</h3>`;
    });

    btnPrev.addEventListener("click", async () => {
      count = 1;
      const reponce = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${count}`
      );
      const data = await reponce.json();
      block.innerHTML = `
            <h1>Count:${count}</h1>
              <h2>${data.title}</h2>
             <span>${data.id}</span>
              <h3>${data.completed}</h3>`;
    });
    console.log(count);
  } catch (error) {
    console.log("ERROR");
  }
};
request();

const requestPosts = async () => {
  try {
    const reponce = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await reponce.json();
    console.log("POSTS", data);
  } catch (error) {
    console.log("ERROR");
  }
};

requestPosts();
