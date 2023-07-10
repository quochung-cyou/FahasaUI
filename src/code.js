function toggleLanguage() {
    let language = document.getElementById("top-language-dropdown");
    if (language.style.display === "block") {
        language.setAttribute("style", "display: none;");
    } else {
        language.setAttribute("style", "display: block;");
    }
}



var checkToggleLanguage = function (event) {
    let find = false;
    let element = event.target;
    for (let i = 0; i < element.classList.length; i++) {
        if (element.classList[i].includes("top-language")) {
            find = true;
            break;
        }
    }


    if (find) {
       
    } else {
        let language = document.getElementById("top-language-dropdown");
        language.setAttribute("style", "display: none;");
    }

}

var allElement = document.getElementsByTagName("*");
for (let i = 0; i < allElement.length; i++) {
    allElement[i].addEventListener("click", checkToggleLanguage);
}

$("#lamdepsuckhoe").mouseenter(function () {
    $("#top-bar-category-container-right").attr("style", "visibility: visible;");
}).mouseleave(function () {
    $("#top-bar-category-container-right").attr("style", "visibility: hidden;");
});

$("#top-bar-category-container-right").mouseenter(function () {
    $("#top-bar-category-container-right").attr("style", "visibility: visible;");
    console.log("hello");
}).mouseleave(function () {
    $("#top-bar-category-container-right").attr("style", "visibility: hidden;");
    console.log("hellddo");
});