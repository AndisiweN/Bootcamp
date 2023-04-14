
// function convertTemp(celsius){
//     //let fahrenheits;
//   fahrenheits = (celsius * (9/5) )+ 32;
//       return fahrenheits;
//    }
//   console.log(convertTemp(8))


//   function convertTemp(fahrenheits){
//        let celsius;
//        celsius = (fahrenheits - (32)* 5/9)

//        return celsius
//   }
//   console.log(convertTemp(45))



 function convertTemp(){

     let fahrenheits = document.getElementById("convertTemp").value
     let number = document.getElementById("submit")
     let celsius =  (fahrenheits - 32) * (5/9);
     number.innerHTML = celsius
    

    if(!fahrenheits){
        number.innerHTML = ("put in value")
    }
    else if(celsius < -273.15){
        number.innerHTML = ("it cannot be cold to this level")
    }
    else if(celsius < 16){
        number.innerHTML = (celsius + "  " + "it's  cold" )
    }else if(celsius >= 16 && celsius < 21){
        number.innerHTML = (celsius +" " + "warm")
    }else {
        number.innerHTML = (celsius +" " + "it is  hot")
    }
    
    }
    convertTemp()


// let number = [5,4,3,2,1,0,1,2,3,4,5];
// let sum = 0;

// for(let i = 0; i < number.length; i++ ){
//     sum += number[i];

// }
// console.log(sum)



