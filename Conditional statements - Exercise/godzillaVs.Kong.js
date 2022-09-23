function godzillaVsKong(input) {
    let movieBudget = Number(input[0]);
    let movieExtrasCount = Number(input[1]);
    let priceForClothing = Number(input[2]);
    let decorPrice = movieBudget * 0.10;
    let moneyForClothing = 0;

    if(movieExtrasCount > 150) {
        moneyForClothing = (priceForClothing * movieExtrasCount) * 0.90
    } else{
        moneyForClothing = priceForClothing * movieExtrasCount
    }


    let moneyForFilm = moneyForClothing + decorPrice;
    
    diff = Math.abs(moneyForFilm - movieBudget);

    if(moneyForFilm > movieBudget) {
        console.log("Not enough money!")
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`)
    } else if(moneyForFilm <= movieBudget) {
        console.log("Action!")
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`)
    }

}
godzillaVsKong(["9587.88",
"222",
"55.68"])


