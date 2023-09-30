async function getData() {
    try {
      const response = await fetch('static/data/group5.json');
      const data = await response.json();
      const EnvironmentExpendituresData = data.environment_expenditures
      const EnvironmentRevenueData = data.environment_revenue
      const EnergySubsidiesData = data.energy_subsidies
  
      // Chart 1 - Public expenditures in environment protection
      const EnvironmentExpenditureCtx = document.getElementById('environment_expenditures').getContext('2d');
      const EnvironmentExpenditureChart = new Chart(EnvironmentExpenditureCtx, {
        data: {
            datasets: [{
                type: 'bar',
                label: '% of total public expenditure',
                data: EnvironmentExpendituresData.map(elem => elem.government_percentage),
                borderDash: [5, 5],
                backgroundColor: "rgb(59, 140, 233)"
            }, {
                type: 'bar',
                label: '% of GDP',
                data: EnvironmentExpendituresData.map(elem => elem.gdp_percentage),
                backgroundColor: '#28666e'
            }],
            labels: EnvironmentExpendituresData.map(elem => elem.year)
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

    // Chart 2 - Revenues from environmental tax, % share 
    var EnvironmentRevenueCtx = document.getElementById('environment_revenue').getContext('2d');

    var barData = {
      labels: EnvironmentRevenueData.map(elem => elem.year),
      datasets: [
        {
          label: 'Emissions of pollutants into the air-tax',
          data: EnvironmentRevenueData.map(elem => elem.air_emissions),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Waste Water Collection fee',
          data: EnvironmentRevenueData.map(elem => elem.water_waste),
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
        },
        {
          label: 'Solid Waste Collectio fee',
          data: EnvironmentRevenueData.map(elem => elem.solid_waste),
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
        },
      ],
    };
    
    var lineData = {
      labels: EnvironmentRevenueData.map(elem => elem.year),
      datasets: [{
        label: 'Share of environmental revenues in total budget',
        borderColor: '#28666e',
        type: 'line',
        borderWidth: 3,
        data: EnvironmentRevenueData.map(elem => elem.budget_revenue),
        fill: false, // Set fill to false for line dataset
        yAxisID: 'y2',
      }]
    };
    
    // A new chart instance with combined data
    var combinedChart = new Chart(EnvironmentRevenueCtx, {
      type: 'bar',
      data: {
        labels: EnvironmentRevenueData.map(elem => elem.year),
        datasets: [barData.datasets[0], barData.datasets[1], barData.datasets[2], lineData.datasets[0]], // Include all bar datasets
      },
      options: {
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
            beginAtZero: false,
            ticks: {
              stepSize: 20,
            },
            min: 0,
            max: 100,
            title: {
              display: true,
              text: 'Share in total environemntal revenue',
            },
          },
          y2: {
            position: 'right',
            beginAtZero: false,
            min: 0,
            max: 0.025, // Adjust the max value for percentage
            title: {
              display: true,
              text: '% of total revenues',
            },
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    });

      //Chart 3 - Energy subsidies (USD real 2019, million)
      const EnergySubsidiesctx = document.getElementById('energy_subsidies').getContext('2d');
        const EnergySubsidydata = {
        labels: EnergySubsidiesData.map(elem => elem.year),
        datasets: [
            {
            label: 'Oil',
            data: EnergySubsidiesData.map(elem => elem.oil),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
            label: 'Electricity',
            data: EnergySubsidiesData.map(elem => elem.electricity),
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            },
            {
            label: 'Gas',
            data: EnergySubsidiesData.map(elem => elem.gas),
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            },
        ],
        };

        const options = {
        scales: {
            x: {
            stacked: true,
            },
            y: {
            stacked: true,
            beginAtZero: true,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        };

        const myChart = new Chart(EnergySubsidiesctx, {
        type: 'bar',
        data: EnergySubsidydata,
        options: options,
        });


    } catch (error) {
        console.error('Error:', error);
      }
    }
    
    getData();