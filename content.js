let highlightedText;

// Function to highligth the text in the web page and return the highlighted text
document.addEventListener("mouseup", () => { //the user highlight a text and when mouse up, the function is launch
  highlightedText = window.getSelection().toString().replace(/ /g, "%2C%20"); //the highlighted text is put into string and replace the space by "%2C%20"
  console.log(highlightedText);
  

  let baliseAudio = "<audio controls src=" + `"https://api.voicerss.org/?key=4da2191a46b34962be23655d83ee1d71&hl=fr-fr&c=MP3&src=${highlightedText}"` + "></audio>";
  document.body.innerHTML += baliseAudio;
 });

// browser.action.onClicked.addListener(async (tab) => {
//   try {
//     await browser.scripting.insertCSS({
//       target: {
//         tabId: tab.id,
//       },
//       css: `body { border: 20px dotted pink; }`,
//     });
//   } catch (err) {
//     console.error(`failed to insert CSS: ${err}`);
//   }
// });

// const modal = `<div class="modal-container active">
// <div class="overlay modal-trigger"></div>
// <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="dialogDesc">
//   <button
//   aria-label="close modal"
//   class="close-modal modal-trigger">X</button>
//   <h1 id="modalTitle">Voici du Contenu</h1>
//   <p id="dialogDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nam exercitationem nihil veritatis sapiente quia.</p>
// </div>
// </div>`
// document.body.innerHTML += modal;

// const modalContainer = document.querySelector(".modal-container");
// const modalTriggers = document.querySelectorAll(".modal-trigger");
// modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))
// function toggleModal(){
//   modalContainer.classList.toggle("active")
// }


//Fonction trouvée sur le site medium
// chrome.runtime.onMessage.addListener((request) => {
//   if(request.type === 'popup-modal'){
//   showModal();
//   }
//   })
//   const showModal = () => {
//   const modal = document.createElement("dialog");
//   modal.setAttribute(
//   "style",`
//   height:450px;
//   border: none;
//   top:150px;
//   border-radius:20px;
//   background-color:white;
//   position: fixed; box-shadow: 0px 12px 48px rgba(29, 5, 64, 0.32);
//   `
//   );
//   modal.innerHTML = `<iframe id="popup-content"; style="height:100%"></iframe>
//   <div style="position:absolute; top:0px; left:5px;">
//   <button style="padding: 8px 12px; font-size: 16px; border: none; border-radius: 20px;">x</button>
//   </div>`;
//   document.body.appendChild(modal);
//   const dialog = document.querySelector("dialog");
//   dialog.showModal();
//   const iframe = document.getElementById("popup-content");
//   iframe.src = chrome.extension.getURL("index.html");
//   iframe.frameBorder = 0;
//   dialog.querySelector("button").addEventListener("click", () => {
//   dialog.close();
//   });
//   }


// //Function reader => get under text the mp3 from highlightedText
// function reader() {
//     const options = {method: 'GET'};
//     // Fetch the original image
// fetch(`https://api.voicerss.org/?key=4da2191a46b34962be23655d83ee1d71&hl=fr-fr&c=MP3&src=${highlightedText}`, options)

// // Retrieve its body as ReadableStream
// .then((response) => {
//   const reader = response.body.getReader();
//   return new ReadableStream({
//     start(controller) {
//       return pump();
//       function pump() {
//         return reader.read().then(({ done, value }) => {
//           // When no more data needs to be consumed, close the stream
//           if (done) {
//             controller.close();
//             return;
//           }
//           // Enqueue the next data chunk into our target stream
//           controller.enqueue(value);
//           return pump();
//         });
//       }
//     },
//   });
// })
// // Create a new response out of the stream
// .then((stream) => new Response(stream))
// // Create an object URL for the response
// .then((response) => response.blob())
// .then((blob) => console.log(URL.createObjectURL(blob)))
// // Update image
// .then((url) => console.log((url)))
// .catch((err) => console.error(err));
// }

// //2ND TRY 

// function getReader() {
//  const options = {method: 'GET'};
// fetch(`https://api.voicerss.org/?key=4da2191a46b34962be23655d83ee1d71&hl=fr-fr&c=MP3&src=${highlightedText}`, options)

//   .then((response) => response.body)
//   .then((rb) => {
//     const reader = rb.getReader();

//     return new ReadableStream({
//       start(controller) {
//         // The following function handles each data chunk
//         function push() {
//           // "done" is a Boolean and value a "Uint8Array" (Uint8Array typed array represents an array of 8-bit unsigned integers.)
//           reader.read().then(({ done, value }) => {
//             // If there is no more data to read
//             if (done) {
//               console.log("done", done);
//               controller.close();
//               return;
//             }
//             // Get the data and send it to the browser via the controller
//             controller.enqueue(value);
//             // Check chunks by logging to the console
//             console.log(done, value);
//             push();
//           });
//         }

//         push();
//       },
//     });
//   })
//   .then((stream) =>
//     // Respond with our stream
//     new Response(stream, { headers: { "Content-Type": "text/html" } }).text(),
//   )
//   .then((result) => {
//     // Do things with result
//     console.log(result);
//   });
// }




//3 TRY AUDIO CONTEXT 
// const ctx = new AudioContext();

// let audio;

// const options = {method: 'GET'};

// fetch("https://api.voicerss.org/?key=4da2191a46b34962be23655d83ee1d71&hl=en-us&c=MP3&src=Hello%2C%20world%2C%20my%2C%20name%2C%20is%2C%20pedro!", options)
//  .then(data => data.arrayBuffer())
//  .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
//  .then (decodeAudio=> {
//   audio = decodeAudio;
//  });
//  function playback() {
//   const playSound = ctx.createBufferSource();
//   playSound.buffer=audio;
//   playSound.connect(ctx.destionation);
//   playSound.connect (ctx.destination);
//   playSound.start(ctx.currentTime);
//  }

//  window.addEventListener("mousedown",playback);