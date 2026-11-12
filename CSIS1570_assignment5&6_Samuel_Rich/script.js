const displayQuoteButton = document.querySelector('.quote');
// selects the quote display element and the button element
const quoteDisplay = document.getElementById('quote');
// array of quotes to be displayed
const quotes = [
    "i guess so...",
    "i think it's fine...",
    "if you wanna...",
    "okay...",
    "s...sure...",
    "y...yeah...",
    "y-yeah, definitely!",
    "yes!",
    "d-definitely not...",
    "don't do it...",
    "i think that's a bad idea...",
    "nah...",
    "no.",
    "NO!!!!!!",
    "no no no no no",
    "n-nuh uh...",
    "p...please don't...",
    "i dunno",
    "if i say yes, will you take me with you?",
    "i'm not comfortable answering that...",
    "i'm... not sure...",
    "maaaaaaaaybe",
    "uh...uhhhhh...",
    "you should ask your friends for help!",
    "i miss my wife",
    "I'M BING BONG"
];

// function to display a random quote from the quotes array
function showQuote() {
    if (!quoteDisplay) return;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    let selectedQuote = quotes[randomIndex];

    // makes sure that the quote "i'm bing bong" is displayed in lowercase
    if (selectedQuote === "I'M BING BONG") {
        quoteDisplay.textContent = `"${selectedQuote.toLowerCase()}"`;
    } else {
        quoteDisplay.textContent = `"${selectedQuote}"`;
    }
}

// watches for the button click and calls the showQuote function when clicked
if (displayQuoteButton) {
    displayQuoteButton.addEventListener('click', showQuote);
}
