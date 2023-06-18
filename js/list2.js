const listForm = document.querySelector("#list-form");
const listValue = listForm.querySelector("input");
const list = document.querySelector("#list");

let book = [];

const BOOKKEY = "book-key";

function saveList() {
    localStorage.setItem(BOOKKEY, JSON.stringify(book));
}

function submit(event) {
    event.preventDefault();
    const newList = listValue.value;
    listValue.value = "";
    const newListObj = {
        text:newList,
        id: Date.now(),
    }
    book.push(newListObj);
    paint(newListObj);
    saveList();
}

function paint(newListObj) {
    const li = document.createElement("li");
    li.id = newListObj.id;
    list.appendChild(li);
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newListObj.text;
    const button = document.createElement("button");
    li.appendChild(button);
    button.innerText = "🏍";
    button.addEventListener("click", delete1);
}

function delete1(event) {
    const li = event.target.parentElement;
    book = book.filter((paper) => !== li.id);
    li.remove();

}


listForm.addEventListener("submit",submit);

const savedList = localStorage.getItem(BOOKKEY);

if(savedList !== null) {
    const pBook = JSON.parse(savedList);
    book = pBook;
    pBook.forEach(paint);
}



