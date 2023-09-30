async function getData() {
    try {
      const response = await fetch('static/data/group3.json');
      const data = await response.json();
      const ForestAreaData = data.forest_area
      const FreshWaterData = data.freshwater_by_sector
      const CultivatedAreaData = data.cultivated_area
      const ProtectedAreaData = data.protected_area
  
      
    
      var ForestAreaCtx = document.getElementById('forest_area').getContext('2d');
      var barData = {
        labels: ForestAreaData.map(elem => elem.year),
        datasets: [{
          label: 'Area in mln ha',
          backgroundColor: 'rgba(59, 140, 233, 0.6)',
          data: ForestAreaData.map(elem => elem.forest_area),
          type: 'bar',
        }]
      };
  
      var lineData = {
        labels: ForestAreaData.map(elem => elem.year),
        datasets: [{
          label: '% of Land',
          backgroundColor: '#28666e',
          borderWidth: 3,
          data: ForestAreaData.map(elem => elem.percent_of_land),
          type: 'line',
          yAxisID: 'y2', // Assign the dataset to the second y-axis
        }]
      };
  
      // a new chart instance with combined data
      var combinedChart = new Chart(ForestAreaCtx, {
        type: 'bar',
        data: {
          labels: ForestAreaData.map(elem => elem.year),
          datasets: [barData.datasets[0], lineData.datasets[0]],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: false,
              min: 0,
              max: 15,
              title: {
                display: true,
                text: 'Area in mln ha',
              },
            },
            y2: {
              position: 'right', // Position the second y-axis on the right side
              beginAtZero: false,
              min: 7.8,
              max: 8.4,
              title: {
                display: true,
                text: '% of Land',
              },
            },
          },
        },
      });
  
  


      // Chart 2 - Freshwater by Sector
        const FreshWaterctx = document.getElementById('freshwater_by_sector').getContext('2d');
        const FreshWaterBySectordata = {
        labels: FreshWaterData.map(elem => elem.year),
        datasets: [
            {
            label: 'Agriculture Use',
            data: FreshWaterData.map(elem => elem.agriculture_use),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
            label: 'Domestic Use',
            data: FreshWaterData.map(elem => elem.domestic_use),
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            },
            {
            label: 'Industry Use',
            data: FreshWaterData.map(elem => elem.industry_use),
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            },
        ],
        };

        const options = {
          responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
            stacked: true,
            },
            y: {
            stacked: true,
            beginAtZero: false,
            min: 80,
            max: 100,
            ticks: {
                stepSize: 20,
            },
            },
        },
        };

        const myChart = new Chart(FreshWaterctx, {
        type: 'bar',
        data: FreshWaterBySectordata,
        options: options,
        });


        // Cultivated Area
      const CultivatedAreaCtx = document.getElementById('cultivated_area').getContext('2d');
      const CultivatedAreaChart = new Chart(CultivatedAreaCtx, {
        type: 'line',
        data: {
          labels: CultivatedAreaData.map(elem => elem.year),
          datasets: [
            {
              label: 'Cultivated Area',
              data: CultivatedAreaData.map(elem => elem.cultivated_area),
              backgroundColor: '#28666e',
              borderWidth: 3
            }
          ]
        },
        options: {
          responsive: true,
        maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: false,
              min: 3200
            }
          }
        },
      });


      // Chart 4 - Protected Area
      const ProtectedAreaCtx = document.getElementById('protected_area').getContext('2d');
      const ProtectedAreaChart = new Chart(ProtectedAreaCtx, {
        type: 'line',
        data: {
          labels: ProtectedAreaData.map(elem => elem.year),
          datasets: [
            {
              label: 'Protected Area',
              data: ProtectedAreaData.map(elem => elem.protected_area),
              backgroundColor: '#28666e',
              borderWidth: 3
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            }
          }
        },
      });


    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  getData();