function reader() {
    const options = {method: 'GET'};

    fetch('https://api.voicerss.org/?key=4da2191a46b34962be23655d83ee1d71&hl=en-us&c=MP3&src=Hello%2C%20world!', options)
    .then(response => response.text())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}

reader()


//function to highligth the text in the web page and return the highlighted text
let highlightedText;

document.addEventListener("mouseup", () => {
highlightedText =window.getSelection().toString();
console.log(highlightedText)
});




//function to send the text to the voice reader & receive the MP3 

//function to send the MP3 file to the MP3 reader (via HTML)