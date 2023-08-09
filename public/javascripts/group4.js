async function getData() {
    try {
      const response = await fetch('static/data/group4.json');
      const data = await response.json();
      const AirPollutantsData = data.air_pollutants
      const WaterAccessData = data.water_access
      const RespiratoryDeathData = data.respiratory_death
      const SewerageAccessData = data.sewerage_access
  
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
          scales: {
            y: {
              beginAtZero: false,
              min: 700
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
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
          scales: {
            y: {
              beginAtZero: false,
              min: 0
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
      });
      // Chart 3 - Water Access
      const WaterAccessCtx = document.getElementById('water_access').getContext('2d');
      const WaterAccessChart = new Chart(WaterAccessCtx, {
        type: 'line',
        data: {
          labels: WaterAccessData.map(elem => elem.year),
          datasets: [
            {
              label: 'Water Access',
              data: WaterAccessData.map(elem => elem.water_access),
              backgroundColor: '#28666e',
              borderWidth: 3
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: false,
              min: 60
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
      });
      // Chart 4 - Sewerage Access
      const SewerageAccessCtx = document.getElementById('sewerage_access').getContext('2d');
      const SewerageAccessChart = new Chart(SewerageAccessCtx, {
        type: 'line',
        data: {
          labels: SewerageAccessData.map(elem => elem.year),
          datasets: [
            {
              label: 'Sewerage Access',
              data: SewerageAccessData.map(elem => elem.sewerage_access),
              backgroundColor: '#28666e',
              borderWidth: 3
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: false,
              min: 34
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
      });

    } catch (error) {
        console.error('Error:', error);
      }
    }
getData();