// var a =1;
// var a = 10;

// let a =1;
// let a =10;

// let a=1;
// let b=2;
// let c=a+b;

// let a=10;
// let b="10";

// if(a=b){
// console.log(true)
// }else{
// console.log(false)
// }

// console.log(c);



// let d =10;
// let c =10;
// let a =10;
// let b =20;

// if(a==b && c==d){
// console.log("true")
// }else{
// console.log("false")

// }



// let a=3;
// let b=4;

// let a = 200;
// if( a > 200){
// console.log("huge")
// }else if( a == 200){
// console.log("same")
// }else if( a < 200 && a >= 0){
// console.log("less")
// }else{
// console.log("awsome")
// }



// let a = 10;
// if( a > 10){
// console.log("huge")
// }else if( a == 10){
// console.log("same")
// }else if( a < 10 || a >= 0){
// console.log("less")
// }else{
// console.log("awsome")
// }



// let a=2.5;
// let b=2;
// let c=3;

// if(a > b && a>c){
// console.log(a)
// }else if(b>a && b>c){
// console.log(b)
// }
// else{
// console.log(c)
// }



// if(a >b || a>c  ){
// console.log(a)
// }else if(b<a || b>c){
// console.log(b)
// }else if(c>a || c>b){
// console.log(b)

// }



// let num= 10;
// if(num %2 == 1){
// console.log("even")
// }else{
// console.log("odd")
// }



// //CHECKING IF THE NUMBER IS EVEN OR ODD
// let num1=10;
// let num2=13;
// let num3="";

// if(num1 %2==0){
//     console.log("even")
// }else if(num2 %2==0){
//     console.log("odd")
// }else{
//     console.log("empty")
// }



// //CREATE A BUTTON THAT WHEN YOU PUT A NUMBER AND CLICK RETURNS IF A NUMBER IS A EVEN OR ODD

// let button = document.getElementsByClassName("submit")

// function odd_even() {

//     let name = document.querySelector('.number').value

    // console.log(parseInt(name))
//     if(parseInt(name) %2 == 0){
//     alert("it is an evben number")
// }else{
//     alert("it is not an even number")
// }

// }


// //FIND THE LENGTH OF AN ARRAY

//  let numbers = [2,9,11,7,5,3,4,8,15]

//  for(let i = 0; i <= 9; i++){
//     console.log(i)
//  }



// //FIND THE EVEN NUMBERS WITHIN THE ARRAY

// let number = [2,9,11,7,5,3,4,8,15]

// for (let b = 0; b <= number.length; b++){
//   if (number[b] %2  === 0){
// console.log(number[b])  

// }
// }

// FIND THE FIRST CHARACTOR OF EACH STRING IN AN ARRAY


// MyArray = ["Andy", "Siwe", "Cwe", "Andie"]
// for (let i = 0; MyArray.length; i++){
//    if(MyArray[i]){
//     console.log(MyArray[i].charAt(0));


//   }
// }
 
// console.log(MyArray[i]);


// for(let i =0; i < 10; i++){
//   if(i % 3 === 0 && i % 5 === 5){
//     console.log('FizzBuzz')
//   }else if( i % 3 === 0){
//     console.log('Fizz')
//   }else if(i % 5 === 0){
//     console.log('Buzz')
//   }else{
//     console.log('FizzBuzz')
//   }
// }

//let numbers= [-3, -100, 10, 4, 6, 7, 20, 1]
//let a = min;
//let b = max;
 //numbers.sort((a,b) => a-b)
 //console.log(numbers)

//let MyArr = ["f","b","d","a","c","e","H","g"]
//let a = minimum;
//let b = maximum;
//MyArr.sort()

//console.log(MyArr)


//  let Name = "Andisiwe"
//  let reversedName = "";
//  for(i = Name.length - 1; i >= 0; i--){
//   reversedName += Name[i]
  
//  }
 
// console.log(reversedName)


// function maxAndMin(number){ 
// let Obj = {}   
// number.sort((a,b) => a-b)
// Obj["minNumber"] = number[0]
// Obj["maxNumber"] = number[number.length -1]
// //console.log(Obj)
// return Obj;

// }
// maxAndMin([3,2,5,7,8,9])
// let firstApp = maxAndMin([3,2,5,7,8,9])
// console.log(firstApp)

// function strReversed(text){
//   let reversed ="";
//   for(let i =10; i < text.length; i++){   
//   reversed = text[i] + reversed;
// }
// console.log(reversed);

// }
// strReversed();
// strReversed("Javascript is super easy");


// function calc(hr,h,d,pci = 1){
//   let salary = hr * h* d* pci;
//   console.log(salary)
  //return hr*h*d*pci;

//}
// calc(32,7,20,1.2)
//calc(32,7)

//function emailGen(fName="John",lName="Doe"){
  // return fName + "."+ lName + "@gsb.co.zz"
  //let email= fName + "."+ lName + "@gsb.co.zz"
  //return email.toLowerCase()
//}
//console.log(emailGen())
//console.log(emailGen("Andisiwe Nkwana"))


// let num1 = [1,3,5,7]
// let num2 = [0,2,4,6]
// let num3 = [num1 ,num2]
// let num4 = num1.concat(num2)

// console.log("This is num3", num3)
// console.log("This is num4", num4)



