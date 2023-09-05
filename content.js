function reader() {
    const options = {method: 'GET'};

    fetch('https://api.voicerss.org/?key=4da2191a46b34962be23655d83ee1d71&hl=en-us&c=MP3&src=Hello%2C%20world!', options)
    .then(response => response.text())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}

reader()