var header = document.createElement("pedro");
header.textContent = "Ajout du texte qu'on veut entendre";
document.body.appendChild(header);

// let highlightedText;

//Function reader => get under text the mp3 from highlightedText
function reader() {
    const options = {method: 'GET'};
    // Fetch the original image
fetch(`https://api.voicerss.org/?key=4da2191a46b34962be23655d83ee1d71&hl=fr-fr&c=MP3&src=${highlightedText}`)
// Retrieve its body as ReadableStream
.then((response) => {
  const reader = response.body.getReader();
  return new ReadableStream({
    start(controller) {
      return pump();
      function pump() {
        return reader.read().then(({ done, value }) => {
          // When no more data needs to be consumed, close the stream
          if (done) {
            controller.close();
            return;
          }
          // Enqueue the next data chunk into our target stream
          controller.enqueue(value);
          return pump();
        });
      }
    },
  });
})
// Create a new response out of the stream
.then((stream) => new Response(stream))
// Create an object URL for the response
.then((response) => response.blob())
.then((blob) => URL.createObjectURL(blob))
// Update image
.then((url) => console.log((document.querySelector("audio").src = url)))
.catch((err) => console.error(err));
    // fetch(`https://api.voicerss.org/?key=4da2191a46b34962be23655d83ee1d71&hl=fr-fr&c=MP3&src=${highlightedText}`, options)
    // .then(response => response.text())
    // .then(response => console.log(response))
    // .catch(err => console.error(err));
}

//Function to highligth the text in the web page and return the highlighted text
document.addEventListener("mouseup", () => { //the user highlight a text and when mouse up, the function is launch
highlightedText = window.getSelection().toString().replace(/ /g, "%2C%20"); //the highlighted text is put into string and replace the space by "%2C%20"
console.log(highlightedText);
reader();
});














// reader()

//function to send the text to the voice reader & receive the MP3 

//function to send the MP3 file to the MP3 reader (via HTML)