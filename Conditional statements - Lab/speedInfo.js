function speedInfo(input) {
    let s = Number(input[0]);

    if(s <= 10) {
        console.log("slow")
    } else if(s >10 , s <= 50) {
        console.log("average")
    } else if(s >50 , s <= 150) {
        console.log("fast")
    } else if(s > 150 , s <= 1000) {
        console.log("ultra fast")
    } else if(s > 1000) {
        console.log("extremely fast")
    }
}

speedInfo(["3500"])