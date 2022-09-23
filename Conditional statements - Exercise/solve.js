function godzillaVsKong(input){
    let budget = Number(input[0]);
    let statistsNum = Number(input[1])
    let clothPrice  =Number(input[2])
    let decorCost = budget*0.1
    let clothCost= 0
    if (statistsNum>150) {clothCost=(clothPrice*statistsNum)*0.9
     
    } else {clothCost=clothPrice*statistsNum
     
     
    }
    let movieCost = clothCost + decorCost
    let diff= Math.abs(movieCost-budget).toFixed(2)
     
    if (movieCost<=budget) {console.log('Action!') 
    console.log(`Wingard starts filming with ${diff} leva left.`)
     
    } else {console.log('Not enough money!') 
    console.log(`Wingard needs ${diff} leva more.`)
     
    }
}
godzillaVsKong(["9587.88",
"222",
"55.68"])
