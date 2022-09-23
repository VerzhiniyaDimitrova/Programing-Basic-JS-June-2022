function summerOutfit(input) {
    let degrees = Number(input[0]);
    let partOfDay = input[1];
    let outFit ;
    let shoes ;

    if(degrees >= 10 && degrees <= 18) {
        if(partOfDay == "Morning") {
            outFit = "Sweatshirt";
            shoes = "Sneakers"
        } else if(partOfDay == "Afternoon" || partOfDay == "Evening") {
            outFit = "Shirt";
            shoes = "Moccasins"
        } else{
            console.log("error")
        }
    } else if(degrees > 18 && degrees <= 24) {
        if(partOfDay == "Morning" || partOfDay == "Evening") {
            outFit = "Shirt";
            shoes = "Moccasins";
        } else if(partOfDay == "Afternoon") {
            outFit = "T-Shirt";
            shoes = "Sandals";
        }
    } else if(degrees >= 25) {
        if(partOfDay == "Morning") {
            outFit = "T-Shirt";
            shoes = "Sandals"
        } else if(partOfDay == "Afternoon") {
            outFit = "Swim Suit";
            shoes = "Barefoot";
        } else if(partOfDay == "Evening") {
            outFit = "Shirt";
            shoes = "Moccasins";
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outFit} and ${shoes}.`)

}
summerOutfit(["28",
"Evening"])



