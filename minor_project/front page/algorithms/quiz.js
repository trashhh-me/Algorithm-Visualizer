sessionStorage.setItem('count', 3); // Global question number

console.log(sessionStorage.getItem('count'));

//-------------------CREATE QUIZ SECTION--------------------------------------

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
let op = document.getElementsByName("op");
let sub = document.getElementById("sub");
let obj = document.getElementById("obj");
let opr = document.getElementsByName("opr");

function submitqn(){ // Executes immediately after button is clicked
    // console.log(qn.value);
    // console.log(qn_code.value);
    // for(let i = 0; i < 4; i++){
        //     console.log(op[i].value); 
        //     console.log(opr[i].checked);
        // }
    if(qn.value == "" || qn_code.value == "" || (!(sub.checked) && !(obj.checked))){
        console.log("Is null"); // To prevent null text area
        alert("Please fill all fields");
    }
    else{
        sessionStorage.setItem("qn", qn.value);
    console.log(sessionStorage.getItem("qn"));
        
        sessionStorage.setItem("qn_code", qn_code.value);
        // let isValid = true;
        if(obj.checked){
            let opArray = new Array(4);
            let oprArray = new Array(4);
            for(let i = 0; i < 4; i++){
                opArray[i] = op[i].value;
                oprArray[i] = opr[i].checked;
                // if(opArray[i] == "" || !oprArray[i].checked){isValid = false;}
            }
            
            sessionStorage.getItem("isObj", true);
            sessionStorage.setItem("opArray", opArray);
            sessionStorage.setItem("oprArray", oprArray);
            console.log(sessionStorage.getItem("qn"), sessionStorage.getItem("qn_code"), sessionStorage.getItem("opArray"), sessionStorage.getItem("oprArray"));
        }
        
        // Reset all values
        qn.value = null;
        qn_code.value = null;
        sub.checked = false;
        obj.checked = false;
        hide_opt();
        for(let i = 0; i < 4; i++){
            op[i].value = null;
            opr[i].checked = false;
        }
        putputquiz();
    }
}

function stop(){
    console.log("Options null");
}
//------------------------------------------------------------------------------



//--------------------IMPLEMENTING THE CREATED QUIZ SECTION---------------------


let title = document.title;

function putputquiz(){

if(title == "DSAlgoViz - Quiz"){
    let main_form = document.getElementById("main_form");
    console.log("I AM QUIZ");
    console.log(main_form);
    console.log(sessionStorage.getItem("qn"));
    putquiz();   
    function putquiz(){
        
        const padiv = document.createElement('div');
        padiv.style,paddingTop = "40px"; 

        // Create a div element with class "card"
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        
        // Create a p element with class "card-text" and padding-top of 20px
        const pTag = document.createElement('p');
        pTag.classList.add('card-text');
        pTag.style.paddingTop = '20px';

        // Create a nested p element
        const nestedPTag = document.createElement('p');
        nestedPTag.innerHTML = sessionStorage.getItem("qn");
        pTag.appendChild(nestedPTag);
        
        
        // Create a pre element
        const preTag = document.createElement('pre');
        pTag.appendChild(preTag);
        
        // Add the nested p and pre elements to the main p element
        pTag.appendChild(nestedPTag);
        pTag.appendChild(preTag);
        
        // Create a div element with class "op"
        const opDiv = document.createElement('div');
        opDiv.classList.add('op');
        
        // Create four divs with class "form-check", each containing a radio input and label
        for (let i = 1; i <= 4; i++) {
            const formCheckDiv = document.createElement('div');
            formCheckDiv.classList.add('form-check');
        
            const radioInput = document.createElement('input');
            radioInput.classList.add('form-check-input');
            radioInput.type = 'radio';
            radioInput.name = 'flexRadioDefault1';
            radioInput.id = `flexRadioDefault${i}`;
        
            const label = document.createElement('label');
            label.classList.add('form-check-label');
            label.for = `flexRadioDefault${i}`;
        
            formCheckDiv.appendChild(radioInput);
            formCheckDiv.appendChild(label);
            opDiv.appendChild(formCheckDiv);
        }
        
        // Add the main p and div elements to the card div
        cardDiv.appendChild(pTag);
        cardDiv.appendChild(opDiv);

        padiv.appendChild(cardDiv);
        
        // Add the card div to the body of the page
        main_form.appendChild(cardDiv);
    }
}
}