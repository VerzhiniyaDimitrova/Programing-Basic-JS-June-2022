function skiTrip (input) {
    let daysV = Number(input[0]);
    let type = input[1];
    let evaluation = input[2];
    let price = 0;
    let finalPrice = 0;

    // "room for one person" – 18.00 лв за нощувка
    // "apartment" – 25.00 лв за нощувка 
    // "president apartment" – 35.00 лв за нощувка

    switch (type) {
        case "room for one person":
        if(daysV < 10) {
            price = (daysV - 1) * 18.00;
        } else if(daysV >= 10 && daysV <= 15) {
            price = (daysV - 1 ) * 18.00;
        } else {
            price = (daysV-1) * 18.00;
        }
        break;
        case "apartment":
        if(daysV < 10) {
            price = ((daysV - 1) * 25.00) * 0.70;
        } else if(daysV >= 10 && daysV <= 15) {
            price = ((daysV - 1) * 25.00) * 0.65;
        } else {
            price = ((daysV - 1) * 25.00) * 0.50;
        }
        break;
        case "president apartment":
        if(daysV < 10) {
            price = ((daysV - 1) * 35.00) * 0.90;
        } else if(daysV >=10 && daysV <= 15) {
            price = ((daysV - 1) * 35.00) * 0.85;
        }  else {
            price = ((daysV - 1) * 35.00) * 0.80;
        }
        break;
    }

    if(evaluation === "positive") {
        finalPrice = price + (price * 0.25);
    } else if(evaluation === "negative") {
        finalPrice = price - (price * 0.10);
    }

    console.log(finalPrice.toFixed(2))
}
skiTrip(["2",
"apartment",
"positive"])



