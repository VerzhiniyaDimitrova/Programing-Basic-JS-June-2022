function fishland(input) {
    let skPriceKg = Number(input[0]);
    let cPriceKg = Number(input[1]);
    let palKg = Number(input[2]);
    let safKg = Number(input[3]);
    let mKg = Number(input[4]);


    //Паламуд – 60% по-скъп от скумрията
    //Сафрид – 80% по-скъп от цацата
    //Миди – 7.50 лв. за килограм

    palPrice = (skPriceKg + (skPriceKg * 0.60)) * palKg;
    safPrice = (cPriceKg + (cPriceKg * 0.80)) * safKg;
    mPrice = 7.50 * mKg;

    finalPrice = palPrice + safPrice + mPrice;
    console.log(finalPrice.toFixed(2))


}
fishland(["5.55", "3.57" , "4.3" , "3.6", "7"])
