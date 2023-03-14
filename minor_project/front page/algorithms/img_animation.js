let img = document.getElementsByClassName("img-fluid");
console.log(img[0].getAttribute("src"));

// This is a loop which duplicates and creates an addeventlistener function for all the images available. 
// In this case, there are in total 8 images, thus 8 eventlisteners are created dedicated to each images

for(let i = 0; i < img.length; i++) {
    let ct = new Array(img.length); 
    let img_ct = new Array(img.length); 
    img_ct[i] = img[i].id.replace('img', '');
    console.log(img_ct[i]); // This value denotes how many images an algorithm specific card has
    ct.fill(0); // Initializes every cards with img0.png images
    img[i].addEventListener("mouseover", () => {
        // console.log("I am function number" + i);
        // console.log(img[i].src.slice(-5,-4));
        
        // let src = img[i].src.toString();
        
        // for(let x = 0;  1; x++){
            //     if(x = 2){
                //         img[i].src = src.replace(x, '0');
                //     }else{
                    //         img[i].src = src.replace(x, x + 1);
                    //     }
                    //     src = img[i].src;
                    //     setTimeout(() => {
                
                        //     }, 200);
                        //     img[i].addEventListener("mouseleave", () => {
                            //         break;
                            //     });
        // }
        
        // img[i].src = "../assets/ChooseAlgo/stack/img1.png";
        
        // let src = img[i].src.toString();
        ct[i] = 0;
        refreshId = setInterval(() => {
            if(ct[i] == img_ct[i]-1){
                img[i].src = img[i].src.replace(/img\d/, 'img0');
                console.log(`ct[${i}]`+ct[i]);
                ct[i] = 0;
            }else{
                img[i].src = img[i].src.replace(/img\d/, `img${ct[i] + 1}`);
                console.log(`ct[${i}]`+ct[i]);
                ct[i]++;
            }
        }, 450);   
    }); 
    img[i].addEventListener("mouseleave", () => {
        img[i].src = img[i].src.replace(/img\d/, `img0`);
        console.log(img[i].src);
        clearInterval(refreshId);
        ct[i] = 0;
    });
}
    
// Made use of regular expression to search and replace the image urls
// Added two different event listeners for mouse entry and mouse exit on an image for the image slideshow