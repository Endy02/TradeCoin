new Chart(document.getElementById("myChart"), {
    type: 'bar',
    data: {
        labels: ["17/02","25/02","18/02","19/02","20/02","21/02","22/02","23/02","24/02","25/02"],
        datasets: [
            {
                label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                data: [117,89,43,82,182,12,31,43,63,36]
            }
        ]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        legend: { display: false }
    }
});