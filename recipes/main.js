import recipes from './recipes.mjs';

function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}


console.log(getRandomListEntry(recipes));

function recipeTemplate(recipe) {
	return `<div class="food">
            <img src="${recipe.image}" class="display" alt="chocolate chip cookies">
            <div class ="textsection">
			<div class="tagdiv">
            ${tagsTemplate(recipe.tags)}
			</div>
            <div class="description">
                <h2>${recipe.name}</h2>
        ${ratingTemplate(recipe.rating)}
    <div class="descriptivetxt">
        <p>${recipe.description}</p>
    </div>
            </div>
        </div>
    </div>`;
}
function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
	let html = ``
	tags.forEach (tag => {
		html += `<div class="tag">${tag}</div>`;
	});
	return html;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
// our ratings are always out of 5, so create a for loop from 1 to 5

		// check to see if the current index of the loop is less than our rating
		// if so then output a filled star
		let blank = 5 - rating;
		for (let i = 0; i < rating; i++) {
  			html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
		};
		if (rating <= 4) {
		for (let i = 0; i < blank; i++) {
			html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
		};
	};
		// else output an empty star

	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}

const recipe = getRandomListEntry(recipes);
console.log(recipeTemplate(recipe));


function renderRecipes(recipeList) {
	// get the element we will output the recipes into
	const main = document.querySelector("main")
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
	let html = ``
	recipeList.forEach(recipe => {
		html += recipeTemplate(recipe);
	});
	// Set the HTML strings as the innerHTML of our output element.
	main.innerHTML = html;

}

function init() {
  // get a random recipe
  const recipe = getRandomListEntry(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();

const searchButton = document.getElementById("searchbutton");
searchButton.addEventListener('click', searchHandler);

	

function filter(query) {
	const filtered = recipes.filter(recipe => recipe.tags.find((item) => item.toLowerCase().includes(query)) || recipe.name.toLowerCase().includes(query));
	const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
		return sorted

}

function searchHandler(e) {
	e.preventDefault()
	// get the search input
	let searchinfo = document.getElementById("search").value;

	// convert the value in the input to lowercase
	searchinfo = searchinfo.toLowerCase()
	// use the filter function to filter our recipes
	let filtered = filter(searchinfo);
	// render the filtered list
	renderRecipes(filtered);
}

