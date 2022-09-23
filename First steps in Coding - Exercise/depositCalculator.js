function depositCalculator(input) {
    let deposit = Number(input[0]);
    let termDeposit = Number(input[1]);
    let annualInterestRate = Number(input[2]);
    let yearInterestRate = deposit * (annualInterestRate / 100);
    let monthInterestRate = yearInterestRate / 12;
    let interestRateEndPeriod = monthInterestRate * termDeposit;
    let sum = deposit + interestRateEndPeriod;
    console.log(sum);
    
}
depositCalculator(["2350","6","7"]);
