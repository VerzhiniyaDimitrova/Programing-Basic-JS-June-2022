function repainting(input) {
    let nylonKvm = Number(input[0]);
    let paintLitters = Number(input[1]);
    let thinnerLitters = Number(input[2]);
    let workHours = Number(input[3]);
    let bags = 0.40;

    let nylon = (nylonKvm + 2) * 1.50;
    let paint = (paintLitters + 0.10 * paintLitters) * 14.50;
    let thinner = thinnerLitters* 5;
    
    let sumForSupplies = nylon + paint + thinner + bags;
    let sumForWork = (sumForSupplies * 0.30) * workHours;
    let sumForAll = sumForSupplies + sumForWork;
    console.log(`${sumForAll}`);
}
repainting(["5","10","10","1"]);
// 1.50 , 14.50 , 5;
// + 2 , + 10 % , 30 %