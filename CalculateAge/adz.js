  andy= []

  if(localStorage.getItem("A")){
    newAge = JSON.parse(localStorage.getItem("A"));
  }

function calcAge(){
     localStorage.setItem("newAge",JSON.stringify(andy))

    // let thisYear = 2023;
    let bornYear = document.getElementById("age").value
    let newAge = new Date();
    let year = newAge.getFullYear();
    age = (year - bornYear);

    // alert(age);

    if(!bornYear){
                 alert ("age can not be empty")
     }else if(age < 0){
         alert ("age can not  be nagative")
     } else
         alert(age);
    

    localStorage.SetItem("A",(age))

    array = document.getElementById("age").value
    andy.push(array)

    localStorage.SetItem("A",JSON.stringify(andy));
    
}

calcAge()



// function calcAge(thisYear,bornYear){

//     let newAge = thisYear - bornYear;

//     return newAge;
    
// }
// console.log(calcAge(2023, 1994))

// andy = []

// function calcAge(){
//     localStorage.setItem("newAge",JSON.stringify(andy))

//     let thisYear = document.querySelector('.first').value;
//     let bornYear = document.querySelector('.second').value;
//     let newAge = thisYear - bornYear;
//     let age = num1 - num2;
//     //newAge = age;
    
//     //console.log(age);
//     if(!thisYear && bornYear){
//         alert ("age can not be empty")
//     }else{
//         age = bornYear - thisYear
//            if(age < 0){
//             alert ("age can not  be nagative")
         
//            }
//         }
//      }
//      localStorage.setItem(newAge)
//     //  newAge = JSON.parse(localStorage.getItem("newAge"));
//     newAge = document.querySelector
  
//     // }
 
//      calcAge();



// function add(nums){
//     //let num = 15 + 10 ;
//     return nums + 10 ;
// }
// console.log(add(15))


// function maltiply(num){
//     //let num = 25 * 5 ;
//     return num  * 5 ;
// }
// console.log(maltiply(25))


// function sumOfValues(num1 , num2){
//     //let num1 = 25;
//     //let num2 = 125;
//     return num1 + num2;

// }
// console.log(sumOfValues(25 , 125))
