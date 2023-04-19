

let show_images = document.querySelector(".show_images");
let foward = document.querySelector(".foward");
let prev = document.querySelector(".prev");


// let imgs = ["image1.jpg","image2.jpg" ,"image3.jpg"]

// let index = 0;
let images;

if(images = localStorage.getItem("images")){
    images = JSON.parse(localStorage.getItem("images"));
}else{
    images = 
    ["https://i.postimg.cc/NjRSYSpR/image1.webp",
     "https://i.postimg.cc/mDKKT4fN/image2.webp",
     "https://i.postimg.cc/wj9ZqFPP/image3.jpg"];
}

let index = 0;
// let show_images = document. querySelector(".show_images");
// let foward = document. querySelector(".foward");
// let prev = document. querySelector(".prev");


function next(){
show_images.src = images[index]
    // let show = imgs[index];
    // console.log(show);
    index++;
    if(index >= images.length){
        index=0;
    }

}

function back(){
    // let show = image[i]
    // index = index-1;
    show_images.src = images[index]
    index--;

    if(index < 0){
        index = images.length-1;
        index=0;
    }
}

function add(){

    let imgs = document.getElementById("img").value;
    //console.log(images)
    //images.push(imgs);
    //localStorage.setItem("images",JSON.stringify(images));
    let check = images.some(ele => ele == imgs)

    if(!imgs){
        alert ("put something") 

    }else if(check ){
        alert ("this image already exist")
    }else{    
    
    images.push(imgs)
    localStorage.setItem("images",JSON.stringify(images));
    console.log(images)
}
}

function remove(){
    //let images = document.getElementById("img").value;
  images.splice(index,1);
  localStorage.setItem("images",JSON.stringify(images));
}
 
 



