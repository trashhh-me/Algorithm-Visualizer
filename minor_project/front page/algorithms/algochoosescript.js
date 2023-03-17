let choose_list = document.querySelectorAll('div.card-body > button'); 
// Has to be direct children or won't work
let choose_array = Array.from(choose_list);
// console.log(choose_array);

for(let i = 0; i < choose_array.length; i++){
    choose_array[i].addEventListener("click", () => {
        sessionStorage.setItem('btn', choose_array[i].value);
        window.location.href = "visupage.html";
    });
}
