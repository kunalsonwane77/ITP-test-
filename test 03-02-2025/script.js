//


//q1
let arr = [6,4,7,3,2,5,8]


for(let i =0;i<arr.length-1;i++){


let j =0
while(j<arr.length-1-i){
     
     if(arr[j]>arr[j+1]){

        let temp=arr[j]
        arr[j]=arr[j+1]
        arr[j+1]=temp
       
        
     }
     j++
}

}

console.log(arr)



//Q5)


 let sum =7 ;
for(let i =1 ; i<7;i++){
 sum= sum+" 7"

}
console.log(sum)
for(let i=1;i<6;i++){
  console.log("7 7       7 7")
}
let seven=7
for(let i =1 ; i<7;i++){
 seven= seven+" 7"
}
console.log(seven)



//q3)

let n=4

let num = 442548;

let array= []

while(num>0){

  let ld= num%10
  array.unshift(ld)
  num=Math.floor(num/10)


}
console.log(array)

let count = 0;

for(let i = 0; i<array.length;i++){
   if(n==array[i]){
    count++
   }
}

console.log(` ${n} number is repeated ${count} times `)




//q5)

// let space=" "
// let star="*"

// for(let i=0;i<6;i++){
   
// }