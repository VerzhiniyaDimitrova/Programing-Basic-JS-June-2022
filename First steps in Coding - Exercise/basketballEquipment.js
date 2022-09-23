function basketballEquipment(input) {
    let annualFee = Number(input[0]);

    let basketballSneakers = annualFee - (annualFee * 0.40);
    let basketballOutfit = basketballSneakers - (basketballSneakers * 0.20);
    let ball = basketballOutfit * 1 / 4;
    let basketballAccessories = ball * 1 / 5;
    let sum = annualFee + basketballSneakers + basketballOutfit + ball + basketballAccessories;
    console.log(sum);
    
}
basketballEquipment(["550"]);
