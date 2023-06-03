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
	
	while (table.rows.length > 1) {
		  table.deleteRow(1);
	}

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


document.addEventListener('DOMContentLoaded', function() {
	const add_new = document.getElementById('new-book');
	const form = document.getElementById('form');
	const lib_form = document.getElementById('library-form');
	const library = document.getElementById('library');
	
	const title = document.getElementById('title');
	const author = document.getElementById('author');
	const pages = document.getElementById('pages');
	const read = document.querySelectorAll('input[name="read"]');

	displayBookOnTable();

	add_new.addEventListener('click', () => {
		library.style.display = "none";
		form.style.display = "flex";
	});

	form.addEventListener('submit', function() {
		event.preventDefault();

		read.forEach( op => {
			if (op.checked) {
				var book = new Book(title.value, author.value, pages.value, op.value);
				addBookToLibrary(book);

				library.style.display = "flex";
				form.style.display = "none";
				displayBookOnTable();
				return;
			}
		});

	});

});

let book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
let book2 = new Book("Meditations", "Marcus Aurelius", 146, "already read");

addBookToLibrary(book1);
addBookToLibrary(book2);

