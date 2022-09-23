function vegetablesMarket(input) {
    let priceForVegetablesKg = Number(input[0]);
    let priceForFruitsKg = Number(input[1]);
    let vegetablesKg = Number(input[2]);
    let fruitsKg = Number(input[3]);

    let priceForVegetables = priceForVegetablesKg * vegetablesKg;
    let priceForFruits = priceForFruitsKg * fruitsKg;

    let priceInLv = priceForVegetables + priceForFruits;
    let priceInEuro = priceInLv / 1.94;
    console.log(priceInEuro.toFixed(2));
    
}

vegetablesMarket(["1.5","2.5","10","10"]);
