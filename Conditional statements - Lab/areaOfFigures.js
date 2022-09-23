function areaOfFigures(input) {
    let figure = input[0];

    if(figure === "square") {
        let a = Number(input[1]);
        let s = a * a;
        console.log(s.toFixed(3))
    } else if(figure === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        let s = a * b;
        console.log(s.toFixed(3))
    } else if(figure === "circle") {
        let r = Number(input[1]);
        let s = (r * r) * Math.PI;
        console.log(s.toFixed(3))
    } else if(figure === "triangle") {
        let a = Number(input[1]);
        let h = Number(input[2]);
        let s = (a * h) / 2;
        console.log(s.toFixed(3))
    }
    }
areaOfFigures(["triangle",
"4.5",
"20"])


