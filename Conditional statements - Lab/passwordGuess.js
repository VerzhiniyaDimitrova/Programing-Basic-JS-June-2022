function passwordGuess(input) {
    let password = Number(input[0]);
    let phrase = "s3cr3t!P@ssw0rd";

    if(password === phrase) {
        console.log("Welcome")
    } else {
        console.log("Wrong password!")
    }
}
passwordGuess(["s3cr3t!p@ss"])