const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
]

const left = document.querySelector(".left")
const middle = document.querySelector(".middle")

function createArticle(article) {
	const book_addition = document.createElement('div');
	book_addition.classList.add(`book${article.id}`);

	const new_article = `
		<p class="date">${article.date}</p>
        <p class="age">${article.ages}</p>
        <p class="genre">${article.genre}</p>
        <p class="stars">${article.stars}</p>
		`;

	book_addition.innerHTML = new_article;
	left.appendChild(book_addition);

	const middle_addition = document.createElement('div');
	middle_addition.classList.add(`book${article.id}`);

	const middle_article = `
		<h2 class="title">${article.title}</h2>
    	<img src=${article.imgSrc} alt=${article.imgAlt} class="booking">
    	<p class="description">${article.description}</p>
	`;

	middle_addition.innerHTML = middle_article;
	middle.appendChild(middle_addition);

	let min = article.id;
	let max = article.id + 1;

	const style = document.createElement('style');
	document.head.appendChild(style);

	style.sheet.insertRule(`
		.book${article.id} {
			grid-row: ${min}/${max};
			height:700px;
		}
		`);
	
	
	
}

articles.forEach(article => createArticle(article))