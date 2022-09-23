function yardGreening(input) {
    let fullPriceGreening = Number(input[0]) * 7.61;
    let discount = fullPriceGreening * 0.18;
    let finalPrice = fullPriceGreening - discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);

}
yardGreening(["150"])