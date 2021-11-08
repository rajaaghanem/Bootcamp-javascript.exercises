function score (num){
    if ( num >=1 && num<=64) return 'F';
    if (num>=65 && num<=69) return 'D';
    if (num>=70 && num<=79) return 'C';
    if (num>=80 && num<=89) return 'B';
    if (num>=90 && num<=100) return 'A';
}

console.log(score(19));