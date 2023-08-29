var bestDiv = document.getElementById("elDiv");

function clickDiv(){
        alert("¡Hola! Soy el div")
}

bestDiv.addEventListener("click", clickDiv);

var bestButton = document.getElementById("elButton");

bestButton.addEventListener("click", (Event) => {
        Event.stopPropagation();
});