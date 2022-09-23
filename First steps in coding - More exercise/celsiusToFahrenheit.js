function celsiusToFahrenheit(input) {
    let celsius = Number(input[0]);
    let celsiusToFahrenheit = (celsius * 9) / 5 + 32;
    console.log(celsiusToFahrenheit.toFixed(2));

}
celsiusToFahrenheit(["32.3"]);
