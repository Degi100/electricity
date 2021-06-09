const electrical = [ 
  2.06, 1.5, 2.54, 2.62, 2.74, 3.16, 2.09, 2.23, 2.1, 1.78, 2.75, 2.59, 5.58,
  5.7, 5.8, 5.38, 5.6, 5.3, 4.98, 5.59, 5.34, 5.0, 4.16, 1.2, 5.7, 5.8, 5.8,
  3.87, 2.09, 0
];

let totalElectrical = electrical.reduce( (prev, curr) => prev + curr, 0);
let totalElectricalTemp = `${totalElectrical.toFixed(2)}`; 
totalElectrical = `${totalElectrical.toFixed(2)} KW`;
totalElectrical = `${totalElectrical} used in ${electrical.length} days`;

const days = 30;
let averageKW = totalElectricalTemp;
let averageDay = totalElectricalTemp / days;
averageDay = `${averageDay.toFixed(2)}  KW Average per day`;

const energyPriceKW = 0.33;
let priceMonth = energyPriceKW * totalElectricalTemp;
let priceMonthTemp = priceMonth.toFixed(2);
priceMonth = `${priceMonth.toFixed(2)} € per Month`; 

let averageCostsKwDay = priceMonthTemp / days;
averageCostsKwDay = `${averageCostsKwDay.toFixed(2)} € Average per day`;

let electricalPeak = electrical.slice(12,27);
let totalElectricalPeak = electricalPeak.reduce( (prev, curr) => prev + curr, 0);
electricalPeak = electricalPeak.length;
electricalPeak = `${totalElectricalPeak} KW used in ${electricalPeak} Days`

let priceMonthPeak = totalElectricalPeak * energyPriceKW;
priceMonthPeak = priceMonthPeak.toFixed(2);
priceMonthPeak = `${priceMonthPeak} € in 15 Days`

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

        const config = {
  type: 'line',
  data,
  options: {}
};

