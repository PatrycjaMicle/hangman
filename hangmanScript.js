function button() {
    let letter;
    let button;
    for (let i = 65; i < 91; i++) {
        letter = String.fromCharCode(i);
        button = document.createElement("button");
        button.id = letter;
        button.setAttribute("onclick", "clickedLetter('" + letter + "')")
        button.innerHTML = letter;

        document.getElementById("alphabetNew").appendChild(button);
    }
}

button();

var wordDIV = document.getElementById('word');
var word;
var wordDisplay;
var msg = document.getElementById("msg");
var msgDiv = document.getElementById("alert");

function category(id) {
    if (id === 'food') {
        word = "CIABATTA";
        choosedCat();
    } else if (id === 'animals') {
        word = "MONKEY";
        choosedCat();
    } else {
        word = "SCHWEDEN";
        choosedCat();
    }
    wordDIV.innerHTML = wordDisplay;
    clearPic();
    msgDiv.style='display:none';
}


function wordDispl() {
    let wordDis = word;

    for (let i = 0; i < wordDis.length; i++) {
        wordDisplay = wordDis.replace(word[i], "-");
        wordDis = wordDisplay;
    }
}

function choosedCat() {
    wordDispl();
    clickedLetter(word[0]);
    clickedLetter(word[word.length - 1]);
}

var currentLetter;
var versuch = 0;

function clickedLetter(id) {
    if (typeof word === "undefined") {
        return;
    } else if (word === wordDisplay) {
        return;
    }
    currentLetter = id;
    if (word.indexOf(currentLetter) === -1) {
        versuch++;
        wrongAnswer(versuch);
    } else if (word.indexOf(currentLetter) !== -1 && wordDisplay.indexOf(currentLetter) !== -1) {
        versuch++;
        wrongAnswer(versuch);
    } else {
        rightAnswer();
    }
    if (typeof word !== "undefined" && word === wordDisplay) {
        msg.innerHTML = "Congratulations! You won.";
        msgDiv.style = 'display:block';
        msgDiv.style.backgroundColor='green';
    }
}

function rightAnswer() {
    var indexes = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === currentLetter) {
            indexes.push(i);
        }
    }
    for (let i = 0; i < indexes.length; i++) {
        const replaced =
            wordDisplay.substring(0, indexes[i]) +
            currentLetter +
            wordDisplay.substring(indexes[i] + 1);
        wordDisplay = replaced;
    }
    wordDIV.innerHTML = wordDisplay;
}

function wrongAnswer(x) {
    switch (x) {
        case 1:
            document.getElementById("head").style = 'display:block';
            break;
        case 2:
            document.getElementById("bodyLine").style = 'display:block';
            break;
        case 3:
            document.getElementById("leftHand").style = 'display:block';
            break;
        case 4:
            document.getElementById("rightHand").style = 'display:block';
            break;
        case 5:
            document.getElementById("leftLeg").style = 'display:block';
            break;
        case 6:
            document.getElementById("rightLeg").style = 'display:block';
            msg.innerHTML = 'Unfortunately! you lost...';
            msgDiv.style = 'display:block';
            break;
    }
}

function clearHangman() {
    wordDIV.replaceChildren();
   clearPic();
    var ele = document.getElementsByName("catAnswer");
    for (var i = 0; i < ele.length; i++) {
        ele[i].checked = false;
    }
    versuch = 0;
}

function clearPic(){
    var hangman = document.getElementsByClassName('hangmanpic');
    for (let i = 0; i < hangman.length; i++) {
        hangman[i].style = 'display.none';
    }
    versuch = 0;
}












