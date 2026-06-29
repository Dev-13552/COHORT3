const arr = [2, 3, 3, 4, 8, 19, 5, 6, 18];

arr.sort((a, b) => {
    if(a%2 == 0 && b%2 != 0){
        return -1;
    }
    else if(a%2 != 0 && b%2 == 0){
        return 1;
    }
    else{
        return a - b;
    }
    
});

// arr.sort((a, b) => {
//     if (a % 2 !== b % 2) {
//         return (a % 2) - (b % 2);
//     }
//     return a - b;
// });

console.log(arr);