let NUMBER = 4936;

let thousandsPlace = (NUMBER/1000) - (NUMBER%1000)/1000

let hundredsPlace = (NUMBER%1000)/100 - (NUMBER%100)/100

let tensPlace = (NUMBER%100)/10 - (NUMBER%10)/10

let onesPlace = (NUMBER%10)

console.log(thousandsPlace);

console.log(hundredsPlace);

console.log(tensPlace);

console.log(onesPlace);
