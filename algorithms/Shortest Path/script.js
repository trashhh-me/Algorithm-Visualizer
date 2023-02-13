// Fetch every inputted path cost values
let pc_S_1 = document.getElementById("ip_pc_S-1");
let pc_S_2 = document.getElementById("ip_pc_S-2");
let pc_S_3 = document.getElementById("ip_pc_S-3");
let pc_1_3 = document.getElementById("ip_pc_1-3");
let pc_1_4 = document.getElementById("ip_pc_1-4");
let pc_2_3 = document.getElementById("ip_pc_2-3");
let pc_2_5 = document.getElementById("ip_pc_2-5");
let pc_3_4 = document.getElementById("ip_pc_3-4");
let pc_3_5 = document.getElementById("ip_pc_3-5");
let pc_3_E = document.getElementById("ip_pc_3-E");
let pc_4_E = document.getElementById("ip_pc_4-E");
let pc_5_E = document.getElementById("ip_pc_5-E");


let count = 0;
let cur = [];

function load_pc(){
    // if((pc_S_1.value && pc_S_2.value && pc_S_3.value && pc_1_3.value && pc_1_4.value && pc_2_3.value && pc_2_5.value && pc_3_4.value && pc_3_5.value && pc_3_E.value && pc_4_E.value && pc_5_e.value) == "")E
    //     alert("Please Enter EvEry Path Cost Values!");
    // }
    // else{
        // Insert every inputted value on the path cost space
        document.getElementById("pc_S-1").innerHTML = pc_S_1.value;
        document.getElementById("pc_S-2").innerHTML = pc_S_2.value;
        document.getElementById("pc_S-3").innerHTML = pc_S_3.value;
        document.getElementById("pc_1-3").innerHTML = pc_1_3.value;
        document.getElementById("pc_1-4").innerHTML = pc_1_4.value;
        document.getElementById("pc_2-3").innerHTML = pc_2_3.value;
        document.getElementById("pc_2-5").innerHTML = pc_2_5.value;
        document.getElementById("pc_3-4").innerHTML = pc_3_4.value; 
        document.getElementById("pc_3-5").innerHTML = pc_3_5.value;
        document.getElementById("pc_3-E").innerHTML = pc_3_E.value;
        document.getElementById("pc_4-E").innerHTML = pc_4_E.value;
        document.getElementById("pc_5-E").innerHTML = pc_5_E.value;

        let visualize = document.getElementById("visualize");
        
        setTimeout(
            function visualize_appear()
            {
                visualize.style.opacity = 1;
                visualize.style.transition = "all 300ms ease-in";
                visualize.removeAttribute("disabled");
                visualize.style.cursor = "pointer";
            }, 1000
        )
        
        let num_ip = document.querySelectorAll("[type = 'number']");
        // console.log(num_ip[0].value);
        for(const i of num_ip){
            if(i.value == ''){
                i.value = 10;
                load_pc();
            }
        }

    // }

}


// Defining custom attributes in HTML
// In CSS, we can use any random attribute name
// In JS, we have to create a "data-[custom_attribute_name]" attribute and call them in js code using [element].dataset.[custom_attribute_name]

function visualize(){
    console.log("Entered visualization");
    let start = document.getElementById("ValueS");
    console.log(start.dataset.reachable);
    path_choose(start);
    setTimeout(() => {
        document.getElementById("visualize").setAttribute('disabled', '');
    }, 1000);
}

function path_choose(nstart){
    let reach_array = new Array();
    let rvalue_array = new Array();
    reach_array = generate_reach_array(nstart);
    const id = String(nstart.id.replace(`Value`, ``));
    console.log(`reach array = `+reach_array);
    let ip_value_array = new Array();
    let pcid = 'stringlol';
    let ct = 0;
    console.log(typeof pcid);
    for(const i of reach_array){
        ip_value_array.push(`pc_${i}`);
        pcid = ip_value_array[ct];
        rvalue_array.push(eval(pcid + ".value"));
        ct++;
    }console.log(rvalue_array);

    // let text = ip_value_array[0];
    // console.log(eval(text + ".value"));

    let minpc = rvalue_array[0];
    let nth = 0;
    
    for(let i = 1; i < rvalue_array.length; i++){
        if(Number(rvalue_array[i]) <= Number(minpc)){
            minpc = rvalue_array[i];
            nth = i;
        }console.log("i = "+i);
        console.log("minpc in loop = "+minpc);
    }
    console.log("minpc = "+ minpc);
    console.log(`${id}_${nth + 1}`);
    console.log(rvalue_array[nth]);
    let subid_ip = `S_${reach_array[nth]}`;
    console.log(subid_ip);

    let pathsvg = document.querySelector(`[data-subid = "${subid_ip}"]`);
    console.log(pathsvg);
    console.log("Go to animation");
    node_end2 = animate_nodespath(pathsvg.id);
    console.log(`ID is = ${node_end2.id}`);
    console.log(`id = ${id}`);
    console.log("Returned Back");
    if(node_end2.id == 'ValueE'){
        setTimeout(() => {
            reset_appear();
        }, 1000);
        console.log("REACHED THE GOAL");
        
    }else{
        
        setInterval(() => {
            path_choose(node_end2);
            console.log("Shouldn't be here after goal");
        }, 3000);
    } 
    console.log("return?");
    stop();
}


