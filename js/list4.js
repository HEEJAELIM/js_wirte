const listForm = document.querySelector("#list-form");
const listValue = listForm.querySelector("input");
const list = document.querySelector("#list");

let book = [];

function saveList() {
    localStorage.setItem("book-key", JSON.stringify(book));
}

function submit(event) {
    event.preventDefault();
    const newList = listValue.value;
    listValue.value = "";
    const newListObj = {
        text: newList,
        id: Date.now()
    }
    book.push(newListObj);
    paint(newListObj);
    saveList();
}

function paint(newListObj) {
    const li = document.createElement("li");
    list.appendChild(li);
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newListObj.text;
    const button = document.createElement("button");
    li.appendChild(button);
    button.innerText = "🛴";
    button.addEventListener("click", delete1);
}

function delete1(event) {
    const liD = event.target.parentElement;
    liD.remove();
    saveList();
}


listForm.addEventListener("submit",submit);

const pBook =  JSON.parse(localStorage.getItem("book-key"));

if(pBook !== null) {
    book=pBook;
   saveList()
   pBook.forEach(paint);
}