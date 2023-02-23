// CHANGING TEXT EFFECT IN CSS & JS

let txt = document.getElementById("text");
// ADD CUSTOM WORD HERE
// DONT CHANGE ANY COMMAS OR STYLING

let data = ["SUDARSHAN SHARMA", "A DEVELOPER...", "A DESIGNER..."];

// END OF CHANGEABLE DATA



let finalTxt = "";
let index = 0;
let length = 0;
let i = 0;

async function textAnim() {
    length = data[index].length;
    for (i = 0; i < length; i++) {

        finalTxt = finalTxt + data[index][i];
        txt.innerHTML = finalTxt;
        await sleep(0.1);

    }
    i = 0;
    finalTxt = "";

    for (i = 0; i < length; i++) {
        for (j = 0; j < (length - i); j++) {
            finalTxt = finalTxt + data[index][j];
        }
        await sleep(0.1);

        txt.innerHTML = finalTxt;
        finalTxt = "";



    }


    txt.innerHTML = "";
    finalTxt = "";

    if (index == (data.length - 1)) {
        index = 0;
    }
    else {
        index++;
    }
    textAnim();

}

textAnim();