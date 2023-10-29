function productOfArray(arr) {
    for(let i =1; i<= arr.length; i++) {
     if(arr[i] === 1) {
      return 1; 
     }
     return arr[i] * arr[i--];
    }
    
    }
    
    productOfArray([1,2,3])