const newBookBtn = document.querySelector("#newBtn");
newBookBtn.addEventListener("click", () => (popUpForm.style.display = "block"));

const addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", addBookToLibrary);

const popUpForm = document.getElementById("popUp");
const closePopUp = document.getElementsByTagName("span")[0];
closePopUp.addEventListener("click", () => (popUpForm.style.display = "none"));



class Book {
  constructor(title, author, pages, read) {
      this.title = form.title.value; 
      this.author = form.author.value; 
      this.pages = form.pages.value + 'pg'; 
      this.read = form.read.checked; 
  }
}

let myLibrary = [];
let newBook;

function addBookToLibrary() {
  event.preventDefault();

  popUpForm.style.display = "none";

  newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

function render() {
  const display = document.getElementById("Library-container");
  const books = document.querySelectorAll(".book");

  books.forEach((book) => display.removeChild(book));

  for (let i = 0; i < myLibrary.length; i++) {
    createBook(myLibrary[i]);

    console.log(myLibrary);
  }
}

function createBook(item) {
  const library = document.querySelector("#Library-container");
  const bookDiv = document.createElement("div");
  const titleDiv = document.createElement("div");
  const authDiv = document.createElement("div");
  const pagesDiv = document.createElement("div");
  const removeBtn = document.createElement("button");
  const readBtn = document.createElement("button");

  bookDiv.classList.add("book");
  bookDiv.setAttribute("id", myLibrary.indexOf(item));

  titleDiv.textContent = item.title;
  titleDiv.classList.add("title");
  bookDiv.appendChild(titleDiv);

  authDiv.textContent = item.author;
  authDiv.classList.add("author");
  bookDiv.appendChild(authDiv);

  pagesDiv.textContent = item.pages;
  pagesDiv.classList.add("pages");
  bookDiv.appendChild(pagesDiv);

  readBtn.textContent = "Read";
  readBtn.classList.add("readBtn");
  bookDiv.appendChild(readBtn);

  if (item.read === true) {
    readBtn.textContent = "Read";
    readBtn.style.backgroundColor = "green";
  } else {
    readBtn.textContent = "not Read";
    readBtn.style.backgroundColor = "red";
  }

  readBtn.addEventListener("click", () => {
    item.read = !item.read;
    render();
  });

  removeBtn.textContent = "Remove";
  removeBtn.classList.add("#removeBtn");
  removeBtn.setAttribute("id", "removeBtn");
  bookDiv.appendChild(removeBtn);

  removeBtn.addEventListener("click", () => {
    myLibrary.splice(myLibrary.indexOf(item), 1);
    render();
  });
  library.appendChild(bookDiv);
}
