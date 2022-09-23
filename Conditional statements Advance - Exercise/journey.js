function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let price = 0;
    let place  ;
    let type  ;

    switch(season) {
        case "summer": 
        if(budget <= 100) {
            place = "Bulgaria";
            price = budget * 0.30;
        }
        else if(budget <= 1000) {
            place = "Balkans";
            price = budget * 0.40;
        }
        else{
            place = "Europe"
            price = budget * 0.90;
        }
        break;
        case "winter": 
        if(budget <= 100) {
            place = "Bulgaria";
            price = budget * 0.70;
        }
        else if(budget <= 1000) {
            place = "Balkans";
            price = budget * 0.80;
        }else {
            place = "Europe";
            price = budget * 0.90;
        }
        break;
    }
    if(season === "summer") {
        type = "Camp"
    } else if(season === "winter") {
        type = "Hotel"
    }
    if(place === "Europe" && season === "summer" || season === "winter") {
        type = "Hotel"
    }

    console.log(`Somewhere in ${place}`)
    console.log(`${type} - ${price.toFixed(2)}`)

}
journey(["1500", "summer"])