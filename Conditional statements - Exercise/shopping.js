function shopping(input) {
    let budget = Number(input[0]);
    let nCount = Number(input[1]);
    let mCount =Number(input[2]);
    let pCount = Number(input[3]);

    let nPrice = nCount * 250;
    let mPrice = mCount * (nPrice * 0.35);
    let pPrice = pCount * (nPrice * 0.10);

    let finalPrice = 0

    if(nCount > mCount) {
        finalPrice = (nPrice + mPrice + pPrice) * 0.85
    } else {
        finalPrice = nPrice + mPrice + pPrice
    }

    let diff = Math.abs(budget - finalPrice);
    if(budget >= finalPrice) {
        console.log(`You have ${diff.toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`)
    }
}
    
shopping(["920.45",
"3",
"1",
"1"])



