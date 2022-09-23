function housePainting(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let door = 1.2 * 2;
    let frontSide = (2 * ( x * x)) - door;

    let window = 1.5 * 1.5;
    let side = (2 * (x * y)) - (2 * window);

    let roofFront = 2 * ((x * h) / 2);
    let roofSide = 2 * (x * y);
    

    let green = (frontSide + side) / 3.4;
    let red = (roofFront + roofSide) / 4.3;

    console.log(green.toFixed(2));
    console.log(red.toFixed(2));
    
}
housePainting(["10.25" , "15.45" , "8.88"])