sessionStorage.setItem('count', 3);

console.log(sessionStorage.getItem('count'));

// For collapsing option list in createquiz

let div_opt = document.getElementById("div_opt");

function show_opt(){
    div_opt.style.display = "";
}

function hide_opt(){
    div_opt.style.display = "none";
}

// Storing questions into a SessionStorage location
    // question txtarea -> #qn
    // code txtarea -> #qn_code
    // #op1 to #op4 for options in objective

let qn = document.getElementById("qn");
let qn_code = document.getElementById("qn_code");
let op1 = document.getElementById("op1");
let op2 = document.getElementById("op2");
let op3 = document.getElementById("op3");
let op4 = document.getElementById("op4");
let sub = document.getElementById("sub");
let obj = document.getElementById("obj");
let op = document.getElementsByName("opr");



function submitqn(){
    console.log(qn.value);
    console.log(qn_code.value);

}

// let form = document.getElementById("qn_form");
// function handleform(event){event.preventDefault();}
// form.addEventListener("submit", handleform);

function resettxt(){
    qn.value = null;
    qn_code.value = null;
    op1.value = null;
    op2.value = null;
    op3.value = null;
    op4.value = null;
    sub.checked = false;
    obj.checked = false;
    hide_opt();
    // qn_type[1].
    console.log(op.checked);
    for(let i = 0; i < 4; i++){
        op[i].checked = false;
    }
}