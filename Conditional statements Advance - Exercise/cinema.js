function cinema(input) {
    let projectionType = input [0];
    let rowsCount = Number(input[1]);
    let columnsCount = Number(input[2]);
    let income = 0;

    switch(projectionType) {
        case "Premiere": income = (rowsCount * columnsCount) * 12.00;break;
        case "Normal": income = (rowsCount * columnsCount) * 7.50;break;
        case "Discount": income = (rowsCount * columnsCount) * 5.00;break;
    }
    console.log(income.toFixed(2));
}
cinema(["Discount",
"12",
"30"])


