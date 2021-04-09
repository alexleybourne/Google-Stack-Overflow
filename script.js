// Checking if the page is google search but not a google search results page
const includesGoogle = window.location.href.includes('www.google.com');
const canRun = !window.location.href.includes('search') && includesGoogle;

const getSearchValue = () => {
    const searchValue = document.querySelector('[title="Search"]').value;
    // If the value is not blank it continues
    if (searchValue.length) {
        // Replaces spaces in the query with pluses to work in url query
        const formattedValue = searchValue.replace(/\s/g, '+');
        // Sends the cleaned up value back
        return formattedValue;
    }
}

const stackSearch = () => {
    // gets the input value from the function
    const search = getSearchValue();
    // checks it has returned a value
    if (search) {
        // visits the search
        window.location.href = `https://stackoverflow.com/search?q=${search}`;
    }
}

document.addEventListener('click', (e) => {
    // Don't want it running on google search / result pages
    if (!canRun) return;
    // If we have not clicked on the stack overflow button we want the page 
    // to behave the same as normal
    if (!e.target.matches('.Stack-Overflow-Button')) return
	// Prevent default click action that google does ( searches )
	e.preventDefault();
    // Now we run our search Function
    stackSearch();
}, false);


document.addEventListener('keyup', (e) => {
    // The search and results page both use the same input title
    // This code can run on both (⌐■_■)
    if (!includesGoogle) return;
    // Gets the search value, checks it has a value and checks for the "/s" command
    const search = getSearchValue();
    const stackSearch = search?.includes('/s');
    document.querySelector('[title="Search"]').style.color = stackSearch ? "#ED7A1B" : "black";
    // Checking it can run and it is the enter key
    if (e.code == "Enter" && stackSearch) {
        e.preventDefault();
        // removes "/s+" from the start of our query
        const searchCleaned = search.trim().replace('/s','');
        console.log('STACK SEARCH!', searchCleaned);
        window.location.href = `https://stackoverflow.com/search?q=${searchCleaned}`;
    }
});

// This runs if this is the correct page
if (canRun) {
    // Finding each "I'm feeling lucky" Button
    var inputs = document.querySelectorAll('input[name="btnI"]');
    for (i = 0; i < inputs.length; i++) {
        // This is the main home screen Button that is going to be animated
        if ( i == 1 ) {
            // Creating our animated button so there is no jump on load
            const ButtonAnimated = document.createElement("div");
            ButtonAnimated.classList.add('Button-Animation')
            ButtonAnimated.innerHTML = `
                <div class="Button-Container">
                    <button class="Google-Button Button">I'm Feeling Lucky</button>
                    <button onclick="stackSearch()" class="Stack-Overflow-Button Button">Stack Overflow</button>
                </div>
            `
            // replacing the feeling lucky button
            inputs[i].replaceWith(ButtonAnimated);
        } else {
            // Creating the new stack overflow button
            const newButton = document.createElement("button");
            newButton.innerHTML = "Stack Overflow";
            newButton.classList.add('Stack-Overflow-Button', 'Button');
            newButton.onclick = (() => stackSearch());
            // replacing the feeling lucky button
            inputs[i].replaceWith(newButton);
        }
    }
}
