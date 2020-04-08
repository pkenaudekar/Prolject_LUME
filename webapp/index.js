var app = angular.module('Lume',[]);

//Script for fig "State Wise Annual Rainfall For Past Years"
app.controller('fig1', function($scope){
	$scope.data = [
        {
            "hc-key": "in-an",//Andaman & Nicobar
            "value": 3266.4
        },
        {
            "hc-key": "in-wb",//West Bengal
            "value": 1458.83
        },
        {
            "hc-key": "in-ld",//Lakshadweep
            "value": 1395.0
        },
        {
            "hc-key": "in-5390",
            "value": 3
        },
        {
            "hc-key": "in-py",//Pondicherry
            "value": 1333.5
        },
        {
            "hc-key": "in-3464",//Daman & Diu
            "value": 1077.0
        },
        {
            "hc-key": "in-mz",//Mizoram
            "value": 1919.7
        },
        {
            "hc-key": "in-as",//Assam
            "value": 2106.03
        },
        {
            "hc-key": "in-pb",//Punjab
            "value": 401.35
        },
        {
            "hc-key": "in-ga",//Goa
            "value": 3489.45
        },
        {
            "hc-key": "in-2984",//Gujrat
            "value": 773.48
        },
        {
            "hc-key": "in-jk",//Jammu & Kashmir
            "value": 1136.46
        },
        {
            "hc-key": "in-hr",//Haryana
            "value": 333.85
        },
        {
            "hc-key": "in-nl",//Nagaland
            "value": 1003.3
        },
        {
            "hc-key": "in-mn",//Manipur
            "value": 1448.85
        },
        {
            "hc-key": "in-tr",//Tripura
            "value": 2015.38
        },
        {
            "hc-key": "in-mp",//Madhya Pradesh
            "value": 888.91
        },
        {
            "hc-key": "in-ct",//Chhattisgarh
            "value": 1306.92
        },
        {
            "hc-key": "in-ar",//Arunachal Pradesh
            "value": 2518.48
        },
        {
            "hc-key": "in-ml",//Meghalayah
            "value": 3407.5
        },
        {
            "hc-key": "in-kl",//Kerala
            "value": 3028.23
        },
        {
            "hc-key": "in-tn",//Tamil Nadu
            "value": 942.25
        },
        {
            "hc-key": "in-ap",//Andhra Pradesh
            "value": 744.19
        },
        {
            "hc-key": "in-ka",//Karnataka
            "value": 1252.80
        },
        {
            "hc-key": "in-mh",//Maharashtra
            "value": 1102.22
        },
        {
            "hc-key": "in-or",//Orissa
            "value": 1539.93
        },
        {
            "hc-key": "in-dn", //Dadra & Nagar Haveli
            "value": null
        },
        {
            "hc-key": "in-dl",//Delhi
            "value": 477.0
        },
        {
            "hc-key": "in-hp",//Himachal Pradesh
            "value": 1149.88
        },
        {
            "hc-key": "in-rj",//Rajasthan
            "value": 580.55
        },
        {
            "hc-key": "in-up",//Uttar Pradesh
            "value": 589.54
        },
        {
            "hc-key": "in-ut",//Uttarakhand
            "value": 1289.37
        },
        {
            "hc-key": "in-jh",//Jharkhand
            "value": 1132.4
        },
        {
            "hc-key": "in-ch",//Chandigarh
            "value": null
        },
        {
            "hc-key": "in-br",//Bihar
            "value": 1080.41
        },
        {
            "hc-key": "in-sk",//Sikkim
            "value": 2546.36
        }
    ];

    // Initiate the chart
    $('#container').highcharts('Map', {

        title : {
            text : ''
        },

        subtitle : {
            text : ''
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series : [{
            data : $scope.data,
            mapData: Highcharts.maps['countries/in/custom/in-all-disputed'],
            joinBy: 'hc-key',
            name: 'Random data',
            states: {
                hover: {
                    color: '#a4edba'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });

});


//Script for fig "5 States with Highest Annual Rainfall in mm"
app.controller('fig2', function($scope) {
      /* ChartJS
     * -------
     * Here we will create a few charts using ChartJS
     */

    //--------------
    //- AREA CHART -
    //--------------

    // Get context with jQuery - using jQuery's .get() method.
    //var areaChartCanvas = $("#areaChart").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    //var areaChart = new Chart(areaChartCanvas);

    $scope.areaChartData= {
    	
     labels: ["Kerala", "Goa", "Andaman and Nicobar Islands", "Meghalaya", "Assam"],
     //labels: $scope.State,
      datasets: [
        {
          label: "Highest Rain",
          fillColor: "rgba(13, 161, 248, 1)",
          strokeColor: "rgba(210, 214, 222, 1)",
          pointColor: "rgba(210, 214, 222, 1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [3055, 3005, 2967, 2818, 2818]
          //data: $scope.avgRain
        }
      ]
    };//////////////////////////////////////////////////////////////////////////////////////////////////
	/*$scope.areaChartData2= {
      labels: ["Rajasthan", "Haryana", "Chandigarh", "Delhi", "Punjab"],
      datasets: [
        {
          label: "Lowest Rain",
          fillColor: "rgba(255, 82, 82, 1)",
          strokeColor: "rgba(210, 214, 222, 1)",
          pointColor: "rgba(210, 214, 222, 1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [494, 617, 617, 617, 649]
        }
      ]
    };*/
	
    $scope.areaChartOptions = {
      //Boolean - If we should show the scale at all
      showScale: true,
      //Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines: false,
      //String - Colour of the grid lines
      scaleGridLineColor: "rgba(0,0,0,.05)",
      //Number - Width of the grid lines
      scaleGridLineWidth: 1,
      //Boolean - Whether to show horizontal lines (except X axis)
      scaleShowHorizontalLines: true,
      //Boolean - Whether to show vertical lines (except Y axis)
      scaleShowVerticalLines: true,
      //Boolean - Whether the line is curved between points
      bezierCurve: true,
      //Number - Tension of the bezier curve between points
      bezierCurveTension: 0.3,
      //Boolean - Whether to show a dot for each point
      pointDot: false,
      //Number - Radius of each point dot in pixels
      pointDotRadius: 4,
      //Number - Pixel width of point dot stroke
      pointDotStrokeWidth: 1,
      //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
      pointHitDetectionRadius: 20,
      //Boolean - Whether to show a stroke for datasets
      datasetStroke: true,
      //Number - Pixel width of dataset stroke
      datasetStrokeWidth: 2,
      //Boolean - Whether to fill the dataset with a color
      datasetFill: true,
      //String - A legend template
      legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
      //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
      maintainAspectRatio: true,
      //Boolean - whether to make the chart responsive to window resizing
      responsive: true
    };

    //Create the line chart
    //areaChart.Line(areaChartData, areaChartOptions);

    //-------------
    //- LINE CHART -
    //--------------
    //var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
    //var lineChart = new Chart(lineChartCanvas);
    $scope.lineChartOptions = $scope.areaChartOptions;
    $scope.lineChartOptions.datasetFill = false;
    //lineChart.Line(areaChartData, lineChartOptions);

   
    //Create pie or douhnut chart
    // You can switch between pie and douhnut using the method below.
    //pieChart.Doughnut(PieData, pieOptions);

    //-------------
    //- BAR CHART -
    //-------------
    $scope.barChartCanvas = $("#barChart").get(0).getContext("2d");
    $scope.barChart = new Chart($scope.barChartCanvas);
    $scope.barChartData = $scope.areaChartData;
    //barChartData.datasets[1].fillColor = "#00a65a";
    //barChartData.datasets[1].strokeColor = "#00a65a";
    //barChartData.datasets[1].pointColor = "#00a65a";
    $scope.barChartOptions = {
      //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
      scaleBeginAtZero: true,
      //Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines: true,
      //String - Colour of the grid lines
      scaleGridLineColor: "rgba(0,0,0,.05)",
      //Number - Width of the grid lines
      scaleGridLineWidth: 1,
      //Boolean - Whether to show horizontal lines (except X axis)
      scaleShowHorizontalLines: true,
      //Boolean - Whether to show vertical lines (except Y axis)
      scaleShowVerticalLines: true,
      //Boolean - If there is a stroke on each bar
      barShowStroke: true,
      //Number - Pixel width of the bar stroke
      barStrokeWidth: 2,
      //Number - Spacing between each of the X value sets
      barValueSpacing: 5,
      //Number - Spacing between data sets within X values
      barDatasetSpacing: 1,
      //String - A legend template
      legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
      //Boolean - whether to make the chart responsive
      responsive: true,
      maintainAspectRatio: true
    };

    $scope.barChartOptions.datasetFill = false;
    $scope.barChart.Bar($scope.barChartData, $scope.barChartOptions);
	  
	 //-------------
    //- BAR CHART2 -
    //-------------
    // Get context with jQuery - using jQuery's .get() method.
    //$scope.barChartCanvas2 = $("#barChart2").get(0).getContext("2d");////////////////////////
    //$scope.barChart2 = new Chart($scope.barChartCanvas2);//////////////////////////
    //$scope.barChartData2 = $scope.areaChartData2;/////////////////////
    //barChartData2.datasets[1].fillColor = "#00a65a";
    //barChartData2.datasets[1].strokeColor = "#00a65a";
    //barChartData2.datasets[1].pointColor = "#00a65a";
 /*   $scope.barChartOptions2 = {//////////////////////////////////////////////////////////////////////////////
      //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
      scaleBeginAtZero: true,
      //Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines: true,
      //String - Colour of the grid lines
      scaleGridLineColor: "rgba(0,0,0,.05)",
      //Number - Width of the grid lines
      scaleGridLineWidth: 1,
      //Boolean - Whether to show horizontal lines (except X axis)
      scaleShowHorizontalLines: true,
      //Boolean - Whether to show vertical lines (except Y axis)
      scaleShowVerticalLines: true,
      //Boolean - If there is a stroke on each bar
      barShowStroke: true,
      //Number - Pixel width of the bar stroke
      barStrokeWidth: 2,
      //Number - Spacing between each of the X value sets
      barValueSpacing: 5,
      //Number - Spacing between data sets within X values
      barDatasetSpacing: 1,
      //String - A legend template
      legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
      //Boolean - whether to make the chart responsive
      responsive: true,
      maintainAspectRatio: true
    };

    $scope.barChartOptions2.datasetFill = false;
    $scope.barChart2.Bar($scope.barChartData2, $scope.barChartOptions2);*/

		  
  });


//Script for fig "5 States with Lowest Annual Rainfall in mm"
app.controller('fig3', function($scope) {
      /* ChartJS
     * -------
     * Here we will create a few charts using ChartJS
     */

    //--------------
    //- AREA CHART -
    //--------------

    // Get context with jQuery - using jQuery's .get() method.
    //var areaChartCanvas = $("#areaChart").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    //var areaChart = new Chart(areaChartCanvas);

    /*$scope.areaChartData= {
      labels: ["Kerala", "Goa", "Andaman and Nicobar Islands", "Meghalaya", "Assam"],
      datasets: [
        {
          label: "Highest Rain",
          fillColor: "rgba(13, 161, 248, 1)",
          strokeColor: "rgba(210, 214, 222, 1)",
          pointColor: "rgba(210, 214, 222, 1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [3055, 3005, 2967, 2818, 2818]
        }
      ]
    };*/
	$scope.areaChartData2= {
      labels: ["Rajasthan", "Haryana", "Chandigarh", "Delhi", "Punjab"],
      
      datasets: [
        {
          label: "Lowest Rain",
          fillColor: "rgba(255, 82, 82, 1)",
          strokeColor: "rgba(210, 214, 222, 1)",
          pointColor: "rgba(210, 214, 222, 1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [494, 617, 617, 617, 649]
          
        }
      ]
    };
	
    $scope.areaChartOptions2 = {
      //Boolean - If we should show the scale at all
      showScale: true,
      //Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines: false,
      //String - Colour of the grid lines
      scaleGridLineColor: "rgba(0,0,0,.05)",
      //Number - Width of the grid lines
      scaleGridLineWidth: 1,
      //Boolean - Whether to show horizontal lines (except X axis)
      scaleShowHorizontalLines: true,
      //Boolean - Whether to show vertical lines (except Y axis)
      scaleShowVerticalLines: true,
      //Boolean - Whether the line is curved between points
      bezierCurve: true,
      //Number - Tension of the bezier curve between points
      bezierCurveTension: 0.3,
      //Boolean - Whether to show a dot for each point
      pointDot: false,
      //Number - Radius of each point dot in pixels
      pointDotRadius: 4,
      //Number - Pixel width of point dot stroke
      pointDotStrokeWidth: 1,
      //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
      pointHitDetectionRadius: 20,
      //Boolean - Whether to show a stroke for datasets
      datasetStroke: true,
      //Number - Pixel width of dataset stroke
      datasetStrokeWidth: 2,
      //Boolean - Whether to fill the dataset with a color
      datasetFill: true,
      //String - A legend template
      legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
      //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
      maintainAspectRatio: true,
      //Boolean - whether to make the chart responsive to window resizing
      responsive: true
    };

    //Create the line chart
    //areaChart.Line(areaChartData, areaChartOptions);

    //-------------
    //- LINE CHART -
    //--------------
    //var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
    //var lineChart = new Chart(lineChartCanvas);
    $scope.lineChartOptions2 = $scope.areaChartOptions2;
    $scope.lineChartOptions2.datasetFill = false;
    //lineChart.Line(areaChartData, lineChartOptions);

   
    //Create pie or douhnut chart
    // You can switch between pie and douhnut using the method below.
    //pieChart.Doughnut(PieData, pieOptions);

    //-------------
    //- BAR CHART -
    //-------------
    /*$scope.barChartCanvas = $("#barChart").get(0).getContext("2d");//////////////////////////////////////////////
    $scope.barChart = new Chart($scope.barChartCanvas);
    $scope.barChartData = $scope.areaChartData;
    //barChartData.datasets[1].fillColor = "#00a65a";
    //barChartData.datasets[1].strokeColor = "#00a65a";
    //barChartData.datasets[1].pointColor = "#00a65a";
    $scope.barChartOptions = {
      //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
      scaleBeginAtZero: true,
      //Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines: true,
      //String - Colour of the grid lines
      scaleGridLineColor: "rgba(0,0,0,.05)",
      //Number - Width of the grid lines
      scaleGridLineWidth: 1,
      //Boolean - Whether to show horizontal lines (except X axis)
      scaleShowHorizontalLines: true,
      //Boolean - Whether to show vertical lines (except Y axis)
      scaleShowVerticalLines: true,
      //Boolean - If there is a stroke on each bar
      barShowStroke: true,
      //Number - Pixel width of the bar stroke
      barStrokeWidth: 2,
      //Number - Spacing between each of the X value sets
      barValueSpacing: 5,
      //Number - Spacing between data sets within X values
      barDatasetSpacing: 1,
      //String - A legend template
      legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
      //Boolean - whether to make the chart responsive
      responsive: true,
      maintainAspectRatio: true
    };

    $scope.barChartOptions.datasetFill = false;
    $scope.barChart.Bar($scope.barChartData, $scope.barChartOptions);*/
	  
	 //-------------
    //- BAR CHART2 -
    //-------------
    // Get context with jQuery - using jQuery's .get() method.
    $scope.barChartCanvas2 = $("#barChart2").get(0).getContext("2d");
    $scope.barChart2 = new Chart($scope.barChartCanvas2);
    $scope.barChartData2 = $scope.areaChartData2;
    //barChartData2.datasets[1].fillColor = "#00a65a";
    //barChartData2.datasets[1].strokeColor = "#00a65a";
    //barChartData2.datasets[1].pointColor = "#00a65a";
    $scope.barChartOptions2 = {
      //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
      scaleBeginAtZero: true,
      //Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines: true,
      //String - Colour of the grid lines
      scaleGridLineColor: "rgba(0,0,0,.05)",
      //Number - Width of the grid lines
      scaleGridLineWidth: 1,
      //Boolean - Whether to show horizontal lines (except X axis)
      scaleShowHorizontalLines: true,
      //Boolean - Whether to show vertical lines (except Y axis)
      scaleShowVerticalLines: true,
      //Boolean - If there is a stroke on each bar
      barShowStroke: true,
      //Number - Pixel width of the bar stroke
      barStrokeWidth: 2,
      //Number - Spacing between each of the X value sets
      barValueSpacing: 5,
      //Number - Spacing between data sets within X values
      barDatasetSpacing: 1,
      //String - A legend template
      legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
      //Boolean - whether to make the chart responsive
      responsive: true,
      maintainAspectRatio: true
    };

    $scope.barChartOptions2.datasetFill = false;
    $scope.barChart2.Bar($scope.barChartData2, $scope.barChartOptions2);

		  
  });

//Script for fig "Highest Month of Rainfall Across all States"
app.controller('fig4', function(){

	AmCharts.makeChart("chartdiv1",
				{
					"type": "serial",
					"categoryField": "category",
					"rotate": true,
					"angle": 30,
					"depth3D": 30,
					"sequencedAnimation": false,
					"startDuration": 0.3,
					"startEffect": "elastic",
					"accessibleTitle": "",
					"handDrawThickness": 0,
					"theme": "light",
					"categoryAxis": {
						"gridPosition": "start"
					},
					"trendLines": [],
					"graphs": [
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-1",
							"title": "Andaman and Nicobar Islands",
							"type": "column",
							"valueField": "Andaman and Nicobar Islands"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-2",
							"title": "Andhra Pradesh",
							"type": "column",
							"valueField": "Andhra Pradesh"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-3",
							"title": "Arunachal Pradesh",
							"type": "column",
							"valueField": "Arunachal Pradesh"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-4",
							"title": "Assam",
							"type": "column",
							"valueField": "Assam"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-5",
							"title": "Bihar",
							"type": "column",
							"valueField": "Bihar"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-6",
							"title": "Chandigarh",
							"type": "column",
							"valueField": "Chandigarh"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-7",
							"title": "Chhattisgarh",
							"type": "column",
							"valueField": "Chhattisgarh"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-8",
							"title": "Dadra and Nagar Haveli",
							"type": "column",
							"valueField": "Dadra and Nagar Haveli"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-9",
							"title": "Daman and Diu",
							"type": "column",
							"valueField": "Daman and Diu"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-10",
							"title": "Delhi",
							"type": "column",
							"valueField": "West Bengal"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-11",
							"title": "Goa",
							"type": "column",
							"valueField": "Goa"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-12",
							"title": "Gujarat",
							"type": "column",
							"valueField": "Gujarat"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-13",
							"title": "Haryana",
							"type": "column",
							"valueField": "Haryana"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-14",
							"title": "Himachal Pradesh",
							"type": "column",
							"valueField": "Himachal Pradesh"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-15",
							"title": "Jammu and Kashmir",
							"type": "column",
							"valueField": "Jammu and Kashmir"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-16",
							"title": "Jharkhand",
							"type": "column",
							"valueField": "Jharkhand"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-17",
							"title": "Karnataka",
							"type": "column",
							"valueField": "Karnataka"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-18",
							"title": "Kerala",
							"type": "column",
							"valueField": "Kerala"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-19",
							"title": "Lakshadweep",
							"type": "column",
							"valueField": "Lakshadweep"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-20",
							"title": "Madhya Pradesh",
							"type": "column",
							"valueField": "Madhya Pradesh"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-21",
							"title": "Maharashtra",
							"type": "column",
							"valueField": "Maharashtra"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-22",
							"title": "Manipur",
							"type": "column",
							"valueField": "Manipur"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-23",
							"title": "Meghalayah",
							"type": "column",
							"valueField": "Meghalayah"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-24",
							"title": "Mizoram",
							"type": "column",
							"valueField": "West Bengal"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-25",
							"title": "Nagaland",
							"type": "column",
							"valueField": "Nagaland"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-26",
							"title": "Orissa",
							"type": "column",
							"valueField": "Orissa"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-27",
							"title": "Pondicherry",
							"type": "column",
							"valueField": "Pondicherry"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-28",
							"title": "Punjab",
							"type": "column",
							"valueField": "Punjab"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-29",
							"title": "Rajasthan",
							"type": "column",
							"valueField": "Rajasthan"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-30",
							"title": "Sikkim",
							"type": "column",
							"valueField": "Sikkim"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-31",
							"title": "Tamil Nadu",
							"type": "column",
							"valueField": "Tamil Nadu"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-32",
							"title": "Telangana",
							"type": "column",
							"valueField": "Telangana"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-33",
							"title": "Tripura",
							"type": "column",
							"valueField": "Tripura"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-34",
							"title": "Uttar Pradesh",
							"type": "column",
							"valueField": "Uttar Pradesh"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-35",
							"title": "Uttarakhand",
							"type": "column",
							"valueField": "Uttarakhand"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-36",
							"title": "West Bengal",
							"type": "column",
							"valueField": "West Bengal"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "ValueAxis-1",
							"stackType": "regular",
							"title": ""
						}
					],
					"allLabels": [
						{
							"id": "Label-1"
						}
					],
					"balloon": {},
					"legend": {
						"enabled": true,
						"useGraphSettings": true
					},
					"titles": [
						{
							"id": "Title-1",
							"size": 15,
							"text": ""
						}
					],
					"dataProvider": [
						{
							"category": "January",
							"Andaman and Nicobar Islands": null,
							"Andhra Pradesh": null,
							"Arunachal Pradesh": null,
							"Assam": null,
							"Bihar": null,
							"Chandigarh": null,
							"Chhattisgarh": null,
							"Dadra and Nagar Haveli": null,
							"Daman and Diu": null,
							"Delhi": null,
							"Goa": null,
							"Gujarat": null,
							"Haryana": null,
							"Himachal Pradesh": null,
							"Jammu and Kashmir": null,
							"Jharkhand": null,
							"Karnataka": 0.24,
							"Kerala": null,
							"Lakshadweep": null,
							"Madhya Pradesh": null,
							"Maharashtra": null,
							"Manipur": null,
							"Meghalayah": null,
							"Mizoram": null,
							"Nagaland": null,
							"Orissa": null,
							"Pondicherry": null,
							"Punjab": null,
							"Rajasthan": null,
							"Sikkim": null,
							"Tamil Nadu": null,
							"Telangana": null,
							"Tripura": null,
							"Uttar Pradesh": null,
							"Uttarakhand": null,
							"West Bengal": null
						},
						{
							"category": "February",
							"Andaman and Nicobar Islands": null,
							"Andhra Pradesh": null,
							"Arunachal Pradesh": null,
							"Assam": null,
							"Bihar": null,
							"Chandigarh": null,
							"Chhattisgarh": null,
							"Dadra and Nagar Haveli": null,
							"Daman and Diu": null,
							"Delhi": null,
							"Goa": null,
							"Gujarat": null,
							"Haryana": null,
							"Himachal Pradesh": null,
							"Jammu and Kashmir": null,
							"Jharkhand": null,
							"Karnataka": null,
							"Kerala": null,
							"Lakshadweep": null,
							"Madhya Pradesh": null,
							"Maharashtra": null,
							"Manipur": null,
							"Meghalayah": null,
							"Mizoram": null,
							"Nagaland": null,
							"Orissa": null,
							"Pondicherry": null,
							"Punjab": null,
							"Rajasthan": null,
							"Sikkim": null,
							"Tamil Nadu": null,
							"Telangana": null,
							"Tripura": null,
							"Uttar Pradesh": null,
							"Uttarakhand": null,
							"West Bengal": null
						},
						{
							"category": "March",
							"Andaman and Nicobar Islands": null,
							"Andhra Pradesh": null,
							"Arunachal Pradesh": null,
							"Assam": null,
							"Bihar": null,
							"Chandigarh": null,
							"Chhattisgarh": null,
							"Dadra and Nagar Haveli": null,
							"Daman and Diu": null,
							"Delhi": null,
							"Goa": null,
							"Gujarat": null,
							"Haryana": null,
							"Himachal Pradesh": null,
							"Jammu and Kashmir": null,
							"Jharkhand": null,
							"Karnataka": null,
							"Kerala": null,
							"Lakshadweep": null,
							"Madhya Pradesh": null,
							"Maharashtra": null,
							"Manipur": null,
							"Meghalayah": null,
							"Mizoram": null,
							"Nagaland": null,
							"Orissa": null,
							"Pondicherry": null,
							"Punjab": null,
							"Rajasthan": null,
							"Sikkim": null,
							"Tamil Nadu": null,
							"Telangana": null,
							"Tripura": null,
							"Uttar Pradesh": null,
							"Uttarakhand": null,
							"West Bengal": null
						},
						{
							"category": "April",
							"Andaman and Nicobar Islands": null,
							"Andhra Pradesh": null,
							"Arunachal Pradesh": null,
							"Assam": null,
							"Bihar": null,
							"Chandigarh": null,
							"Chhattisgarh": null,
							"Dadra and Nagar Haveli": null,
							"Daman and Diu": null,
							"Delhi": null,
							"Goa": null,
							"Gujarat": null,
							"Haryana": null,
							"Himachal Pradesh": null,
							"Jammu and Kashmir": null,
							"Jharkhand": null,
							"Karnataka": null,
							"Kerala": null,
							"Lakshadweep": null,
							"Madhya Pradesh": null,
							"Maharashtra": null,
							"Manipur": null,
							"Meghalayah": null,
							"Mizoram": null,
							"Nagaland": null,
							"Orissa": null,
							"Pondicherry": null,
							"Punjab": null,
							"Rajasthan": null,
							"Sikkim": null,
							"Tamil Nadu": null,
							"Telangana": null,
							"Tripura": null,
							"Uttar Pradesh": null,
							"Uttarakhand": null,
							"West Bengal": null
						},
						{
							"category": "May",
							"Andaman and Nicobar Islands": null,
							"Andhra Pradesh": null,
							"Arunachal Pradesh": null,
							"Assam": null,
							"Bihar": null,
							"Chandigarh": null,
							"Chhattisgarh": null,
							"Dadra and Nagar Haveli": null,
							"Daman and Diu": null,
							"Delhi": null,
							"Goa": null,
							"Gujarat": null,
							"Haryana": null,
							"Himachal Pradesh": null,
							"Jammu and Kashmir": null,
							"Jharkhand": null,
							"Karnataka": null,
							"Kerala": null,
							"Lakshadweep": null,
							"Madhya Pradesh": null,
							"Maharashtra": null,
							"Manipur": null,
							"Meghalayah": null,
							"Mizoram": null,
							"Nagaland": null,
							"Orissa": null,
							"Pondicherry": null,
							"Punjab": null,
							"Rajasthan": null,
							"Sikkim": null,
							"Tamil Nadu": null,
							"Telangana": null,
							"Tripura": null,
							"Uttar Pradesh": null,
							"Uttarakhand": null,
							"West Bengal": null
						},
						{
							"category": "June",
							"Andaman and Nicobar Islands": null,
							"Andhra Pradesh": null,
							"Arunachal Pradesh": null,
							"Assam": null,
							"Bihar": null,
							"Chandigarh": null,
							"Chhattisgarh": null,
							"Dadra and Nagar Haveli": null,
							"Daman and Diu": null,
							"Delhi": null,
							"Goa": null,
							"Gujarat": null,
							"Haryana": null,
							"Himachal Pradesh": null,
							"Jammu and Kashmir": null,
							"Jharkhand": null,
							"Karnataka": null,
							"Kerala": null,
							"Lakshadweep": null,
							"Madhya Pradesh": null,
							"Maharashtra": null,
							"Manipur": null,
							"Meghalayah": null,
							"Mizoram": null,
							"Nagaland": null,
							"Orissa": null,
							"Pondicherry": null,
							"Punjab": null,
							"Rajasthan": null,
							"Sikkim": 579.8,
							"Tamil Nadu": null,
							"Telangana": null,
							"Tripura": 445.08,
							"Uttar Pradesh": null,
							"Uttarakhand": null,
							"West Bengal": null
						},
						{
							"category": "July",
							"Andaman and Nicobar Islands": 429.97,
							"Andhra Pradesh": null,
							"Arunachal Pradesh": null,
							"Assam": null,
							"Bihar": null,
							"Chandigarh": null,
							"Chhattisgarh": null,
							"Dadra and Nagar Haveli": null,
							"Daman and Diu": 788.8,
							"Delhi": 139,
							"Goa": 1190.3,
							"Gujarat": 328.75,
							"Haryana": 80.20,
							"Himachal Pradesh": 268.21,
							"Jammu and Kashmir": null,
							"Jharkhand": 325.80,
							"Karnataka": null,
							"Kerala": null,
							"Lakshadweep": null,
							"Madhya Pradesh": 308.73,
							"Maharashtra": 430.04,
							"Manipur": null,
							"Meghalayah": null,
							"Mizoram": null,
							"Nagaland": null,
							"Orissa": 502.6,
							"Pondicherry": null,
							"Punjab": null,
							"Rajasthan": null,
							"Sikkim": null,
							"Tamil Nadu": null,
							"Telangana": null,
							"Tripura": null,
							"Uttar Pradesh": 188.84,
							"Uttarakhand": null,
							"West Bengal": null
						},
						{
							"category": "August",
							"Andaman and Nicobar Islands": null,
							"Andhra Pradesh": null,
							"Arunachal Pradesh": 628.82,
							"Assam": 442.49,
							"Bihar": 303.63,
							"Chandigarh": 334.23,
							"Chhattisgarh": null,
							"Dadra and Nagar Haveli": null,
							"Daman and Diu": null,
							"Delhi": null,
							"Goa": null,
							"Gujarat": null,
							"Haryana": null,
							"Himachal Pradesh": null,
							"Jammu and Kashmir": null,
							"Jharkhand": null,
							"Karnataka": 316.19,
							"Kerala": 732.63,
							"Lakshadweep": 466.1,
							"Madhya Pradesh": null,
							"Maharashtra": null,
							"Manipur": 272.05,
							"Meghalayah": null,
							"Mizoram": null,
							"Nagaland": 374.7,
							"Orissa": null,
							"Pondicherry": null,
							"Punjab": null,
							"Rajasthan": 205.21,
							"Sikkim": null,
							"Tamil Nadu": null,
							"Telangana": 177.7,
							"Tripura": null,
							"Uttar Pradesh": null,
							"Uttarakhand": 258.28,
							"West Bengal": 355.34
						},
						{
							"category": "September",
							"Andaman and Nicobar Islands": null,
							"Andhra Pradesh": null,
							"Arunachal Pradesh": null,
							"Assam": null,
							"Bihar": null,
							"Chandigarh": null,
							"Chhattisgarh": null,
							"Dadra and Nagar Haveli": null,
							"Daman and Diu": null,
							"Delhi": null,
							"Goa": null,
							"Gujarat": null,
							"Haryana": null,
							"Himachal Pradesh": null,
							"Jammu and Kashmir": 331.32,
							"Jharkhand": null,
							"Karnataka": null,
							"Kerala": null,
							"Lakshadweep": null,
							"Madhya Pradesh": null,
							"Maharashtra": null,
							"Manipur": null,
							"Meghalayah": 802.08,
							"Mizoram": 532.55,
							"Nagaland": null,
							"Orissa": null,
							"Pondicherry": null,
							"Punjab": 106.42,
							"Rajasthan": null,
							"Sikkim": null,
							"Tamil Nadu": null,
							"Telangana": null,
							"Tripura": null,
							"Uttar Pradesh": null,
							"Uttarakhand": null,
							"West Bengal": null
						},
						{
							"category": "October",
							"Andaman and Nicobar Islands": null,
							"Andhra Pradesh": 148.57,
							"Arunachal Pradesh": null,
							"Assam": null,
							"Bihar": null,
							"Chandigarh": null,
							"Chhattisgarh": null,
							"Dadra and Nagar Haveli": null,
							"Daman and Diu": null,
							"Delhi": null,
							"Goa": null,
							"Gujarat": null,
							"Haryana": null,
							"Himachal Pradesh": null,
							"Jammu and Kashmir": null,
							"Jharkhand": null,
							"Karnataka": null,
							"Kerala": null,
							"Lakshadweep": null,
							"Madhya Pradesh": null,
							"Maharashtra": null,
							"Manipur": null,
							"Meghalayah": null,
							"Mizoram": null,
							"Nagaland": null,
							"Orissa": null,
							"Pondicherry": 406.35,
							"Punjab": null,
							"Rajasthan": null,
							"Sikkim": null,
							"Tamil Nadu": 253.88,
							"Telangana": null,
							"Tripura": null,
							"Uttar Pradesh": null,
							"Uttarakhand": null,
							"West Bengal": null
						},
						{
							"category": "November",
							"Andaman and Nicobar Islands": null,
							"Andhra Pradesh": null,
							"Arunachal Pradesh": null,
							"Assam": null,
							"Bihar": null,
							"Chandigarh": null,
							"Chhattisgarh": null,
							"Dadra and Nagar Haveli": null,
							"Daman and Diu": null,
							"Delhi": null,
							"Goa": null,
							"Gujarat": null,
							"Haryana": null,
							"Himachal Pradesh": null,
							"Jammu and Kashmir": null,
							"Jharkhand": null,
							"Karnataka": null,
							"Kerala": null,
							"Lakshadweep": null,
							"Madhya Pradesh": null,
							"Maharashtra": null,
							"Manipur": null,
							"Meghalayah": null,
							"Mizoram": null,
							"Nagaland": null,
							"Orissa": null,
							"Pondicherry": null,
							"Punjab": null,
							"Rajasthan": null,
							"Sikkim": null,
							"Tamil Nadu": null,
							"Telangana": null,
							"Tripura": null,
							"Uttar Pradesh": null,
							"Uttarakhand": null,
							"West Bengal": null
						},
						{
							"category": "December",
							"Andaman and Nicobar Islands": null,
							"Andhra Pradesh": null,
							"Arunachal Pradesh": null,
							"Assam": null,
							"Bihar": null,
							"Chandigarh": null,
							"Chhattisgarh": null,
							"Dadra and Nagar Haveli": null,
							"Daman and Diu": null,
							"Delhi": null,
							"Goa": null,
							"Gujarat": null,
							"Haryana": null,
							"Himachal Pradesh": null,
							"Jammu and Kashmir": null,
							"Jharkhand": null,
							"Karnataka": null,
							"Kerala": null,
							"Lakshadweep": null,
							"Madhya Pradesh": null,
							"Maharashtra": null,
							"Manipur": null,
							"Meghalayah": null,
							"Mizoram": null,
							"Nagaland": null,
							"Orissa": null,
							"Pondicherry": null,
							"Punjab": null,
							"Rajasthan": null,
							"Sikkim": null,
							"Tamil Nadu": null,
							"Telangana": null,
							"Tripura": null,
							"Uttar Pradesh": null,
							"Uttarakhand": null,
							"West Bengal": null
						}
					]
				}
			);
});

//Script for fig "Lowest Month of Rainfall Across all States"
app.controller('fig5', function(){

	AmCharts.makeChart("chartdiv2",
				{
					"type": "serial",
					"categoryField": "category",
					"rotate": true,
					"angle": 30,
					"depth3D": 30,
					"sequencedAnimation": false,
					"startDuration": 0.3,
					"startEffect": "elastic",
					"accessibleTitle": "",
					"handDrawThickness": 0,
					"theme": "light",
					"categoryAxis": {
						"gridPosition": "start"
					},
					"trendLines": [],
					"graphs": [
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-1",
							"title": "Andaman and Nicobar Islands",
							"type": "column",
							"valueField": "Andaman and Nicobar Islands"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-2",
							"title": "Andhra Pradesh",
							"type": "column",
							"valueField": "Andhra Pradesh"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-3",
							"title": "Arunachal Pradesh",
							"type": "column",
							"valueField": "Arunachal Pradesh"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-4",
							"title": "Assam",
							"type": "column",
							"valueField": "Assam"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-5",
							"title": "Bihar",
							"type": "column",
							"valueField": "Bihar"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-6",
							"title": "Chandigarh",
							"type": "column",
							"valueField": "Chandigarh"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-7",
							"title": "Chhattisgarh",
							"type": "column",
							"valueField": "Chhattisgarh"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-8",
							"title": "Dadra and Nagar Haveli",
							"type": "column",
							"valueField": "Dadra and Nagar Haveli"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-9",
							"title": "Daman and Diu",
							"type": "column",
							"valueField": "Daman and Diu"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-10",
							"title": "Delhi",
							"type": "column",
							"valueField": "West Bengal"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-11",
							"title": "Goa",
							"type": "column",
							"valueField": "Goa"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-12",
							"title": "Gujarat",
							"type": "column",
							"valueField": "Gujarat"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-13",
							"title": "Haryana",
							"type": "column",
							"valueField": "Haryana"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-14",
							"title": "Himachal Pradesh",
							"type": "column",
							"valueField": "Himachal Pradesh"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-15",
							"title": "Jammu and Kashmir",
							"type": "column",
							"valueField": "Jammu and Kashmir"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-16",
							"title": "Jharkhand",
							"type": "column",
							"valueField": "Jharkhand"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-17",
							"title": "Karnataka",
							"type": "column",
							"valueField": "Karnataka"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-18",
							"title": "Kerala",
							"type": "column",
							"valueField": "Kerala"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-19",
							"title": "Lakshadweep",
							"type": "column",
							"valueField": "Lakshadweep"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-20",
							"title": "Madhya Pradesh",
							"type": "column",
							"valueField": "Madhya Pradesh"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-21",
							"title": "Maharashtra",
							"type": "column",
							"valueField": "Maharashtra"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-22",
							"title": "Manipur",
							"type": "column",
							"valueField": "Manipur"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-23",
							"title": "Meghalayah",
							"type": "column",
							"valueField": "Meghalayah"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-24",
							"title": "Mizoram",
							"type": "column",
							"valueField": "West Bengal"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-25",
							"title": "Nagaland",
							"type": "column",
							"valueField": "Nagaland"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-26",
							"title": "Orissa",
							"type": "column",
							"valueField": "Orissa"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-27",
							"title": "Pondicherry",
							"type": "column",
							"valueField": "Pondicherry"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-28",
							"title": "Punjab",
							"type": "column",
							"valueField": "Punjab"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-29",
							"title": "Rajasthan",
							"type": "column",
							"valueField": "Rajasthan"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-30",
							"title": "Sikkim",
							"type": "column",
							"valueField": "Sikkim"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-31",
							"title": "Tamil Nadu",
							"type": "column",
							"valueField": "Tamil Nadu"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-32",
							"title": "Telangana",
							"type": "column",
							"valueField": "Telangana"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-33",
							"title": "Tripura",
							"type": "column",
							"valueField": "Tripura"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-34",
							"title": "Uttar Pradesh",
							"type": "column",
							"valueField": "Uttar Pradesh"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-35",
							"title": "Uttarakhand",
							"type": "column",
							"valueField": "Uttarakhand"
						},
						{
							"balloonText": "[[title]] in [[category]]:[[value]]mm",
							"fillAlphas": 1,
							"id": "AmGraph-36",
							"title": "West Bengal",
							"type": "column",
							"valueField": "West Bengal"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "ValueAxis-1",
							"stackType": "regular",
							"title": ""
						}
					],
					"allLabels": [
						{
							"id": "Label-1"
						}
					],
					"balloon": {},
					"legend": {
						"enabled": true,
						"useGraphSettings": true
					},
					"titles": [
						{
							"id": "Title-1",
							"size": 15,
							"text": ""
						}
					],
					"dataProvider": [
						{
							"category": "January",
							"Andaman and Nicobar Islands": null,
							"Andhra Pradesh": null,
							"Arunachal Pradesh": null,
							"Assam": null,
							"Bihar": null,
							"Chandigarh": null,
							"Chhattisgarh": null,
							"Dadra and Nagar Haveli": null,
							"Daman and Diu": null,
							"Delhi": 1,
							"Goa": null,
							"Gujarat": null,
							"Haryana": null,
							"Himachal Pradesh": null,
							"Jammu and Kashmir": null,
							"Jharkhand": null,
							"Karnataka": 0.24,
							"Kerala": 5.13,
							"Lakshadweep": null,
							"Madhya Pradesh": null,
							"Maharashtra": 1.75,
							"Manipur": null,
							"Meghalayah": null,
							"Mizoram": null,
							"Nagaland": null,
							"Orissa": 0.01,
							"Pondicherry": 3.7,
							"Punjab": null,
							"Rajasthan": null,
							"Sikkim": null,
							"Tamil Nadu": null,
							"Telangana": 0.06,
							"Tripura": null,
							"Uttar Pradesh": null,
							"Uttarakhand": null,
							"West Bengal": null
						},
						{
							"category": "February",
							"Andaman and Nicobar Islands": null,
							"Andhra Pradesh": 0.98,
							"Arunachal Pradesh": null,
							"Assam": null,
							"Bihar": null,
							"Chandigarh": null,
							"Chhattisgarh": null,
							"Dadra and Nagar Haveli": null,
							"Daman and Diu": null,
							"Delhi": null,
							"Goa": null,
							"Gujarat": 0.14,
							"Haryana": null,
							"Himachal Pradesh": null,
							"Jammu and Kashmir": null,
							"Jharkhand": null,
							"Karnataka": null,
							"Kerala": null,
							"Lakshadweep": null,
							"Madhya Pradesh": null,
							"Maharashtra": null,
							"Manipur": 15.61,
							"Meghalayah": null,
							"Mizoram": null,
							"Nagaland": null,
							"Orissa": null,
							"Pondicherry": null,
							"Punjab": null,
							"Rajasthan": null,
							"Sikkim": null,
							"Tamil Nadu": 6.64,
							"Telangana": null,
							"Tripura": null,
							"Uttar Pradesh": null,
							"Uttarakhand": null,
							"West Bengal": null
						},
						{
							"category": "March",
							"Andaman and Nicobar Islands": null,
							"Andhra Pradesh": null,
							"Arunachal Pradesh": null,
							"Assam": null,
							"Bihar": null,
							"Chandigarh": null,
							"Chhattisgarh": null,
							"Dadra and Nagar Haveli": null,
							"Daman and Diu": null,
							"Delhi": null,
							"Goa": null,
							"Gujarat": null,
							"Haryana": null,
							"Himachal Pradesh": null,
							"Jammu and Kashmir": null,
							"Jharkhand": null,
							"Karnataka": null,
							"Kerala": null,
							"Lakshadweep": 4.4,
							"Madhya Pradesh": null,
							"Maharashtra": null,
							"Manipur": null,
							"Meghalayah": null,
							"Mizoram": 18.6,
							"Nagaland": null,
							"Orissa": null,
							"Pondicherry": null,
							"Punjab": null,
							"Rajasthan": null,
							"Sikkim": null,
							"Tamil Nadu": null,
							"Telangana": null,
							"Tripura": null,
							"Uttar Pradesh": null,
							"Uttarakhand": null,
							"West Bengal": null
						},
						{
							"category": "April",
							"Andaman and Nicobar Islands": null,
							"Andhra Pradesh": null,
							"Arunachal Pradesh": null,
							"Assam": null,
							"Bihar": 0.63,
							"Chandigarh": null,
							"Chhattisgarh": null,
							"Dadra and Nagar Haveli": null,
							"Daman and Diu": null,
							"Delhi": null,
							"Goa": 2.35,
							"Gujarat": null,
							"Haryana": null,
							"Himachal Pradesh": null,
							"Jammu and Kashmir": null,
							"Jharkhand": null,
							"Karnataka": null,
							"Kerala": null,
							"Lakshadweep": null,
							"Madhya Pradesh": null,
							"Maharashtra": null,
							"Manipur": null,
							"Meghalayah": null,
							"Mizoram": null,
							"Nagaland": null,
							"Orissa": null,
							"Pondicherry": null,
							"Punjab": null,
							"Rajasthan": null,
							"Sikkim": null,
							"Tamil Nadu": null,
							"Telangana": null,
							"Tripura": null,
							"Uttar Pradesh": 3.06,
							"Uttarakhand": 30.26,
							"West Bengal": null
						},
						{
							"category": "May",
							"Andaman and Nicobar Islands": null,
							"Andhra Pradesh": null,
							"Arunachal Pradesh": null,
							"Assam": null,
							"Bihar": null,
							"Chandigarh": null,
							"Chhattisgarh": null,
							"Dadra and Nagar Haveli": null,
							"Daman and Diu": null,
							"Delhi": null,
							"Goa": null,
							"Gujarat": null,
							"Haryana": null,
							"Himachal Pradesh": null,
							"Jammu and Kashmir": null,
							"Jharkhand": null,
							"Karnataka": null,
							"Kerala": null,
							"Lakshadweep": null,
							"Madhya Pradesh": 1.86,
							"Maharashtra": null,
							"Manipur": null,
							"Meghalayah": null,
							"Mizoram": null,
							"Nagaland": null,
							"Orissa": null,
							"Pondicherry": null,
							"Punjab": null,
							"Rajasthan": null,
							"Sikkim": null,
							"Tamil Nadu": null,
							"Telangana": null,
							"Tripura": null,
							"Uttar Pradesh": null,
							"Uttarakhand": null,
							"West Bengal": null
						},
						{
							"category": "June",
							"Andaman and Nicobar Islands": null,
							"Andhra Pradesh": null,
							"Arunachal Pradesh": null,
							"Assam": null,
							"Bihar": null,
							"Chandigarh": null,
							"Chhattisgarh": null,
							"Dadra and Nagar Haveli": null,
							"Daman and Diu": null,
							"Delhi": null,
							"Goa": null,
							"Gujarat": null,
							"Haryana": null,
							"Himachal Pradesh": null,
							"Jammu and Kashmir": null,
							"Jharkhand": null,
							"Karnataka": null,
							"Kerala": null,
							"Lakshadweep": null,
							"Madhya Pradesh": null,
							"Maharashtra": null,
							"Manipur": null,
							"Meghalayah": null,
							"Mizoram": null,
							"Nagaland": null,
							"Orissa": null,
							"Pondicherry": null,
							"Punjab": null,
							"Rajasthan": null,
							"Sikkim": null,
							"Tamil Nadu": null,
							"Telangana": null,
							"Tripura": null,
							"Uttar Pradesh": null,
							"Uttarakhand": null,
							"West Bengal": null
						},
						{
							"category": "July",
							"Andaman and Nicobar Islands": null,
							"Andhra Pradesh": null,
							"Arunachal Pradesh": null,
							"Assam": null,
							"Bihar": null,
							"Chandigarh": null,
							"Chhattisgarh": null,
							"Dadra and Nagar Haveli": null,
							"Daman and Diu": null,
							"Delhi": null,
							"Goa": null,
							"Gujarat": null,
							"Haryana": null,
							"Himachal Pradesh": null,
							"Jammu and Kashmir": null,
							"Jharkhand": null,
							"Karnataka": null,
							"Kerala": null,
							"Lakshadweep": null,
							"Madhya Pradesh": null,
							"Maharashtra": null,
							"Manipur": null,
							"Meghalayah": null,
							"Mizoram": null,
							"Nagaland": null,
							"Orissa": null,
							"Pondicherry": null,
							"Punjab": null,
							"Rajasthan": null,
							"Sikkim": null,
							"Tamil Nadu": null,
							"Telangana": null,
							"Tripura": null,
							"Uttar Pradesh": null,
							"Uttarakhand": null,
							"West Bengal": null
						},
						{
							"category": "August",
							"Andaman and Nicobar Islands": null,
							"Andhra Pradesh": null,
							"Arunachal Pradesh": null,
							"Assam": null,
							"Bihar": null,
							"Chandigarh": null,
							"Chhattisgarh": null,
							"Dadra and Nagar Haveli": null,
							"Daman and Diu": null,
							"Delhi": null,
							"Goa": null,
							"Gujarat": null,
							"Haryana": null,
							"Himachal Pradesh": null,
							"Jammu and Kashmir": null,
							"Jharkhand": null,
							"Karnataka": null,
							"Kerala": null,
							"Lakshadweep": null,
							"Madhya Pradesh": null,
							"Maharashtra": null,
							"Manipur": null,
							"Meghalayah": null,
							"Mizoram": null,
							"Nagaland": null,
							"Orissa": null,
							"Pondicherry": null,
							"Punjab": null,
							"Rajasthan": null,
							"Sikkim": null,
							"Tamil Nadu": null,
							"Telangana": null,
							"Tripura": null,
							"Uttar Pradesh": null,
							"Uttarakhand": null,
							"West Bengal": null
						},
						{
							"category": "September",
							"Andaman and Nicobar Islands": null,
							"Andhra Pradesh": null,
							"Arunachal Pradesh": null,
							"Assam": null,
							"Bihar": null,
							"Chandigarh": null,
							"Chhattisgarh": null,
							"Dadra and Nagar Haveli": null,
							"Daman and Diu": null,
							"Delhi": null,
							"Goa": null,
							"Gujarat": null,
							"Haryana": null,
							"Himachal Pradesh": null,
							"Jammu and Kashmir": null,
							"Jharkhand": null,
							"Karnataka": null,
							"Kerala": null,
							"Lakshadweep": null,
							"Madhya Pradesh": null,
							"Maharashtra": null,
							"Manipur": null,
							"Meghalayah": null,
							"Mizoram": null,
							"Nagaland": null,
							"Orissa": null,
							"Pondicherry": null,
							"Punjab": null,
							"Rajasthan": null,
							"Sikkim": null,
							"Tamil Nadu": null,
							"Telangana": null,
							"Tripura": null,
							"Uttar Pradesh": null,
							"Uttarakhand": null,
							"West Bengal": null
						},
						{
							"category": "October",
							"Andaman and Nicobar Islands": null,
							"Andhra Pradesh": null,
							"Arunachal Pradesh": null,
							"Assam": null,
							"Bihar": null,
							"Chandigarh": null,
							"Chhattisgarh": null,
							"Dadra and Nagar Haveli": null,
							"Daman and Diu": 1,
							"Delhi": null,
							"Goa": null,
							"Gujarat": null,
							"Haryana": null,
							"Himachal Pradesh": null,
							"Jammu and Kashmir": null,
							"Jharkhand": null,
							"Karnataka": null,
							"Kerala": null,
							"Lakshadweep": null,
							"Madhya Pradesh": null,
							"Maharashtra": null,
							"Manipur": null,
							"Meghalayah": null,
							"Mizoram": null,
							"Nagaland": null,
							"Orissa": null,
							"Pondicherry": null,
							"Punjab": null,
							"Rajasthan": null,
							"Sikkim": null,
							"Tamil Nadu": null,
							"Telangana": null,
							"Tripura": null,
							"Uttar Pradesh": null,
							"Uttarakhand": null,
							"West Bengal": null
						},
						{
							"category": "November",
							"Andaman and Nicobar Islands": null,
							"Andhra Pradesh": null,
							"Arunachal Pradesh": null,
							"Assam": null,
							"Bihar": null,
							"Chandigarh": null,
							"Chhattisgarh": null,
							"Dadra and Nagar Haveli": null,
							"Daman and Diu": null,
							"Delhi": null,
							"Goa": null,
							"Gujarat": null,
							"Haryana": 0.14,
							"Himachal Pradesh": 2.45,
							"Jammu and Kashmir": null,
							"Jharkhand": null,
							"Karnataka": null,
							"Kerala": null,
							"Lakshadweep": null,
							"Madhya Pradesh": null,
							"Maharashtra": null,
							"Manipur": null,
							"Meghalayah": null,
							"Mizoram": null,
							"Nagaland": null,
							"Orissa": null,
							"Pondicherry": null,
							"Punjab": 0.57,
							"Rajasthan": 0.12,
							"Sikkim": null,
							"Tamil Nadu": null,
							"Telangana": null,
							"Tripura": null,
							"Uttar Pradesh": null,
							"Uttarakhand": null,
							"West Bengal": null
						},
						{
							"category": "December",
							"Andaman and Nicobar Islands": null,
							"Andhra Pradesh": null,
							"Arunachal Pradesh": 8.61,
							"Assam": 0.46,
							"Bihar": null,
							"Chandigarh": 0.85,
							"Chhattisgarh": null,
							"Dadra and Nagar Haveli": null,
							"Daman and Diu": null,
							"Delhi": null,
							"Goa": null,
							"Gujarat": null,
							"Haryana": null,
							"Himachal Pradesh": null,
							"Jammu and Kashmir": 1.51,
							"Jharkhand": 0.92,
							"Karnataka": null,
							"Kerala": null,
							"Lakshadweep": null,
							"Madhya Pradesh": null,
							"Maharashtra": null,
							"Manipur": null,
							"Meghalayah": 0.6,
							"Mizoram": null,
							"Nagaland": 0.6,
							"Orissa": null,
							"Pondicherry": null,
							"Punjab": null,
							"Rajasthan": null,
							"Sikkim": 8.28,
							"Tamil Nadu": null,
							"Telangana": null,
							"Tripura": 0.03,
							"Uttar Pradesh": null,
							"Uttarakhand": null,
							"West Bengal": 0.39
						}
					]
				}
			);
});


