let img = document.getElementById("img");
let href = img.getAttribute("href");

img.addEventListener("hover", () =>{
    setInterval({
        change_href();
    }
    ,1000);
});

function change_href(){
    console.log(entered);
}
