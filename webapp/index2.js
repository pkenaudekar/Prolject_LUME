var app = angular.module('Lume',[]);

//Script for fig "Year Wise Annual Rainfall of The State"
app.controller('fig1', function($scope){


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

    /*$scope.areaChartData = {
      labels: ["Sindhudurg", "Ratnagiri", "Raigad", "Thane", "Suburban Mumbai"],
      datasets: [
        {
          label: "",
          fillColor: "rgba(48, 170, 3, 1)",
          strokeColor: "rgba(210, 214, 222, 1)",
          pointColor: "rgba(210, 214, 222, 1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [3121.1, 3034.5, 2957.5, 2472.3, 2330.5]
        }
      ]
    };
	
	var areaChartData2 = {
      labels: ["Beed", "Jalna", "Ahmednagar", "Sholapur", "Nanded"],
      datasets: [
        {
          label: "",
          fillColor: "rgba(136, 22, 208, 1)",
          strokeColor: "rgba(210, 214, 222, 1)",
          pointColor: "rgba(210, 214, 222, 1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [457.4, 489.4, 500.5, 547, 554.9]
        }
      ]
    };

    var areaChartOptions = {
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
    var lineChartOptions = areaChartOptions;
    lineChartOptions.datasetFill = false;
    //lineChart.Line(areaChartData, lineChartOptions);

   
    //Create pie or douhnut chart
    // You can switch between pie and douhnut using the method below.
    //pieChart.Doughnut(PieData, pieOptions);

    //-------------
    //- Top 5 Districts with Annual Rainfall Chart -
    //-------------
    var barChartCanvas = $("#barChart").get(0).getContext("2d");
    var barChart = new Chart(barChartCanvas);
    var barChartData = areaChartData;
    //barChartData.datasets[1].fillColor = "#00a65a";
    //barChartData.datasets[1].strokeColor = "#00a65a";
    //barChartData.datasets[1].pointColor = "#00a65a";
    var barChartOptions = {
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

    barChartOptions.datasetFill = false;
    barChart.Bar(barChartData, barChartOptions);
	  
	 //-------------
    //- Bottom 5 Districts with Annual Rainfall Chart -
    //-------------
    // Get context with jQuery - using jQuery's .get() method.
    var barChartCanvas2 = $("#barChart2").get(0).getContext("2d");
    var barChart2 = new Chart(barChartCanvas2);
    var barChartData2 = areaChartData2;
    //barChartData2.datasets[1].fillColor = "#00a65a";
    //barChartData2.datasets[1].strokeColor = "#00a65a";
    //barChartData2.datasets[1].pointColor = "#00a65a";
    var barChartOptions2 = {
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

    barChartOptions2.datasetFill = false;
    barChart2.Bar(barChartData2, barChartOptions2);
	  
	/*
     * Year Wise Annual Distribution of The State Chart
     * ---------
     */

    /*var bar_data = {
      data: [["2010", 1354.65], ["2011", 1308.48], ["2012", 1015.91], ["2013", 1372.35], ["2014", 1039.24]],
      color: "#3c8dbc"
    };
    $.plot("#bar-chart", [bar_data], {
      grid: {
        borderWidth: 1,
        borderColor: "#f3f3f3",
        tickColor: "#f3f3f3"
      },
      series: {
        bars: {
          show: true,
          barWidth: 0.6,
          align: "center"
        }
      },
      xaxis: {
        mode: "categories",
        tickLength: 0
      }
    });*/
    /* END BAR CHART /  
  });*/
	
	// LINE CHART
    $scope.line = new Morris.Line({
      element: 'line-chart',
      resize: true,
      data: [
        {y: '2010', rain: 1354.65},
        {y: '2011', rain: 1308.48},
        {y: '2012', rain: 1015.91},
        {y: '2013', rain: 1372.35},
        {y: '2014', rain: 1039.24}
      ],
      xkey: 'y',
      ykeys: ['rain'],
      labels: ['Rainfall (mm)'],
      lineColors: ['#3c8dbc'],
      hideHover: 'auto'
    });
});

