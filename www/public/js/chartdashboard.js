new Chart(document.getElementById("myChart"), {
    type: 'bar',
    data: {
        labels: ["17/02","25/02","18/02","19/02","20/02","21/02","22/02","23/02","24/02","25/02"],
        datasets: [
            {
                label: "Visites",
                backgroundColor: ["#88C9DE","#88C9DE","#88C9DE","#88C9DE","#88C9DE","#88C9DE","#88C9DE","#88C9DE","#88C9DE","#88C9DE"],
                data: [117,89,43,82,182,12,31,43,63,36]
            },
            {
                label: "Abonnés",
                backgroundColor: ["#7BEE94","#7BEE94","#7BEE94","#7BEE94","#7BEE94","#7BEE94","#7BEE94","#7BEE94","#7BEE94","#7BEE94"],
                data: [34,54,23,6,8,43,2,34,95,23]
            }
        ]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        legend: { display: false }
    }
});