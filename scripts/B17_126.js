var prevUpdate = null;

function updateText() {
    const container = document.getElementById("container")
    // if you make a new file change below to the link
    fetch("https://hjohnross.github.io/InformationBar.txt_LCB/rooms/B17_126.txt")
		.then(res => res.text())
		.then(res => {
			while(container.firstChild) {
				container.firstChild.remove();
			}

			const lines = res.split('\n');
			container.innerHTML += `<p>${lines[0]}</p>`
		})
		.catch(err => console.log(err))
}

updateText()
setInterval(updateText, 10000)
