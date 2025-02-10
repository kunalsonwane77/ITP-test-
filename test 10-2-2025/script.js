//q2

let arr = [10,5,20,8,28]

let max = arr[0]

let nums=[]

for(let i =0; i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i]
        nums.push(max)
    }
}
let secondl=nums[nums.length-2]

console.log(secondl)





//q4)


let arr1=[1,2,3,4,5]

let arr2=[3,4,5,6,7]

let arr3=[]

for(let i =0; i<arr1.length ; i++){
    for(let j =0;j<arr2.length ; j++){
        if(arr1[i]==arr2[j]){
            arr3.push(arr1[i])
        }
    }
}

console.log(arr3)




//q5)

let inparr= [1,2,4,5,6]

let n = inparr[0]

for(let i = 0 ; i<inparr.length;i++){
    
    if(inparr[i+1]==n+1){
        n=inparr[i+1]
    }
    else{
        console.log(n+1)
        break;
    }
  
}

