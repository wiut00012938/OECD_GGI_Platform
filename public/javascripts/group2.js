async function getData() {
    try {
      const response = await fetch('static/data/group2.json');
      const data = await response.json();
      const carbon_productivity_data = data.carbon_productivity
      const energy_intensity_data = data.energy_intensity
      const share_of_renewables_data = data.share_of_renewables
      const water_productivity_data = data.water_productivity
  
      // Chart 1 - Carbon Productivity
      const carbonCtx = document.getElementById('carbon_productivity').getContext('2d');
      const carbonChart = new Chart(carbonCtx, {
        type: 'line',
        data: {
          labels: carbon_productivity_data.map(elem => elem.year),
          datasets: [
            {
              label: 'Carbon Productivity',
              data: carbon_productivity_data.map(elem => elem.carbon_productivity),
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
      // Chart 2 - Energy Intensity
      const EnergyCtx = document.getElementById('energy_intensity').getContext('2d');
      const EnergyChart = new Chart(EnergyCtx, {
        type: 'line',
        data: {
          labels: energy_intensity_data.map(elem => elem.year),
          datasets: [
            {
              label: 'Energy Intensity',
              data: energy_intensity_data.map(elem => elem.energy_intensity),
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
      // Chart 3 - Share of Renewables
      const RenewablesCtx = document.getElementById('share_of_renewables').getContext('2d');
      const RenewablesChart = new Chart(RenewablesCtx, {
        type: 'line',
        data: {
          labels: share_of_renewables_data.map(elem => elem.year),
          datasets: [
            {
              label: 'Share of Renewables',
              data: share_of_renewables_data.map(elem => elem.share_of_renewables),
              backgroundColor: '#28666e',
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: false,
              min: 6
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
      });
      // Chart 4 - Water Productivity
      const WaterCtx = document.getElementById('water_productivity').getContext('2d');
      const WaterChart = new Chart(WaterCtx, {
        type: 'line',
        data: {
          labels: water_productivity_data.map(elem => elem.year),
          datasets: [
            {
              label: 'Water Productivity',
              data: water_productivity_data.map(elem => elem.water_productivity),
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

    } catch (error) {
        console.error('Error:', error);
      }
    }
getData();