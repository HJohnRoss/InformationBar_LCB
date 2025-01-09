function updateText() {
    const container = document.getElementById("container")
    while(container.firstChild) {
        container.firstChild.remove();
    }
    // if you make a new file change below to the link
    fetch("https://hjohnross.github.io/InformationBar.txt_LCB/informationBar.txt")
        .then(res => res.text())
        .then(res => {
            console.log(res)
            const lines = res.split('\n');
            for(i = 0; i < lines.length; i++) {
                container.innerHTML += `<p>${lines[i]}</p>`
            }
        })
        .catch(err => console.log(err))
}

updateText()
setInterval(updateText, 120000)