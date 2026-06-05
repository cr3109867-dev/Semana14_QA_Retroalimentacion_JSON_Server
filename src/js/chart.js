import Chart from "chart.js/auto";

let chartInstance = null;

export function renderInterestChart(visitors) {
    const canvas = document.getElementById("interestChart");
    // Si no encuentra el elemento, se sale silenciosamente en lugar de lanzar error
    if (!canvas) return;

    const counts = visitors.reduce((acc, visitor) => {
        acc[visitor.interes] = (acc[visitor.interes] || 0) + 1;
        return acc;
    }, {});

    const labels = Object.keys(counts);
    const data = Object.values(counts);

    if (chartInstance) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(canvas, {
        type: "bar",
        data: {
            labels,
            datasets: [{
                label: "Visitantes por interes",
                data
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        precision: 0
                    }
                }
            }
        }
    });
}