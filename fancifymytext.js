function funcAlert(){
    alert("Hello, world!");

}

function biggerText() {
    document.getElementById('textBox').style.fontSize = "24pt";
}

function boldText() {
    document.getElementById('textBox').style.fontWeight="bold";
    document.getElementById('textBox').style.color="blue";
    document.getElementById('textBox').style.textDecoration = "underline";
}

function normalText() {
    document.getElementById('textBox').style.fontWeight="normal";
}

function upperCasify(){
    var textArea = document.getElementById('textBox');
    document.getElementById('textBox').value = document.getElementById('textBox').value.toUpperCase();
    var textString = document.getElementById('textBox').value;
    var parts = textString.split(" ");
    var textString = parts.join("-Moo ");
    textArea.value = textString;
}

