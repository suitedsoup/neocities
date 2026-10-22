function showText(idname) {
    var textElement = document.getElementById(idname);
    textElement.classList.toggle('hide');
}

function showAllText() {
    var hiddenElements = document.querySelectorAll(".hide");
    for (var i = 0; i < hiddenElements.length; i++) {
        hiddenElements[i].classList.toggle('hide');
    }
}