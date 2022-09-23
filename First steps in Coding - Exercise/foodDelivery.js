function foodDelivery(input) {
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegetarianMenu = Number(input[2]);

    let delivery = 2.50;

    let chicken = chickenMenu * 10.35;
    let fish = fishMenu * 12.40;
    let vegetarian = vegetarianMenu * 8.15;
    let allFoodMenu = chicken + fish + vegetarian;
    let desert = allFoodMenu * 0.20;
    let allDeliveryFood = allFoodMenu + desert + delivery;
    console.log(`${allDeliveryFood}`)
    
}