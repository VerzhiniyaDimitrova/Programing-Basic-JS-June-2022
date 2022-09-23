function toyShop(input) {
    let priceForVacation = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let tracks = Number(input[5]);

    let money = puzzles * 2.60 + dolls * 3.00 + bears * 4.10 + minions * 8.20 + tracks * 2.00;
    let toyCount = puzzles + dolls + bears + minions + tracks;

    if(toyCount >= 50) {
        money = money * 0.75
    }

    money = money * 0.90;
    let diff = Math.abs(priceForVacation - money);

    if(money >= priceForVacation) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }
}

toyShop(["320",
"8",
"2",
"5",
"5",
"1"])
