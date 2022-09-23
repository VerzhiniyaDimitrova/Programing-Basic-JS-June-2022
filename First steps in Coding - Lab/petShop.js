function petsShop(input) {
    let dogsFood = Number(input[0]);
    let catsFood = Number(input[1]);
    let petsFood = (dogsFood * 2.50) + (catsFood * 4);
    console.log(petsFood);
}
petsShop(["13","9"])