const start = () => {
    //const size = 9;
    //const bombCount = 10;
    let d = new Date();
    var day = d.getDate();

    //field = initGame(size, bombCount);
    let clickable = true;

    const naptar = new Calendar(surprises);
    naptar.shuffle();
    const ablak = naptar.windowList[1];
    console.log(ablak);

    const visualTable = document.getElementById('calendar');
/*    while (visualTable.firstChild) {
        visualTable.removeChild(visualTable.firstChild);
    }*/

    for (let i=0;i<4;i++) {

        for(let j=0;j<6;j++) {
            const elem = document.createElement('div');
            visualTable.append(elem);
            console.log('check');

            elem.classList.add('window');
            let number = i * 6 + j;
            let w = naptar.windowList[number];
            elem.innerText = w.number;
            elem.dataset.x = i;
            elem.dataset.y = j;

            elem.addEventListener('click', (event) => {
                w.isRevealed = w.number <= day;
                if(!w.isRevealed) return;
                elem.classList.add('opened');

                elem.innerText = w.content;

            });

        }
    }
};

document.addEventListener("DOMContentLoaded", start);