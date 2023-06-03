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
	
	let i = 0;
	myLibrary.forEach(element => {
		var tr = document.createElement("tr");
		var td_title = document.createElement("td");
		var td_author = document.createElement("td");
		var	td_pages = document.createElement("td");
		var td_read = document.createElement("td");
		var remove_btn = document.createElement("td");
		var toggle_btn = document.createElement("td");
		
		td_title.textContent = element.title;
		td_author.textContent = element.author;
		td_pages.textContent = element.pages;
		td_read.textContent = element.read;
		
		remove_btn.classList.add('btn');
		remove_btn.classList.add('remove-btn');
		remove_btn.textContent = 'Remove';
		remove_btn.setAttribute('data-index', i);

		toggle_btn.classList.add('btn');
		toggle_btn.classList.add('toggle-btn');
		toggle_btn.textContent = 'Toggle';
		toggle_btn.setAttribute('data-index', i);
		
		table.appendChild(tr);
		tr.appendChild(td_title);
		tr.appendChild(td_author);
		tr.appendChild(td_pages);
		tr.appendChild(td_read);
		tr.appendChild(remove_btn);
		tr.appendChild(toggle_btn);
		i++;
	});
	
	const remove_btn = document.querySelectorAll(".remove-btn");
	const toggle_btn = document.querySelectorAll(".toggle-btn");
	
	remove_btn.forEach( button => {
		button.addEventListener('click', () => {
			let index = button.getAttribute('data-index');
			myLibrary.splice(index, 1);
			displayBookOnTable();
		});
	});
	
	toggle_btn.forEach( button => {
		button.addEventListener('click', () => {
			let index = button.getAttribute('data-index');
			if (myLibrary[index]['read'] === 'not read yet') 
				myLibrary[index]['read'] = 'already read'; 
			else
				myLibrary[index]['read'] = 'not read yet';
			displayBookOnTable();
		});
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
	
	const go_back = document.getElementById('back');

	add_new.addEventListener('click', () => {
		library.style.display = "none";
		form.style.display = "grid";
	});
	
	back.addEventListener('click', () => {
		library.style.display = "grid";
		form.style.display = "none";
	});

	form.addEventListener('submit', function() {
		event.preventDefault();

		read.forEach( op => {
			if (op.checked) {
				var book = new Book(title.value, author.value, pages.value, op.value);
				addBookToLibrary(book);

				library.style.display = "grid";
				form.style.display = "none";
				displayBookOnTable();
			}
		});
	});
	
	displayBookOnTable();
});

let book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
let book2 = new Book("Meditations", "Marcus Aurelius", 146, "already read");

addBookToLibrary(book1);
addBookToLibrary(book2);

