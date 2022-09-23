function vacationBookList(input) {
    let pageCount = Number(input[0]);
    let readPageForOneHour = Number(input[1]);
    let dayCount = Number(input[2]);
    let totalTimeToRead = pageCount / readPageForOneHour;
    let needTimeToRead = totalTimeToRead / dayCount;
    
    console.log(needTimeToRead);

}

vacationBookList(["432","15","4"]);
