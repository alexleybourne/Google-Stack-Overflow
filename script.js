// Checking if the page is a google search results page
const canRun = !window.location.href.includes('search')
console.log('CAN RUN:', canRun);
console.log('LOCATION:', window.location.href)

const stackSearch = () => {
    console.log("stackSearch has been summoned");
    const searchValue = document.querySelector('[title="Search"]').value;
    console.log('Input Value:', searchValue);
    // window.location.href = `https://stackoverflow.com/search?q=${searchVal}`;
}

document.addEventListener('click', function (event) {
    // Don't want it running on google search / result pages
    if (!canRun) return;

    // if (!event.target.matches('.Stack-Overflow-Button')) return

	// Don't follow the link
	event.preventDefault();

	// Log the clicked element in the console
	console.log(event.target);
    console.log(event.target.value)

}, false);

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

