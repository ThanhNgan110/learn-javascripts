var a = 1;
var b = 2;


let i = 0;
while(i<n){
    i = i + 5;
}

for(i=0; i<n; i++){
    for(j=0; j<n; j++){
    }

}
// f(n) = n*n = n^2 , 0(f(n)) = o(n^2)


for(i=0; i<n; i++){
    for(j=i; j<n; j++){
    }

}
// f(n) = n *(n + (n-1) + (n-2)+ ...+2+ 1)
//       = n* ((n+1)/2)
//        = n(n+1)/2
//         = (n^2 + n)/2
//         = n^2/2 + n/2
//  f(n) = 0(f(n)) = 0(n^2)

for(i=0; i<n;i++){
    if(arr[i] ==value){
        return;
    }
    return -1;
}
// f(n) = cn O(f(n)) = O(n)


let low = 0; hight = n-1;
while(low<=hight){
    if(arr[mid] == value) return mid;
    else if(arr[mid] <value)  low = mid +1;
    else high = mid -1;

}
return -1;
// 8 4 2 1







