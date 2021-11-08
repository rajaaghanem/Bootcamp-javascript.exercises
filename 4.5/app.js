function leapYear(year){

    if (year%4===0 && year%100===0 && year%400===0) console.log ("It is indeed leap year");
    else if (year%4===0 && (year%100!=0)) console.log ("It is a leap year");
    else console.log("It is NOT a leap year");
}

leapYear(2012);