function trainingLab(input) {
    let wM = Number(input[0]);
    let hM = Number(input[1]);
    

    let w = wM * 100;
    let h = (hM - 1) * 100;
    
    let deskW = Math.floor(h / 70);
    let deskH = Math.floor(w / 120);
    
    let workPlaceCount = (deskW * deskH) - 3;
    console.log(workPlaceCount)
}
trainingLab(["8.4", "5.20"])