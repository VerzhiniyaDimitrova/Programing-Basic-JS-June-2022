function hotelRoom(input) {
    let month = input[0];
    let count = Number(input[1]);
    let priceStudio ;
    let priceApartment ;

    if(month === "May" || month === "October") {
        priceStudio = count * 50.00;
        if(count > 7 && count <= 14) {
            priceStudio = priceStudio * 0.95;
        } else if(count > 14) {
            priceStudio = priceStudio * 0.70;
        }
        priceApartment = count * 65.00;   
    } else if(month === "June" || month === "September") {
        priceStudio = count * 75.20;
        if(count > 14) {
            priceStudio = priceStudio * 0.80;
        }
        priceApartment = count * 68.70;
    } else if(month === "July" || month === "August") {
        priceStudio = count * 76.00;
        priceApartment = count * 77.00;
    }
    if(count > 14) {
        priceApartment = priceApartment * 0.90;
    }

    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}
hotelRoom(["May","15"])



