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
    document.getElementById('textBox').style.textDecoration = "none";
    document.getElementById('textBox').style.color="black";
    document.getElementById('textBox').style.fontWeight="normal";
}

function upperCasify() {
    var textArea = document.getElementById('textBox');
    var textString = textArea.value.toUpperCase();
    var sentences = textString.split(". ");
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].split(" ");
        var lastWordIndex = words.length - 1;
        if (words[lastWordIndex].endsWith(".")) {
            words[lastWordIndex] = words[lastWordIndex].replace(".", "-Moo.");
        }
        sentences[i] = words.join(" ");
    }
    textArea.value = sentences.join(". ");
}


