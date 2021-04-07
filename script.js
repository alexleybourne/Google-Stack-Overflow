// Checking if the page is a google search results page
const canRun = !window.location.href.includes('search')
console.log('CAN RUN:', canRun);
console.log('LOCATION:', window.location.href)

const stackSearch = () => {
    console.log("stackSearch has been summoned");
    const searchValue = document.querySelector('[title="Search"]').value;
    console.log('Input Value:', searchValue);
    const formattedValue = searchValue.replace(/\s/g, '+');
    console.log('Formatted Value:', formattedValue);
    if (formattedValue.length) {
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
    const luckyButton = document.getElementsByClassName('RNmpXc')[1]
    const newButton = document.createElement("button");
    newButton.innerHTML = "Stack Overflow";
    newButton.classList.add('Stack-Overflow-Button');
    newButton.onclick = (() => stackSearch());
    console.log('New Button vvvvv');
    console.log(newButton);
    luckyButton.replaceWith(newButton);
}