function generate_reach_array(nstart){ // Generated array of reachable nodes
    const id = String(nstart.id.replace(`Value`, ``));
    console.log(`id = ${id}`);
    // Creating a nodes_reach array whose data is fed from the data-reachable attribute from html node values div
    let nodes_reach = new Array();
    let reach = nstart.dataset.reachable;
    // console.log(typeof reach);
    
    for(const i of reach.split(`_`)){ 
    // Forms an array of node values reachable from the start node  (nstart)
        console.log(i);
        if((id === "S" || i === "E" || Number(id) < i)){
            nodes_reach.push(`${id}_${i}`);
            console.log(`inside IF condition = `+i);
        }else if(i === "S" || Number(id) >  i ){
            nodes_reach.push(`${i}_${id}`);
            console.log(`inside ELSEIF condition = `+i);
        }else{
            alert("You Have Reached The Goal!")
        }
    }console.log(nodes_reach);
    return nodes_reach;
}

function reset_ip(){
    let pc_inputs = document.getElementsByClassName("ip_pc");
    let pc_values = document.getElementsByClassName("pc");
    let fnodes = document.getElementsByClassName("frontnode");
    let pfnodes = document.getElementsByClassName("frontpath");
    let nodes = document.getElementsByClassName("node");
    for(const i of pc_inputs){
        i.value = null;
    }
    pc_values[11].innerHTML = "5-E";
    pc_values[10].innerHTML = "4-E";
    pc_values[9].innerHTML = "3-E";
    pc_values[8].innerHTML = "3-5-3";
    pc_values[7].innerHTML = "3-4-3";
    pc_values[6].innerHTML = "2-5";
    pc_values[5].innerHTML = "2-3-2";
    pc_values[4].innerHTML = "1-4";
    pc_values[3].innerHTML = "1-3-1";
    pc_values[2].innerHTML = "S-3";
    pc_values[1].innerHTML = "S-2";
    pc_values[0].innerHTML = "S-1";


    for(const i of fnodes){
        i.style.transitionDelay = "0ms";
        i.style.opacity = 1;
    }

    for(const i of pfnodes){
        i.style.transitionDelay = "0ms";
        i.style.opacity = 1;
    }

    for(const i of nodes){
        i.style.transitionDelay = "0ms";
        if(i.innerHTML == "Start"){
            i.style.color = "#CE4545";
        }else if(i.innerHTML == "Goal"){
            i.syle.color = "#43A241";
        }else{
            i.style.color = "#4B50B9";
        }
    }
    cur.length = 0;
    count = 0;
    console.log("ALL RESET!");

}


function alert_prompt(){
    let alert_prompt = document.getElementById("alert");
    let alert_reset = document.getElementById("alert_reset");
    alert_prompt.style.display = "block";
    alert_reset.removeAttribute("disabled");
    alert_reset.style.cursor = 'pointer';
    setTimeout(() => {
        alert_prompt.style.opacity = "1";
    }, 10);
}

function alert_prompt_disappear(){
    console.log("yes");
    let alert_prompt = document.getElementById("alert");
    let alert_reset = document.getElementById("alert_reset");
    alert_prompt.style.opacity = "0";
    alert_reset.setAttribute('disabled', true);
    alert_reset.style.cursor = 'auto';
    setTimeout(() => {
        alert_prompt.style.display = "none";
    }, 400);
    reset_ip();
}

