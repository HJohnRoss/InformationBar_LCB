const container = document.getElementById("container")
function updateText() {
    while(container.firstChild) {
        container.firstChild.remove();
    }
    // if you make a new file change below to the link
    fetch("https://hjohnross.github.io/Schedule.txt_LCB/infoBar.txt")
        .then(res => res.text())
        .then(res => {
            console.log(res)
            const lines = res.split('\n');
            for(i = 0; i < lines.length; i++) {
                container.innerHTML += `<p">${lines[i]}</p>`
            }
        })
        .catch(err => console.log(err))
}
function removeId() {
     if(!container.attributes.id) {
        container.setAttribute("id", "container")
    } else {
        container.removeAttribute("id")
    }
}
// updateText();
// setInterval(updateText, 120000)
// setInterval(removeId, 120000)