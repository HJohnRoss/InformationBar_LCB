var prevUpdate = null;

function updateText() {
    console.log("updating")
    const container = document.getElementById("container")
       // if you make a new file change below to the link
    fetch("https://hjohnross.github.io/InformationBar.txt_LCB/informationBar.txt")
        .then(res => res.text())
        .then(res => {
            if(prevUpdate !== res) {
                while(container.firstChild) {
                    container.firstChild.remove();
                }

                const lines = res.split('\n');
                for(i = 0; i < lines.length; i++) {
                    container.innerHTML += `<p>${lines[i]}</p>`
                }
                prevUpdate = res;
            }
        })
        .catch(err => console.log(err))
}

updateText()
setInterval(updateText, 120000)