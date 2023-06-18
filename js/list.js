const listForm = document.querySelector("#list-form");
const inputValue = listForm.querySelector("input");
const list = document.querySelector("#list");

let book = [];

function savelist() {
    localStorage.setItem("list-key",JSON.stringify(book));
}
 
function delete1(event) {
    const li = event.target.parentElement;
    li.remove();
    book = book.filter((paper) => book.id !== parseInt(li.id));
    savelist();
}

function paint(newList) {
    const li = document.createElement("li");
    li.id = newList.id;
    const span = document.createElement("span");
    span.innerText = newList.text;
    const button = document.createElement("button");
    button.innerText = "🛴";
    button.addEventListener("click",delete1);
    list.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);
}


function submit(event) {
    event.preventDefault();
    const newList = inputValue.value;
    inputValue.value = "";
    const newListObj = {
        text:newList,
        id: Date.now(),
    };
    book.push(newListObj);
    paint(newListObj);
    savelist();
}

listForm.addEventListener("submit", submit);

const saveBook = localStorage.getItem("list-key");


if(saveBook !== null) {
    const pBook = JSON.parse(saveBook);
    book = pBook;
    pBook.forEach(paint);
 
}
