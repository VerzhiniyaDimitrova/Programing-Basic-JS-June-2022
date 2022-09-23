function lunchBreak(input) {
    let nameOfFilm = input[0];
    let filmTime = Number(input[1]);
    let timeForBreak = Number(input[2]);
    
    let lunchTime = timeForBreak / 8;
    let restTime = timeForBreak / 4;

    let timeForFilm = timeForBreak - (lunchTime + restTime);

    let diff = Math.ceil(Math.abs(filmTime - timeForFilm));
    if(filmTime <= timeForFilm) {
        console.log(`You have enough time to watch ${nameOfFilm} and left with ${diff} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${nameOfFilm}, you need ${diff} more minutes.`)
    }
    }
lunchBreak(["Teen Wolf",
"48",
"60"])

