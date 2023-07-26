var elementTag = document.getElementById("tagName");
var elementColor = document.getElementById("colorText");
var content = document.getElementById("content");

function createElementss() {
    var result = document.createElement(elementTag.value);
    result.style.color= elementColor.value;
    result.innerHTML = content.value;
    
    document.body.append(result);
    console.log(result)
}