function animate_nodespath(pathID){
    // let test = document.getElementById("ip_pc_2-5").id.split('_');
    // console.log(test[2]);
    // let test1 = test[2].split('-');
    // console.log(test1[0]);
    // console.log(test1[1]);

    // // Creating a visited array to detect and prevent loops
    // let visited = [];
    // let count = 0; // Index counter for visited array

    // visited[count] = `Node${end1}`;
    // visited[count + 1] = `Node${end2}`;
    // console.log(visited);
    
    // function visited_iteration(){
        //     const iterator = visited.values();
        //     for(let i in iterator){
            //         console.log(i);
            //         return i;
            //     }
            // }
            
            // if(
                //     (`Node${end1}` || `Node${end2}`) == visited_iteration()
                // ){
    //     console.log("YESSS");
    // }
    
    // console.log(circle_node_end1.getAttribute("stroke")); - Works
    // console.log(circle_node_end1_back.getAttribute("stroke")); - Works
    
    
    try{
        let pathID_array = pathID.split("_");
        console.log(count);
        let end_2 = new String;
        
        // The pathID for bidirectional paths are in syntax "L_1_3_1", so their array size must be 4
        
        if(pathID_array.length == 4 && (cur[count - 1] == pathID_array[2])){
            console.log("This is a bidirectional path!");
            let end2 = pathID_array[3];
            let path = document.getElementById(`${pathID}`);
            let circle_node_end2 = document.getElementById(`Node${end2}`);
            let node_value_end2 = document.getElementById(`Value${end2}`);
            check_loop(cur, end2);
            cur[count] = Number(node_value_end2.innerHTML);
            console.log(String(cur));

            // Setting transition times for each element
            // Removing transitions and effects for node_end1 as it had already been deployed in the previous iteration

            circle_node_end2.style.transition = "all 500ms ease-in";
            node_value_end2.style.transition = "all 500ms ease-in";
            
            path.style.transition = "all 500ms ease-in";
            
            // Modifying css atrributes for each element
            
            path.style.opacity = 0;
            path.style.transitionDelay = "1000ms";
            
            circle_node_end2.style.opacity = 0;
            node_value_end2.style.color = "white";

            console.log(`end2 =` + end2);  
            count++;
            end_2 = end2;
            console.log("if1");
        }else{
            console.log(pathID_array);
            let end1 = pathID_array[1];
            let end2 = pathID_array[2];
            let path = document.getElementById(`${pathID}`);
            let circle_node_end1 = document.getElementById(`Node${end1}`);
            let circle_node_end2 = document.getElementById(`Node${end2}`);
            let node_value_end1 = document.getElementById(`Value${end1}`);
            let node_value_end2 = document.getElementById(`Value${end2}`);
            check_loop(cur, end2);
            cur[count] = Number(node_value_end2.innerHTML);
            console.log(String(cur));
            
            if(cur[count - 1] == Number(node_value_end1.innerHTML)){

                // Removing transitions and effects for node_end1 as it had already been deployed in the previous iteration

                circle_node_end2.style.transition = "all 500ms ease-in";
                node_value_end2.style.transition = "all 500ms ease-in";
                
                path.style.transition = "all 500ms ease-in";
                
                // Modifying css atrributes for each element
                
                path.style.opacity = 0;
                path.style.transitionDelay = "1000ms";
                
                circle_node_end2.style.opacity = 0;
                node_value_end2.style.color = "white";
            console.log("if2");

            }else{
                // Setting transition times for each element
                circle_node_end1.style.transition = "all 500ms ease-in";
                node_value_end1.style.transition = "all 500ms ease-in";
                
                circle_node_end2.style.transition = "all 500ms ease-in";
                node_value_end2.style.transition = "all 500ms ease-in";
                
                path.style.transition = "all 500ms ease-in";
                
                
                // Modifying css atrributes for each element
                circle_node_end1.style.opacity = 0;
                node_value_end1.style.color = "white";
                
                
                path.style.opacity = 0;
                path.style.transitionDelay = "2000ms";
                
                circle_node_end2.style.opacity = 0;
                node_value_end2.style.color = "white";
                circle_node_end2.style.transitionDelay = "1000ms";
                node_value_end2.style.transitionDelay = "1000ms";
            console.log("if3");

            }
            console.log(`end2 =` + end2); 
            count++;
            end_2 = end2;
        }
        let node_end2 = document.getElementById(`Value${end_2}`);
        console.log(node_end2);
        return node_end2;
    }
    catch(err){
        alert_prompt();
        console.log(err);
    }  
}

// Timeout after 3seconds for Reset button appearance
let reset_button = document.getElementById(`reset`);
function reset_appear()
{
    reset_button.style.opacity = 1;
    reset_button.removeAttribute("disabled");
    reset_button.style.transition = "all 300ms ease-in";
    reset_button.style.cursor = "pointer";
}

function check_loop(cur, end2){
        for(const i of cur){
            if(i == end2){
                alert_prompt();
            }
        }
}

// setTimeout(reset_appear(), 5000); //only after goal node is found

function stop(){
    console.log("Ended");
}