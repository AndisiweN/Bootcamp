

let show_images = document. querySelector(".show_images");
let foward = document. querySelector(".foward");
let prev = document. querySelector(".prev");


let imgs = ["image1.jpg","image2.jpg" ,"image3.jpg"]

let index = 0;

function next(){
show_images.src = imgs[index]
    // let show = imgs[index];
    // console.log(show);
    index++;
    if(index >= imgs.length){
        index=0;
    }

}

function back(){
    // let show = image[i]
    // index = index-1;
    show_images.src = imgs[index]
    index--

    if(index < 0){
        index = imgs.length-1;
    }
}



let img = document.getElementById("image")
//let img = document.getElementById("image").value 
let current = 0;

function add(){

    let img = document.getElementById("image").value
    Image.push("image") 
}




let pictures = ["image1.jpg","image2.jpg","image3.jpg"]

 localStorage.setItem("images",JSON.stringify(pictures));
 //localStorage.getItem(pictures)





