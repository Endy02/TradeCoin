new Chart(document.getElementById("myChart"), {
    type: 'bar',
    data: {
        labels: ["17 Fev.","25 Fev.","18 Fev.","19 Fev.","20 Fev.","21 Fev.","22 Fev.","23 Fev.","24 Fev.","25 Fev."],
        datasets: [
            {
                label: "Visites",
                backgroundColor: ["#88C9DE","#88C9DE","#88C9DE","#88C9DE","#88C9DE","#88C9DE","#88C9DE","#88C9DE","#88C9DE","#88C9DE"],
                data: [6,15,13,15,7,12,19,20,15,20]
            },
            {
                label: "Abonnés",
                backgroundColor: ["#7BEE94","#7BEE94","#7BEE94","#7BEE94","#7BEE94","#7BEE94","#7BEE94","#7BEE94","#7BEE94","#7BEE94"],
                data: [3,6,3,10,8,4,6,17,8,15]
            }
        ]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        legend: { display: false }
    }
});