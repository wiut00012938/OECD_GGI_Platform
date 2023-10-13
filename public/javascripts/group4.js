async function getData() {
    try {
      const response = await fetch('static/data/group4.json');
      const data = await response.json();
      const AirPollutantsData = data.air_pollutants
      const WaterSewerageAccessData = data.water_sewerage_access
      const RespiratoryDeathData = data.respiratory_death
      const SanitationAccessData = data.sanitation_access
  
      // Chart 1 - Air Pollutants
      const AirPollutantsCtx = document.getElementById('air_pollutants').getContext('2d');
      const AirPollutantsChart = new Chart(AirPollutantsCtx, {
        type: 'line',
        data: {
          labels: AirPollutantsData.map(elem => elem.year),
          datasets: [
            {
              label: 'Air Pollutants',
              data: AirPollutantsData.map(elem => elem.air_pollutants),
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
              min: 700
            }
          },
          interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
          }
        },
      });
      // Chart 2 - Respiratory Deaths
      const RespiratoryDeathCtx = document.getElementById('respiratory_death').getContext('2d');
      const RespiratoryDeathChart = new Chart(RespiratoryDeathCtx, {
        type: 'bar',
        data: {
          labels: RespiratoryDeathData.map(elem => elem.year),
          datasets: [
            {
              label: 'Death due to respiratory disease',
              data: RespiratoryDeathData.map(elem => elem.respiratory_death),
              backgroundColor: '#28666e',
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
        maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: false,
              min: 0
            }
          }
        },
      });
      // Chart 3 - Water Access
      const WaterSewerageAccessCtx = document.getElementById('water_sewerage_access').getContext('2d');
      const WaterSewerageAccessChart = new Chart(WaterSewerageAccessCtx, {
        data: {
          datasets: [{
              type: 'line',
              label: 'Access to safe drinking water',
              data: WaterSewerageAccessData.map(elem => elem.water_access),
              borderDash: [5, 5],
              backgroundColor: "rgb(59, 140, 233)",
              pointRadius: 5
          }, {
              type: 'line',
              label: 'Access to sewerage services',
              data: WaterSewerageAccessData.map(elem => elem.sewerage_access),
              backgroundColor: '#28666e',
              pointRadius: 5
          }],
          labels: WaterSewerageAccessData.map(elem => elem.year)
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
          scales: {
            x: {
              stacked: true,
              },
            y: {
              beginAtZero: false,
              min: 30
            },
          },
          interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
          }
        },
  });
      // Chart 4 - Sewerage Access
      const SanitationAccessCtx = document.getElementById('sanitation_access').getContext('2d');
      const SanitationAccessChart = new Chart(SanitationAccessCtx, {
        type: 'line',
        data: {
          labels: SanitationAccessData.map(elem => elem.year),
          datasets: [
            {
              label: 'Sanitation Access',
              data: SanitationAccessData.map(elem => elem.sanitation_access),
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
              min: 88
            }
          },
          interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
          }
        },
      });

    } catch (error) {
        console.error('Error:', error);
      }
    }
getData();