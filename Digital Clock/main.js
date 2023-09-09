const body = document.querySelector("body")
body.style.backgroundColor = "#212121";
body.style.color = "#fff";

const div = document.querySelector(".container")
div.style.backgroundColor = "orange";
div.style.padding = "10px";
// div.style.position = "absolute";

setInterval(function(){
    const date = new Date();
    div.innerHTML  = date.toLocaleTimeString();
},1000);


