/*

document.addEventListener("DOMContentLoaded", function() {

    var calendar = document.getElementById("calendar");

    for(let i=1;i<7;i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        calendar.append(row);

        for(let j=1;j<9;j++) {
            let ize = document.createElement('div');
            ize.classList.add('window');
            row.append(ize);


            }

        }


});*/

var surprises = [
    'Jn 1, 1-15',
    'Ezs 9, 2-7',
    'Ezs 11, 1-10',
    'Jer 33, 14-16',
    'Lk 1, 5-10',
    'Lk 1, 11-17',
    'Lk 1, 18-25',
    'Lk 1, 26-38',
    'Mt 1, 18-21',
    'Mt 1, 22-26',
    'Lk 1, 39-45',
    'Lk 1, 46-56',
    'Lk 2, 1-5',
    'Lk 2, 6-7',
    'Lk 2, 8-12',
    'Lk 2, 13-14',
    'Lk 2, 15-18',
    'Lk 2, 19-20',
    'Mik 5, 2-5',
    'Mt 2, 1-2',
    'Mt 2, 3-6',
    'Mt 2, 7-8',
    'Mt 2, 9-12',
    'Jn 1, 14'
];

const start = () => {
    //const size = 9;
    //const bombCount = 10;
    let d = new Date();
    var day = d.getDate();

    //field = initGame(size, bombCount);
    clickable = true;


    visualTable = document.getElementById('calendar');
/*    while (visualTable.firstChild) {
        visualTable.removeChild(visualTable.firstChild);
    }*/

    visualField = [];
    for(let i=0;i<4;i++) {
        visualField.push([]);
        for(let j=0;j<6;j++) {
            const elem = document.createElement('div');
            visualField[i][j] = elem;
            visualTable.append(elem);
            console.log('check');

            elem.classList.add('window');
            let number = i * 6 + j + 1;
            elem.innerText = number;
            elem.dataset.x = i;
            elem.dataset.y = j;

            elem.addEventListener('click', (event) => {
                if (number > day) {
                    clickable = false;
                } else {
                    clickable = true;
                };
                if(!clickable) return;
                elem.classList.add('opened');

                elem.innerText = surprises[number-1];

                //const { x, y } = getEventTargetCoords(event);

                //reveal(field, x, y, render, endGame);
            });

            /*elem.addEventListener('contextmenu', (event) => {
                if(!clickable) return;
                event.preventDefault();
                const { x, y } = getEventTargetCoords(event);

                if(event.shiftKey) {
                    revealNearIfFlagged(field, x, y, render, endGame);
                } else {
                    toggleFlag(field, x, y, render);
                }
            });*/
        }
    }
};

document.addEventListener("DOMContentLoaded", start);