let x =0;

function wrongAnswer()
{
    switch (x) {
        case 1: document.getElementById('head').style = 'display:block';break;
        case 2: document.getElementById('bodyLine').style = 'display:block';break;
        case 3: document.getElementById('leftHand').style = 'display:block';break;
        case 4: document.getElementById('rightHand').style = 'display:block';break;
        case 5: document.getElementById('leftHand').style = 'display:block';break;
        case 6: document.getElementById('rightLeg').style = 'display:block';break;
    }
}


function onClickLetter(){

    if(){
        x++;
        wrongAnswer(x);
    } else {
        //IS correct
        //SHOW LETTER in #words
    }
}