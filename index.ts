
// @ts-ignore
// function sum(a:number, b:number):number {
//     return a+b;
// }

// console.log(sum(1,2));

//type annotation------------------------------------------------

// let x:number = 10;
// let y:string = "10";
// let z:boolean = true;

// let avc:any = 32   //can be anything
// avc = "imtiyaj"



// console.log(typeof x);
//way of explicitly defining type of a variable

// let nanValue:number = NaN;
// console.log(typeof (NaN));

//string------------------------------------------------

//  let str:string = "imtiyaj";
//  let str2:string = "Ahamad"
//  let funllName:string = str+str2;
//  let len:number = funllName.length
//  console.log(funllName.toUpperCase()); ;
//  console.log(len);

//function----------------------------------------------------------------


// function sum(a:number, b:number):number {}

// function isPalinDrome(a:string):boolean{
//     let i:number = 0;
//     let j:number = a.length-1;

//     while(i<j){
//         if(a[i]!=a[j]){
//             return false;
//         }
//         i++;
//         j--;
//     }
//     return true;
    
// }

// const greet = (name:string = "imtiyaj", msg:string="hello!"):string => {
    
//     return `hello ${name} ${msg}`
// }

// console.log(greet("hello!", "imtiyaj"));

// console.log(isPalinDrome("imttmii"));

//Array --------------------------------

// const arr:number[] = [1,2,3,4,5]

// for(let i in arr){
//     console.log(i);
// }

// const numArr:number[] = new Array();

// const names:string[] = Array.of("imtiyaj", "Ahamad");

//objects in ts----------------------------------------------------------------

// const person = {
//     name: "imtiyaj",
//     age: 29,
//     Address: {
//         city: "Mumbai",
//         state: "Maharashtra"
//     }
// }

// const person:{
//     name:string;
//     age:number;
//     Address:{
//         city:string;
//         state:string;
//     } 
// } = {
//     name: "imtiyaj",
//     age: 29,
//     Address: {
//         city: "Mumbai",
//         state: "Maharashtra"
//     }
// }

//type alias------------------------------------------

type Person = {
    name:string;
    age:number;
    class?:string;   //optinal attribute
    Address:{
        city:string;
        state:string;
    }
}

const person:Person = {
    name: "imtiyaj",
    age: 29,
    Address: {
        city: "Mumbai",
        state: "Maharashtra"
    }
}







