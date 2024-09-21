
function calculateChange(amount, denominations) {
    const change = {};
    for (let i = 0; i < denominations.length; i++) {
        const denomination = denominations[i];
        const count = Math.floor(amount/denomination);//Returns x rounded down to its nearest integer
        if (count>0){
            change[denomination] = count;
            amount = count * denomination;
        }
    }
return change;
}

console.log(calculateChange(9000,[2000,1000,500]));