
function bubbleSort(arr) {
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){ 
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    printArray(arr);
}
function printArray(arr) {
    let str='';
    for(let i=0; i<arr.length; i++){
        str += arr[i] ;
       if (i < arr.length - 1) {
            str += ', ';
        }
        
        

    }
    console.log(str);
     
}

let arr = [14,27,33,35,10];
bubbleSort(arr);
