let myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		return `${title} by ${author}, ${pages} pages, ${read}`;
	}
}

function addBookToLibrary(book) {
	myLibrary.push(book);
}

function displayBookOnTable() {
	const table = document.getElementById("library-table");

	myLibrary.forEach(element => {
		var tr = document.createElement("tr");
		var td_title = document.createElement("td");
		var td_author = document.createElement("td");
		var	td_pages = document.createElement("td");
		var td_read = document.createElement("td");
		
		td_title.textContent = element.title;
		td_author.textContent = element.author;
		td_pages.textContent = element.pages;
		td_read.textContent = element.read;

		table.appendChild(tr);
		tr.appendChild(td_title);
		tr.appendChild(td_author);
		tr.appendChild(td_pages);
		tr.appendChild(td_read);
	});
}


let book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
let book2 = new Book("Meditations", "Marcus Aurelius", 146, "already read");

addBookToLibrary(book1);
addBookToLibrary(book2);

document.addEventListener('DOMContentLoaded', function() {
	displayBookOnTable();
});
