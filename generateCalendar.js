/*const zsiriAjandekai = [1,2,3,4,5,6];

function putGiftsIn(giftlist) {
    var l = giftlist.length;
    for (i=0;i<l;i++) {
        console.log(giftlist[i]);
    }
}*/
class Box {
    number = 0;
    opened = false;
    text = '';


}

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

const createEmptyCalendar = (owner, width,height) => {
    const field = [];
    for(let i=1;i<width+1;i++){
        field.push([]);
        for(let j=1;j<height+1;j++){
            field[i].push({
                isRevealed: false,
                upNext: false,
                tempGift: j,

                //beletenni az ajandekot
            });
        }
    }
    return field;
};


//fuggveny, ami berandomizalja az ablakok szamozasat
//reveal fuggveny

