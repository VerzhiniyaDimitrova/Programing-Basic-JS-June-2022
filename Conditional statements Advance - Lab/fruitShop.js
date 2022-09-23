function fruitShop(input) {
    let product = input[0];
    let day = input[1];
    let productCount = Number(input[2]);
    let priceOfProduct = 0;


    if(day === "Monday" || day === "Tuesday"|| day === "WednesDay"|| day === "Thursday"|| day === "Friday") {
        switch(product) {
            case "banana": priceOfProduct = productCount * 2.50;break;
            case "apple": priceOfProduct = productCount * 1.20;break;
            case "orange": priceOfProduct = productCount * 0.85;break;
            case "grapefruit": priceOfProduct = productCount * 1.45;break;
            case "kiwi": priceOfProduct = productCount * 2.70;break;
            case "pineapple": priceOfProduct = productCount * 5.50;break;
            case "grapes": priceOfProduct = productCount * 3.85;break;
            
        } 
    } else if(day === "Saturday" || day === "Sunday") {
        switch(product) {
            case "banana": priceOfProduct = productCount * 2.70;break;
            case "apple": priceOfProduct = productCount * 1.25;break;
            case "orange": priceOfProduct = productCount * 0.90;break;
            case "grapefruit": priceOfProduct = productCount * 1.60;break;
            case "kiwi": priceOfProduct = productCount * 3.00;break;
            case "pineapple": priceOfProduct = productCount * 5.60;break;
            case "grapes": priceOfProduct = productCount * 4.20;break;
    }
    } 
    if(priceOfProduct > 0) {
        console.log(priceOfProduct.toFixed(2))
    } else {
        console.log("error")
    }
    }   
    
fruitShop(["pears",
"Monday",
"1"])





