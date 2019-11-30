function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

const reveal = (e,w) => {
    e.classList.add('opened');
    e.innerText = w.number + '.  ' + w.text;
    //e.innerText = videos[0][0];
    //document.getElementById("overlay").innerHTML = w.content;
    
    w.isRevealed = true;
};


const start = () => {
    let d = new Date();
    var day = d.getDate();

    const naptar = new Calendar(videos);
    let doboz = document.getElementById('instructions');

    const visualTable = document.getElementById('calendar');

    for (let i=0;i<4;i++) {

        for(let j=0;j<6;j++) {
            const elem = document.createElement('div');
            visualTable.append(elem);

            elem.classList.add('window');
            let number = i * 6 + j;
            let w = naptar.windowList[number];
            elem.innerText = w.number;
            elem.dataset.x = i;
            elem.dataset.y = j;

            if (w.isRevealed) {reveal(elem,w)}

            elem.addEventListener('click', (event) => {
                w.isRevealed = w.number <= day;
                if(!w.isRevealed) return;
                window.open(w.content);
                //on();
                reveal(elem,w);
                naptar.save();
            });

        }
    }
};

document.addEventListener("DOMContentLoaded", start);
