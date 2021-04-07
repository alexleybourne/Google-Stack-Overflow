// Checking if the page is not a google search results page
const canRun = !window.location.href.includes('search');

const stackSearch = () => {
    const searchValue = document.querySelector('[title="Search"]').value;
    // If the value is not blank it continues
    if (searchValue.length) {
        // Replaces spaces in the query with pluses to work in url query
        const formattedValue = searchValue.replace(/\s/g, '+');
        // Sends the new url to the search bar and visits it
        window.location.href = `https://stackoverflow.com/search?q=${formattedValue}`;
    }
}

document.addEventListener('click', function (event) {
    // Don't want it running on google search / result pages
    if (!canRun) return;
    // If we have not clicked on the stack overflow button we want the page 
    // to behave the same as normal
    if (!event.target.matches('.Stack-Overflow-Button')) return
	// Prevent default click action that google does ( searches )
	event.preventDefault();
    // Now we run our search Function
    stackSearch();
}, false);


// This runs if this is the correct page
if (canRun) {
    // Finding each "I'm feeling lucky" Button
    var inputs = document.querySelectorAll('input[name="btnI"]');
    for (i = 0; i < inputs.length; i++) {
        // Creating the new stack overflow button
        const newButton = document.createElement("button");
        newButton.innerHTML = "Stack Overflow";
        newButton.classList.add('Stack-Overflow-Button');
        newButton.onclick = (() => stackSearch());
        // replacing the feeling lucky button
        inputs[i].replaceWith(newButton);
    }
}