//Script for fig "5 Districts with Highest Annual Rainfall in mm"
app.controller('fig2', function($scope){
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

    $scope.areaChartData = {
      labels: ["Sindhudurg", "Ratnagiri", "Raigad", "Thane", "Suburban Mumbai"],
      datasets: [
        {
          label: "",
          fillColor: "rgba(48, 170, 3, 1)",
          strokeColor: "rgba(210, 214, 222, 1)",
          pointColor: "rgba(210, 214, 222, 1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [3121.1, 3034.5, 2957.5, 2472.3, 2330.5]
        }
      ]
    };
	
	/*var areaChartData2 = {
      labels: ["Beed", "Jalna", "Ahmednagar", "Sholapur", "Nanded"],
      datasets: [
        {
          label: "",
          fillColor: "rgba(136, 22, 208, 1)",
          strokeColor: "rgba(210, 214, 222, 1)",
          pointColor: "rgba(210, 214, 222, 1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [457.4, 489.4, 500.5, 547, 554.9]
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
    //- Top 5 Districts with Annual Rainfall Chart -
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
    //- Bottom 5 Districts with Annual Rainfall Chart -
    //-------------
    // Get context with jQuery - using jQuery's .get() method.
    //var barChartCanvas2 = $("#barChart2").get(0).getContext("2d");
    //var barChart2 = new Chart(barChartCanvas2);
    //var barChartData2 = areaChartData2;
    //barChartData2.datasets[1].fillColor = "#00a65a";
    //barChartData2.datasets[1].strokeColor = "#00a65a";
    //barChartData2.datasets[1].pointColor = "#00a65a";
    /*var barChartOptions2 = {
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
    };*/

    //barChartOptions2.datasetFill = false;
    //barChart2.Bar(barChartData2, barChartOptions2);
	  
	/*
     * Year Wise Annual Distribution of The State Chart
     * ---------
     */

    /*var bar_data = {
      data: [["2010", 1354.65], ["2011", 1308.48], ["2012", 1015.91], ["2013", 1372.35], ["2014", 1039.24]],
      color: "#3c8dbc"
    };
    $.plot("#bar-chart", [bar_data], {
      grid: {
        borderWidth: 1,
        borderColor: "#f3f3f3",
        tickColor: "#f3f3f3"
      },
      series: {
        bars: {
          show: true,
          barWidth: 0.6,
          align: "center"
        }
      },
      xaxis: {
        mode: "categories",
        tickLength: 0
      }
    });*/
    /* END BAR CHART  
  }); */
	
	// LINE CHART
    /*var line = new Morris.Line({
      element: 'line-chart',
      resize: true,
      data: [
        {y: '2010', rain: 1354.65},
        {y: '2011', rain: 1308.48},
        {y: '2012', rain: 1015.91},
        {y: '2013', rain: 1372.35},
        {y: '2014', rain: 1039.24}
      ],
      xkey: 'y',
      ykeys: ['rain'],
      labels: ['Rainfall (mm)'],
      lineColors: ['#3c8dbc'],
      hideHover: 'auto'
    });*/
});

//Script for fig "5 Districts with Lowest Annual Rainfall in mm"
app.controller('fig3', function($scope){
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

    /*$scope.areaChartData = {
      labels: ["Sindhudurg", "Ratnagiri", "Raigad", "Thane", "Suburban Mumbai"],
      datasets: [
        {
          label: "",
          fillColor: "rgba(48, 170, 3, 1)",
          strokeColor: "rgba(210, 214, 222, 1)",
          pointColor: "rgba(210, 214, 222, 1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [3121.1, 3034.5, 2957.5, 2472.3, 2330.5]
        }
      ]
    };*/
	
	$scope.areaChartData2 = {
      labels: ["Beed", "Jalna", "Ahmednagar", "Sholapur", "Nanded"],
      datasets: [
        {
          label: "",
          fillColor: "rgba(136, 22, 208, 1)",
          strokeColor: "rgba(210, 214, 222, 1)",
          pointColor: "rgba(210, 214, 222, 1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [457.4, 489.4, 500.5, 547, 554.9]
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
    //$scope.lineChartOptions = $scope.areaChartOptions;
    //$scope.lineChartOptions.datasetFill = false;
    //lineChart.Line(areaChartData, lineChartOptions);

   
    //Create pie or douhnut chart
    // You can switch between pie and douhnut using the method below.
    //pieChart.Doughnut(PieData, pieOptions);

    //-------------
    //- Top 5 Districts with Annual Rainfall Chart -
    //-------------
    //$scope.barChartCanvas = $("#barChart").get(0).getContext("2d");
    //$scope.barChart = new Chart($scope.barChartCanvas);
    //$scope.barChartData = $scope.areaChartData;
    //barChartData.datasets[1].fillColor = "#00a65a";
    //barChartData.datasets[1].strokeColor = "#00a65a";
    //barChartData.datasets[1].pointColor = "#00a65a";
    /*$scope.barChartOptions = {
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
    };*/

    //$scope.barChartOptions.datasetFill = false;
    //$scope.barChart.Bar($scope.barChartData, $scope.barChartOptions);
	  
	 //-------------
    //- Bottom 5 Districts with Annual Rainfall Chart -
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
	  
	/*
     * Year Wise Annual Distribution of The State Chart
     * ---------
     */

    /*var bar_data = {
      data: [["2010", 1354.65], ["2011", 1308.48], ["2012", 1015.91], ["2013", 1372.35], ["2014", 1039.24]],
      color: "#3c8dbc"
    };
    $.plot("#bar-chart", [bar_data], {
      grid: {
        borderWidth: 1,
        borderColor: "#f3f3f3",
        tickColor: "#f3f3f3"
      },
      series: {
        bars: {
          show: true,
          barWidth: 0.6,
          align: "center"
        }
      },
      xaxis: {
        mode: "categories",
        tickLength: 0
      }
    });*/
    /* END BAR CHART  
  }); */
	
	// LINE CHART
    /*var line = new Morris.Line({
      element: 'line-chart',
      resize: true,
      data: [
        {y: '2010', rain: 1354.65},
        {y: '2011', rain: 1308.48},
        {y: '2012', rain: 1015.91},
        {y: '2013', rain: 1372.35},
        {y: '2014', rain: 1039.24}
      ],
      xkey: 'y',
      ykeys: ['rain'],
      labels: ['Rainfall (mm)'],
      lineColors: ['#3c8dbc'],
      hideHover: 'auto'
    });*/
});
