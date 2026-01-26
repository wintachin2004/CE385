let sumEven = 0;
for(let i = 2; i <= 50; i++) {
    if (i % 2 === 0) {
        sumEven = sumEven + i;
    }
    
}
console.log("ผลรวม 2-50=", sumEven);


let productOdd = 1;
let j =1;

while(j <= 10) {
    if (j % 2 !== 0) {
        productOdd *= j;
    }
    j++;
}

console.log("ผลคูณเลขคี่ 1-10=", productOdd);