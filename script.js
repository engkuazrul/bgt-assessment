const ul = document.querySelector("ul");

const createNodeLi = () => document.createElement("li");
const isEven = (number) => number % 2 == 0 ? true : false;
const every6th = (number) => number % 6 == 0 ? true : false;

const createContent = (contentLength) => {
  for (let i = 1; i < contentLength; i++) {
    let li = createNodeLi();
    li.textContent = `Item ${i}`;
  
    if (isEven(i)) {
      li.style.color = 'red';
    }
  
    if(every6th(i)){
      li.style.color = 'green';
    }
  
    ul.appendChild(li);
  };
};

createContent(13);

