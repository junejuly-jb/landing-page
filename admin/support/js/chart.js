window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "Commission"              
		},
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: [
                    { label: "Jan", y: 50 },
                    { label: "Feb", y: 55 },
                    { label: "Mar", y: 70 },
                    { label: "Apr", y: 80 },
                    { label: "May", y: 100 },
                    { label: "Jun", y: 120 },
                    { label: "Jul", y: 110 },
                    { label: "Aug", y: 105 },
                    { label: "Sept", y: 180 },
                    { label: "Oct", y: 200 },
                    { label: "Nov", y: 205 },
                    { label: "Dec", y: 250 }
			]
		}
		]
	});
	chart.render();
}