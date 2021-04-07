// document.body.style.backgroundColor = 'red';
console.log('Loaded!:');
const luckyButton = document.body.getElementsByClassName("RNmpXc")[1];
console.log('Old Button:');
console.log(luckyButton);

const stackSearch = () => {
    console.log("stackSearch has been summoned");
    const inputVal = document.body.getElementsByClassName("gLFyf").value;
    console.log('Input Value:', inputVal);
    // window.location.href = `https://stackoverflow.com/search?q=${inputVal}`;
}

document.addEventListener('click', function (event) {

    if (!event.target.matches('.Stack-Overflow-Button')) return;

	// Don't follow the link
	event.preventDefault();

	// Log the clicked element in the console
	console.log(event.target);
    console.log(event.target.value)

}, false);


const newButton = document.createElement("button");
newButton.innerHTML = "Stack Overflow";
newButton.classList.add('Stack-Overflow-Button');
newButton.onclick = (() => stackSearch());
console.log('New Button vvvvv');
console.log(newButton);

luckyButton.replaceWith(newButton);