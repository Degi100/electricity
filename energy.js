// This is my personal electricity calculator for my own purposes and is just static right now.
// V1.2 is just built in JS with my first JS experience! (JS basics, variables, arrays and Math methods)
// You need Node to run it in a console or terminal or CMD -> node energy.js
// You have any tips for me? Please let me know! I hope all phrases are correct.
// THX to https://simplernerd.com/js-console-colors/ for styling-code.
// Date: 03.06.2021 <<<Have fun>>>


console.log("\x1b[31m%s\x1b[m", "*****************************************");
console.log("\x1b[31m%s\x1b[5m", "*************ELECTRICAL CALC*************");
console.log("\x1b[31m%s\x1b[m", "******************by R.D.****************");
console.log("\x1b[31m%s\x1b[m", "*******************V.1.2*****************")
console.log("\x1b[31m%s\x1b[m", "*****************************************");

const electrical = [ 
  2.06, 1.5, 2.54, 2.62, 2.74, 3.16, 2.09, 2.23, 2.1, 1.78, 2.75, 2.59, 5.58,
  5.7, 5.8, 5.38, 5.6, 5.3, 4.98, 5.59, 5.34, 5.0, 4.16, 1.2, 5.7, 5.8, 5.8,
  3.87, 2.09, 0
];

console.log('');
console.log("\x1b[36m%s\x1b[m", "Electrical Usage in Month:");

let totalElectrical = electrical.reduce( (prev, curr) => prev + curr, 0);
//Old: let totalElectricalTemp = Math.round(totalElectrical * 100) / 100;
let totalElectricalTemp = `${totalElectrical.toFixed(2)}`; 
totalElectrical = `${totalElectrical.toFixed(2)} KW`;
//Old: console.log(totalElectrical + ' used in ' + electrical.length + ' Days');
totalElectrical = `${totalElectrical} used in ${electrical.length} days`;
console.log(totalElectrical);



const days = 30;
let averageKW = totalElectricalTemp;
let averageDay = totalElectricalTemp / days;
averageDay = `${averageDay.toFixed(2)}  KW Average per day`;
console.log(averageDay);

console.log('')
console.log("\x1b[36m%s\x1b[m", "Electrical Costs Month:");

const energyPriceKW = 0.33;
let priceMonth = energyPriceKW * totalElectricalTemp;
let priceMonthTemp = priceMonth.toFixed(2);
priceMonth = `${priceMonth.toFixed(2)} € per Month`; 
console.log(priceMonth);

let averageCostsKwDay = priceMonthTemp / days;
averageCostsKwDay = `${averageCostsKwDay.toFixed(2)} € Average per day`;
console.log(averageCostsKwDay);

console.log('');
console.log("\x1b[36m%s\x1b[m", "Electrical Peak(s) in Days: "); 


let electricalPeak = electrical.slice(12,27);
let totalElectricalPeak = electricalPeak.reduce( (prev, curr) => prev + curr, 0);
electricalPeak = electricalPeak.length;
electricalPeak = `${totalElectricalPeak} KW used in ${electricalPeak} Days`
// console.log(electricalPeak);

let priceMonthPeak = totalElectricalPeak * energyPriceKW;
priceMonthPeak = priceMonthPeak.toFixed(2);
priceMonthPeak = `${priceMonthPeak} € in 15 Days`


console.log(priceMonthPeak);

        // document.querySelector('#answer_001_1').textContent = `${electricalPeak}`
        // document.querySelector('#answer_002').textContent = 'this is answer 2'

        const App = {
          data() {
            return {
              totalElectrical: totalElectrical,
              averageDay: averageDay,
              priceMonth: priceMonth,
              averageCostsKwDay: averageCostsKwDay,
              electricalPeak: electricalPeak,
              priceMonthPeak: priceMonthPeak
            };
          }
        };
        Vue.createApp(App).mount('#app');



// let test = electricalPeak;

// document.querySelector(`${priceMonthPeak}`).innerHTML;

// document.querySelector('.totalElectrical').textContent;
// document.getElementsByID(`${totalElectrical}`).text;
// document.write(energy).innerHTML;


// document.write(`${totalElectrical} <br> ${priceMonth}`).innerHTML;
// document.write(`${priceMonth}`).innerHTML;


console.log('');
console.log("\x1b[36m%s\x1b[m", "**************APP END********************");
