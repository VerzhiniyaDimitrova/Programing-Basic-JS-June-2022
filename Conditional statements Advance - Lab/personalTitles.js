function personalTitles(input) {
    let age = Number(input[0]);
    let gender = input[1];

    switch(gender) {
        case "m":
            if(age >= 16) {
                console.log("Mr.");break;
            } else{ 
                console.log("Master");break;
            }
        case "f":
            if(age >= 16) {
                console.log("Ms.");break;
            } else{
                console.log("Miss");break;
            }
    }

}
personalTitles(["13.5","m"])



