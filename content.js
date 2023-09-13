let highlightedText;
const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");
const style = `<style>.modal-btn {
  padding: 10px 14px;
  font-size: 18px;
  margin: 100px auto;
  display: block;
  min-width: 150px;
  cursor: pointer;
}

.modal-container {
  /* display: none; */
  visibility: hidden;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  transition: visibility 0.4s;
}
.modal-container.active {
  /* display: block; */
  visibility: visible;
}

.overlay {
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #333333d3;
  transition: opacity 0.4s 0.2s ease-out;
}
.modal-container.active .overlay {
  opacity: 1;
  transition: opacity 0.4s ease-out;
}

.modal {
  opacity: 0;
  width: 95%;
  max-width: 500px;
  min-width: 300px;
  padding: 30px;
  background: #fff;
  border-radius: 5px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, calc(-50% - 50px));
  transition: opacity 0.4s ease-out,
  transform 0.4s ease-out;
}

.modal-container.active .modal {
  opacity: 1;
  transform: translate(-50%, -50%);
  transition: opacity 0.4s 0.2s ease-out,
  transform 0.4s 0.2s ease-out;
}

.close-modal {
  padding: 8px 10px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: #ff365e;
  color: #fff;
}
.modal h1 {
  margin-bottom: 10px;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
}
.modal p {
  line-height: 1.4;
  margin-bottom: 5px;
}</style>`
document.body.innerHTML += style;

const html = `    <div class="modal-container">

<div class="overlay modal-trigger"></div>

<div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="dialogDesc">
  <button 
  aria-label="close modal"
  class="close-modal modal-trigger">X</button>
  <h1 id="modalTitle">La lecture de ton texte</h1>
  <p class="lecteur">
  </p>
</div>

</div>`

document.body.innerHTML += html;

// Function to highligth the text in the web page and return the highlighted text
document.addEventListener("mouseup", () => { //the user highlight a text and when mouse up, the function is launch
  highlightedText = window.getSelection().toString().replace(/ /g, "%2C%20"); //the highlighted text is put into string and replace the space by "%2C%20"
  const modalContainer = document.querySelector(".modal-container");
  const modalTriggers = document.querySelectorAll(".modal-trigger");
  function toggleModal(){
    modalContainer.classList.toggle("active")
  }
  toggleModal();

modalTriggers.forEach(trigger => trigger.addEventListener("mouseup", toggleModal));

let baliseAudio = "<audio controls src=" + `"https://api.voicerss.org/?key=4da2191a46b34962be23655d83ee1d71&hl=fr-fr&r=5&c=MP3&src=${highlightedText}"` + "></audio>";
document.querySelector(".lecteur").innerHTML = baliseAudio;
});