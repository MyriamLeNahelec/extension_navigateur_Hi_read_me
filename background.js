//badge et couleur badge sur logo Ext Nav
chrome.action.setBadgeText({ text:'ON' });
chrome.action.setBadgeBackgroundColor({ color : 'lightgreen' });

// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

// chrome.scripting.insertCSS({
//   target: { tabId: tabs[0], allFrames : true},
//   files: ["style.css"]
// });
// });

//Code trouvé sur le site Medium
// chrome.action.onClicked.addListener(function (tab) { 
// chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
// chrome.tabs.sendMessage(tabs[0].id, { type: "popup-modal" });
// });
// });

//Code trouvé vidéo YT pour modal
{/* <div class="button_container">
      <button id="button_modal" onclick="openModal()"> Click me !</button>
    </div>
    <div id="modal">
      <h1> Hello world!</h1>
      <button id="close" onclick="closeModal ()"> Close me!</button>
    </div>' */}