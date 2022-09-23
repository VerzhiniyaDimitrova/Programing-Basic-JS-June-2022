function worldSwimmingRecord(input) {
    let recordInSec = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecForOneM = Number(input[2]);

    let swimInSec = distanceInMeters * timeInSecForOneM;
    let delayCount = Math.floor(distanceInMeters / 15);
    let delayInSec = delayCount * 12.5;
    let finalSwim = swimInSec + delayInSec;
    
  

    let diff = Math.abs(recordInSec - finalSwim);
    


    if(finalSwim < recordInSec) {
        console.log(`Yes, he succeeded! The new world record is ${finalSwim.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
    }
    
}
worldSwimmingRecord(["10464",
"1500",
"20"])

