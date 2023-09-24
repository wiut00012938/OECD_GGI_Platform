async function getData() {
    try {
      const response = await fetch('static/data/group1.json');
      const data = await response.json();
      const gdpData = data.real_gdp
      const tradeData = data.foreign_trade
      const employment_by_sectorData = data.employment_by_sector
  
      // Chart 1 - GDP per Capita
      const gdpCtx = document.getElementById('real-gdp').getContext('2d');
      const gdpChart = new Chart(gdpCtx, {
        type: 'line',
        data: {
          labels: gdpData.map(elem => elem.year),
          datasets: [
            {
              label: 'Real GDP',
              data: gdpData.map(elem => elem.gdp_per_cap),
              backgroundColor: '#28666e',
              borderWidth: 1,
              pointRadius: 6
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: false,
              min: 2.0
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
      });
  
      // Chart 2 - Foreign Trade
      const tradeCtx = document.getElementById('foreign-trade').getContext('2d');
      const TradeChart = new Chart(tradeCtx, {
        data: {
            datasets: [{
                type: 'line',
                label: 'Export of goods and services',
                data: tradeData.map(elem => elem.export),
                borderDash: [5, 5],
                backgroundColor: "rgb(59, 140, 233)",
                pointRadius: 5
            }, {
                type: 'line',
                label: 'Import of goods and services',
                data: tradeData.map(elem => elem.import),
                backgroundColor: '#28666e',
                pointRadius: 5
            }],
            labels: tradeData.map(elem => elem.year)
        },
        options: {
            scales: {
              y: {
                beginAtZero: true,
              }
            }
          },
          responsive: true,
          maintainAspectRatio: false,
    });
  
      // Chart 3 - Employment by Sector
        const EmploymentSectorctx = document.getElementById('employment-by-sector').getContext('2d');
        const EmploymentSectordata = {
        labels: employment_by_sectorData.map(elem => elem.year),
        datasets: [
            {
            label: 'Employment in services',
            data: employment_by_sectorData.map(elem => elem.services),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
            label: 'Employment in industry',
            data: employment_by_sectorData.map(elem => elem.industry),
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            },
            {
            label: 'Employment in agriculture',
            data: employment_by_sectorData.map(elem => elem.agriculture),
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
            max: 100,
            ticks: {
                stepSize: 20,
            },
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        };

        const myChart = new Chart(EmploymentSectorctx, {
        type: 'bar',
        data: EmploymentSectordata,
        options: options,
        });
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  getData();