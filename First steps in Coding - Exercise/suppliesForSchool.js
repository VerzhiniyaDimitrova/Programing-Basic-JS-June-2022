function suppliesForSchool(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let litters = Number(input[2]);
    let discount = Number(input[3]);
    let priceForPens = pens * 5.80;
    let priceForMarkers = markers * 7.20;
    let priceForDetergents = litters * 1.20;
    let fullPrice = priceForPens + priceForMarkers + priceForDetergents;
    let monneyForDiscount = fullPrice * (discount / 100);
    let finalPrice = fullPrice - monneyForDiscount;
    console.log(finalPrice);

}
suppliesForSchool(["4 ", "2 ", "5 ", "13 "]);
// 5.80 , 7.20 , 1.20;