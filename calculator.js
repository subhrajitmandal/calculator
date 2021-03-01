function num(val) {
    let inputtext = document.getElementById("input1");
    if (val == "undo") {
        inputtext.innerText = inputtext.innerText.slice(0, -1);
    } else if (val == "AC") {
        inputtext.innerText = "";
        document.getElementById('resultTxt').innerText = "0";
    } else if (val == "+" || val == "-" || val == "*" || val == "/" || val == "%" || val == "") {
        if (inputtext.innerText.slice(-1) == "+" || inputtext.innerText.slice(-1) == "-" || inputtext.innerText.slice(-1) == "*" || inputtext.innerText.slice(-1) == "/" || inputtext.innerText.slice(-1) == "%" || inputtext.innerText.slice(-1) == "") {
            inputtext.innerText = inputtext.innerText + "";
        } else {
            inputtext.innerText = inputtext.innerText + val;
        }
    }
    else {
        inputtext.innerText = inputtext.innerText + val;
        // document.getElementById("input2").innerHTML += val;
    }
}

function resultBtn() {
    let input1 = document.getElementById("input1").innerText;
    let result = eval(input1);
    // document.getElementById('result').value = result; //In case we are using text field
    document.getElementById('resultTxt').innerText = result;
    console.log(result)
}
