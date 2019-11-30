var verses = [
    ['Jn 1, 1-15', 'https://szentiras.hu/UF/Jn1'],
    ['Ezs 9, 2-7', 'https://szentiras.hu/UF/%C3%89zs9'],
    ['Ezs 11, 1-10', 'https://szentiras.hu/UF/%C3%89zs11'],
    ['Jer 33, 14-16', 'https://szentiras.hu/UF/Jer33'],
    ['Lk 1, 5-10','https://szentiras.hu/UF/Lk1'],
    ['Lk 1, 11-17', 'https://szentiras.hu/UF/Lk1'],
    ['Lk 1, 18-25', 'https://szentiras.hu/UF/Lk1'],
    ['Lk 1, 26-38', 'https://szentiras.hu/UF/Lk1'],
    ['Mt 1, 18-21', 'https://szentiras.hu/UF/Mt1'],
    ['Mt 1, 22-26', 'https://szentiras.hu/UF/Mt1'],
    ['Lk 1, 39-45', 'https://szentiras.hu/UF/Lk1'],
    ['Lk 1, 46-56', 'https://szentiras.hu/UF/Lk1'],
    ['Lk 2, 1-5', 'https://szentiras.hu/UF/Lk2'],
    ['Lk 2, 6-7', 'https://szentiras.hu/UF/Lk2'],
    ['Lk 2, 8-12', 'https://szentiras.hu/UF/Lk2'],
    ['Lk 2, 13-14', 'https://szentiras.hu/UF/Lk2'],
    ['Lk 2, 15-18', 'https://szentiras.hu/UF/Lk2'],
    ['Lk 2, 19-20', 'https://szentiras.hu/UF/Lk2'],
    ['Mik 5, 2-5', 'https://szentiras.hu/UF/Mik5'],
    ['Mt 2, 1-2', 'https://szentiras.hu/UF/Mt2'],
    ['Mt 2, 3-6', 'https://szentiras.hu/UF/Mt2'],
    ['Mt 2, 7-8', 'https://szentiras.hu/UF/Mt2'],
    ['Mt 2, 9-12', 'https://szentiras.hu/UF/Mt2'],
    ['Jn 1, 14', 'https://szentiras.hu/UF/Jn1'],
];

const videos = [
    /*vasarnap*/
    ['The McCallans: Highland Christmas', 'https://www.youtube.com/watch?v=J_vksADGeOI'],
    ['Wham: Last Christmas','https://www.youtube.com/watch?v=E8gmARGvPlI'],
    ['Jingle Bells', 'https://www.youtube.com/watch?v=DpjbPzL1GdI'],
    ['Low: Just Like Christmas', 'https://www.youtube.com/watch?v=IippcraBPKA'],
    ['Mariah Carey: All I Want For Christmas Is You', 'https://www.youtube.com/watch?v=yXQViqx6GMY'],
    ['Bojtorján: Száncsengő', 'https://www.youtube.com/watch?v=wrvGJMPC2AI'],
    /*szombat*/
    ['Instrumental Christmas Music', 'https://www.youtube.com/watch?v=ncjuqj0WN6s'],
    /*vasarnap*/
    ['Winter Night Jazz Music', 'https://www.youtube.com/watch?v=S-gxNYXogKU'],
    ['Fleet Foxes: White Winter Hymnal', 'https://www.youtube.com/watch?v=DrQRS40OKNE'],
    ['Gryllus Vilmos: Karácsonyi dalok', 'https://www.youtube.com/watch?v=tuAPEULek2k'],
    ['Rick Astley: Never Gonna Give You Up', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'],
    ['Lindsey Stirling: Carol of the Bells', 'https://www.youtube.com/watch?v=EKkzbbLYPuI'],
    ['Happy ver. Christmas Jazz instrumental', 'https://www.youtube.com/watch?v=mmJ-KiSIsD4'],
    /*szombat*/
    ['The Twelve Days of Christmas', 'https://www.youtube.com/watch?v=LEpCZkdtf1M'],
    /*vasarnap*/
    ['Indie/Indie-Folk Compilation', 'https://www.youtube.com/watch?v=Sf5FfA1j590'],
    ['Atlantic Five Jazz Band: Christmas Moods', 'https://www.youtube.com/watch?v=KQ-7O3fhAuQ'],
    ['Bad Religion: Hark! The Herald Angels Sing', 'https://www.youtube.com/watch?v=EJizJvrmnGI'],
    ['O come, O come, Emmanuel', 'https://www.youtube.com/watch?v=iO7ySn-Swwc'],
    ['Celtic Christmas 3: The South Wind', 'https://www.youtube.com/watch?v=YX488q0mTwI'],
    ['What Child is This, Greensleeves', 'https://www.youtube.com/watch?v=qPRFk8sLIPw'],
    /*szombat*/
    ['Silent Night - Csendes éj', 'https://www.youtube.com/watch?v=jTbskYrEYpw'],
    /*vasarnap*/
    ['2 Hours of Classic Christmas Music', 'https://www.youtube.com/watch?v=8SST4sYY07M'],
    ['Chris Rea: Driving Home For Christmas', 'https://www.youtube.com/watch?v=DDt3u2Ev1cI'],
    ['Christmas Jazz', 'https://www.youtube.com/watch?v=ollqlWr1z8U'],
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
