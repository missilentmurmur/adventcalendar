var verses = [
    ['Jn 1, 1-15', '<p>http://biblia.hit.hu/bible/21/JHN/1</p>'],
    ['Ezs 9, 2-7', ''],
    ['Ezs 11, 1-10', ''],
    ['Jer 33, 14-16', ''],
    ['Lk 1, 5-10',''],
    ['Lk 1, 11-17', ''],
    ['Lk 1, 18-25', ''],
    ['Lk 1, 26-38', ''],
    ['Mt 1, 18-21', ''],
    ['Mt 1, 22-26', ''],
    ['Lk 1, 39-45', ''],
    ['Lk 1, 46-56', ''],
    ['Lk 2, 1-5', ''],
    ['Lk 2, 6-7', ''],
    ['Lk 2, 8-12', ''],
    ['Lk 2, 13-14', ''],
    ['Lk 2, 15-18', ''],
    ['Lk 2, 19-20', ''],
    ['Mik 5, 2-5', ''],
    ['Mt 2, 1-2', ''],
    ['Mt 2, 3-6', ''],
    ['Mt 2, 7-8', ''],
    ['Mt 2, 9-12', ''],
    ['Jn 1, 14', ''],
];

const videos = [
    ['Wham: Last Christmas','<iframe width="560" height="315" src="https://www.youtube.com/embed/E8gmARGvPlI" frameborder="100" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    ['Jingle Bells', '<iframe width="560" height="315" src="https://www.youtube.com/embed/eZrjtdRkwDA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    ['The Twelve Days of Christmas', '<iframe width="560" height="315" src="https://www.youtube.com/embed/LEpCZkdtf1M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    ['4.', ''],
    ['5.', ''],
    ['6.', ''],
    ['7.', ''],
    ['8.', ''],
    ['9.', ''],
    ['10.', ''],
    ['11.', ''],
    ['12.', ''],
    ['13.', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', ''],
    ['', '<iframe width="560" height="315" src="https://www.youtube.com/embed/ollqlWr1z8U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
];

class Window {
    constructor(number, contentText, contentPiece) {
        this.number = number;
        this.text = contentText;
        this.content = contentPiece;
        this.isRevealed = false;
    };
}

class Calendar {
    constructor(contentList) {
        if (!localStorage.getItem('yourCalendar')) {
            this.windowList = [];
            for (let i=1; i<25; i++) {
                let newWindow = new Window(i,contentList[i-1][0],contentList[i-1][1]);
                this.windowList.push(newWindow);
            }
            this.shuffle();
        } else {
            this.load();
        }
    }

    shuffle() {
        for (var i = 24 - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.windowList[i];
            this.windowList[i] = this.windowList[j];
            this.windowList[j] = temp;
        }
    }

    save() {
        var calendarString = JSON.stringify(this.windowList);
        localStorage.setItem('yourCalendar', calendarString);
    }

    load() {
        this.windowList = JSON.parse(localStorage.getItem("yourCalendar"));
    }
    //ide kell egy load meg egy save method
}