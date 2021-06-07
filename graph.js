const tageArr = electrical.map((item, index) => {
  return `Tag ${index + 1}`;
});


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    // type: 'line',
    data: {
        labels: tageArr,
        datasets: [{
            type: 'line',
            label: 'Usage KW',
            // data: [12, 19, 3, 5, 2, 3],
            data: electrical,

            
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
        {
            type: 'bar',
            label: 'Costs',
            // data: [12, 19, 3, 5, 2, 3],
            data: electrical,

            
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 3)',
                'rgba(54, 162, 235, 3)',
                'rgba(255, 206, 86, 4)',
                'rgba(75, 192, 192, 3)',
                'rgba(153, 102, 255, 5)',
                'rgba(255, 159, 64, 7)'
            ],
            borderWidth: 1
            
        }
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
