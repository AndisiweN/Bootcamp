// Arr = [4 ,5 ,6, 3, 2, 8, 12, 14]
// Arr.pop(14);

// console.log(Arr)


// Arr = [4 ,5 ,6, 3, 2, 8, 12]
// Arr.push(10);

// console.log(Arr)


//  Arr = [4 ,5 ,6, 3, 2, 8, 12, 10 ]
//  Arr.shift(4);

//  console.log(Arr)


//  Arr = [5 ,6, 3, 2, 8, 12, 10]
// Arr.unshift(20);

// console.log(Arr)



Arr = [20,311,12,11,13,15,9,4,0,10]

function OddAndEven(Arr) {
let odd = [];
let even = [];

for (let i = 0; i < Arr.length; i++){
      if (Arr[i] % 2 === 0) {  
        even.push(Arr[i]);          
       }else  {
       odd.push(Arr[i]);
        }
}

 let MyArr = {
    odd,
    even,
 };

        return MyArr;
}
console.log(OddAndEven(Arr));