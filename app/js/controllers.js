'use strict';

/* Controllers */

function HomeCtrl($scope){
  console.log($scope)
  $scope.boxes = [
  {icon:'money',header:'Cost', alert:'ok-sign', text:'Projected month end total cost below target (£1347 M versus target of £1560 M)'},
  {icon:'warning-sign',header:'Control', alert:'ok-sign', text:'3 HRI actions due in Q4 2012, all mitigating actions on track and all audit actions are green'},
  {icon:'group',header:'Customer', alert:'ok-sign', text:'26 new complaints in August down 4% from last month'},
  {icon:'user',header:'Colleagues', alert:'ok-sign', text:'Colleague satisfaction up 5% to 75%'},
  {icon:'exchange',header:'Transform Initiatives', alert:'exclamation-sign', text:'2/5 regulatory projects and 3/3 integration projects are amber'},
  {icon:'bar-chart',header:'Benchmarks', alert:'exclamation-sign', text:'Compare CB Bank to benchmarks based on a sample of 16 European banks'}
  ];

  $scope.randt = [
    {picture: 'url(img/intro.jpg)' , date:'November 2012', text:'Immersion school students exhibit preternatural productivity.'},
    {picture: 'url(img/bank.png)' , date:'October 2012', text:'The triple transformation - Achieving a sustainable business model'},
    {picture: 'url(img/city.png)', date:'October 2012', text:'Multichannel transformation - 10 steps towards customer experience and economic leadership'},
    {picture: 'url(img/thinker.png)', date:'October 2012', text:'Using lean in wholesale financial services boosts productivity'}
  ]

  $scope.documents = [
    {title: 'Published Reports'},{title: 'Benchmark Findings'},{title: 'CB Bank News'},{title: 'March reports'},{title: 'More docs'},{title: 'Even more docs'}
  ]
}

// HomeCtrl.$inject = [];

function OperationsCtrl() {
}
// OperationsCtrl.$inject = [];

function HeadCountCtrl($scope) {
  $scope.numTypeProp = "typePerc";
  $scope.headerarray = [{title: "Actual", subTitle: "Current", value: "18,220", icon: "icon-arrow-down", delta: "112 from prior week"},
                   {title: "Projection", subTitle: "End September 2012", value: "18,404", icon: "icon-ok", delta: "411 below target"},
                   {title: "Projection", subTitle: "End December 2012", value: "16,887", icon: "icon-ok", delta: "453 below target"}];
  $scope.heatMapHead = ["Asia Minor", "SuperCard", "Western", "Africa", "Banking", "Corporate", "Wealth", "Head"];
  var heatMapRaw = [[{value: -122, sub: "to 3,447"}, {value: 20, sub: "to 1,033"}, {value: -45, sub: "to 2,044"}, {value: 17, sub: "to 1,076"}, {value: -20, sub: "to 1,012"}, {value: 23, sub: "to 1,950"}, {value: -12, sub: "to 730"}, {value: -5, sub: "to 197"}],
                    [{value: -112, sub: "to 221"}, {value: -28, sub: "to 66"}, {value: 24, sub: "to 131"}, {value: -20, sub: "to 69"}, {value: -35, sub: "to 65"}, {value: 25, sub: "to 125"}, {value: -24, sub: "to 47"}, {value: 0, sub: "to 13"}],
                    [{value: -45, sub: "to 114"}, {value: 10, sub: "to 34"}, {value: -12, sub: "to 68"}, {value: -20, sub: "to 36"}, {value: -16, sub: "to 33"}, {value: -54, sub: "to 65"}, {value: 14, sub: "to 24"}, {value: 65, sub: "to 7"}],
                    [{value: -30, sub: "to 536"}, {value: -32, sub: "to 161"}, {value: 24, sub: "to 318"}, {value: -20, sub: "to 167"}, {value: -2, sub: "to 158"}, {value: -50, sub: "to 304"}, {value: 17, sub: "to 114"}, {value: 55, sub: "to 31"}],
                    [{value: -5, sub: "to 45"}, {value: 5, sub: "to 14"}, {value: 3, sub: "to 27"}, {value: 0, sub: "to 14"}, {value: 0, sub: "to 13"}, {value: -2, sub: "to 26"}, {value: 0, sub: "to 10"}, {value: -1, sub: "to 3"}],
                    [{value: 15, sub: "to 296"}, {value: -12, sub: "to 89"}, {value: 3, sub: "to 75"}, {value: 1, sub: "to 92"}, {value: -2, sub: "to 87"}, {value: -10, sub: "to 167"}, {value: 0, sub: "to 63"}, {value: 5, sub: "to 17"}],
                    [{value: 0, sub: "to 0"}, {value: 0, sub: "to 0"}, {value: 0, sub: "to 0"}, {value: 0, sub: "to 0"}, {value: 0, sub: "to 0"}, {value: 0, sub: "to 0"}, {value: 0, sub: "to 0"}, {value: 0, sub: "to 1729"}],
                    [{value: 0, sub: "to 0"}, {value: 0, sub: "to 0"}, {value: 0, sub: "to 0"}, {value: 0, sub: "to 0"}, {value: 0, sub: "to 0"}, {value: 0, sub: "to 0"}, {value: 0, sub: "to 0"}, {value: 0, sub: "to 960"}],
                    [{value: -299, sub: "to 5,466"}, {value: -37, sub: "to 1,638"}, {value: -3, sub: "to 3,242"}, {value: -42, sub: "to 1,706"}, {value: -75, sub: "to 1,605"}, {value: -68, sub: "to 3,093"}, {value: -5, sub: "to 1,158"}, {value: 119, sub: "to 312"}]];
  var varCostAbsMon = {data: [-144, -170, -58, -38, 0, 0, 0, 0, -410], isPerc: false, barNegPos: {left: "bar positive", right: "bar negative"}};
  var varCostAbsYear = {data: [-171, -43, -79, -160, 0, 0, 0, 0, -453], isPerc: false, barNegPos: {left: "bar positive", right: "bar negative"}};
  var varHCProjMon = {data: [-1.3, -23.1, -15.3, -2.1, 0, 0, 0, 0, -2.3], isPerc: true, barNegPos: {left: "bar positive", right: "bar negative"}};
  var varHCProjYear = {data: [-1.5, -5.8, -20.8, -8.9, 0, 0, 0, 0, -2.5], isPerc: true, barNegPos: {left: "bar positive", right: "bar negative"}};
  heatMapRaw.forEach(function(subArray, key, origArray){
    subArray.forEach(function(val, key, subArr){
      if (val.value < 1) {
        subArr[key].color = "MediumSeaGreen";
      } else if (val.value < 6) {
        subArr[key].color = "gold";
      } else {
        subArr[key].color = "red";
      }
    });
  });
  $scope.BUBreakdown = heatMapRaw;
  $(".BUBclass").hide();
  grOp();
  if (!$("#chartLabel").length) {
    labelChart();
    varianceChart(varHCProjMon);
    varianceChart(varHCProjYear);
  }

  $scope.change = function (){
    if ($scope.numTypeProp === "typePerc") {
      $("#containerLeft").remove();
      $(".containerLeftHolder").append("<div id='containerLeft'></div>");
      labelChart();
      varianceChart(varHCProjMon);
      varianceChart(varHCProjYear);
    } else {
      $("#containerLeft").remove();
      $(".containerLeftHolder").append("<div id='containerLeft'></div>");
      labelChart();
      varianceChart(varCostAbsMon);
      varianceChart(varCostAbsYear);
    }
  };

  $scope.GOClick = function (){
    $(".groupOps").attr("class", "btn groupOps rightBtnGrp active");
    $(".BUBr").attr("class", "btn BUBr rightBtnGrp");
    $(".GOclass").show();
    $(".BUBclass").hide();
    $(".heatTable").hide();
    grOp();
  };

  $scope.BUBClick = function (){
    $(".groupOps").attr("class", "btn groupOps rightBtnGrp");
    $(".BUBr").attr("class", "btn BUBr rightBtnGrp active");
    $(".GOclass").hide();
    $(".BUBclass").show();
    $(".heatTable").show();
  };
}
// HeadCountCtrl.$inject = [];

function CapacityCtrl($scope, $http, getXAxis, getVolumeDifference, getTotalColumnData) {
  $http.get('../data/Capacity.json').success(function(data, status, headers, config){
    $scope.capacityData = data;
    $scope.targetVolumeDifference = getVolumeDifference($scope.capacityData, 'target');
    $scope.actualVolumeDifference = getVolumeDifference($scope.capacityData, 'actual');
    // console.log($scope.capacityData);

    // Set the active graph
    $scope.activeGraph = 'target';
    // Function to change the activeGraph
    $scope.changeActiveGraph = function(){
      if (this.activeGraph === 'target') {
        $scope.activeGraph = 'actual';
      } else {
        $scope.activeGraph = 'target';
      }
    };

    // Extract axis, which is the same for 'Target' and 'Actual'
    var targetXAxis = getXAxis($scope.capacityData);
    // Extract data
    var targetTotalColumnData = getTotalColumnData($scope.capacityData, 'target');
    var actualTotalColumnData = getTotalColumnData($scope.capacityData, 'actual');

    // Create volume chart
    var volumeChart = new Highcharts.Chart({
      chart: {
        renderTo: 'target-volume',
        type: 'line',
        width: 4000,
        marginTop: 100,
        marginBottom: 50
      },
      credits: {
        enabled: false
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: targetXAxis
      },
      yAxis: {
        plotLines: [{
          value: 75,
          color: '#008000',
          width: 2,
          zIndex: 4,
          label: {
            text: 'Target (75%)',
            style: {
              color: '#349EEB',
              fontWeight: 'bold'
            }
          }
        }],
        title: ''
      },
      series: [{
        data: targetTotalColumnData,
        showInLegend: false
      }],
      tooltip: {
        formatter: function(){
          return this.x + '<br />Target Volume Total: '+ this.y +'%';
        }
      },
      plotOptions: {
        series: {
          color: '#D3D3D3',
          marker: {
            fillColor: '#FFD700',
            lineWidth: 2,
            lineColor: '#FFD700',
            radius: 6
          },
          dataLabels: {
            enabled: true,
            y: -15,
            style: {
              fontWeight: 'bold'
            }
          }
        }
      }
    });
    // Create actual chart
    var actualChart = new Highcharts.Chart({
      chart: {
        renderTo: 'actual-volume',
        type: 'column',
        width: 4000,
        marginTop: 100,
        marginBottom: 50
      },
      credits: {
        enabled: false
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: targetXAxis
      },
      yAxis: {
        title: ''
      },
      series: [{
        data: actualTotalColumnData,
        showInLegend: false
      }],
      tooltip: {
        formatter: function(){
          return this.x + '<br />Target Volume Total: '+ this.y +'%';
        }
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            y: -15,
            style: {
              fontWeight: 'bold'
            }
          },
          borderColor: null,
          borderWidth: 0
        }
      }
    });
  }).error(function(data, status, headers, config){
    console.log(data, status, headers, config);
  });

  $scope.$on('$viewContentLoaded', function(){
    $('#target-volume').on('scroll', function () {
      $('#actual-volume').scrollLeft($(this).scrollLeft());
    });

    $('#actual-volume').on('scroll', function () {
      $('#target-volume').scrollLeft($(this).scrollLeft());
    });
  });
}
// CapacityCtrl.$inject = ['$scope', '$http'];

function ColleaguesCtrl($scope, $http) {
  $http.get('../data/Colleagues.json').success(function(data, status, headers, config){
    var values = data.AGREE.values;
    // console.log(values[0]);
    // var x = values.

    var colorObject = {
      'Cardiff': 'orange',
      'Chester': 'red',
      'Leeds': 'red',
      'Glasgow': 'orange',
      'Birmingham': 'red',
      'Edinburgh': 'orange',
      'Belfast': 'orange',
      'Manchester': 'green',
      'Newport': 'green',
      'Dunfermline': 'green',
      'Wolverhampton': 'green'
    };

    var dataArray = [];
    for (var i = 0; i < values.length; i++) {
      var radius =  values[i].pop() / 100;
      var name = values[i].shift();
      var pointColor = colorObject[name];
      var xC = _.reduce(values[i].slice(0, 3), function(memo, num) {
        return memo + num;
      }, 0);

      var yC = _.reduce(values[i].slice(3), function(memo, num) {
        return memo + num;
      }, 0);
      var dataPoint = {
        x : xC,
        y : yC,
        radius: radius,
        name: name,
        fillColor: pointColor
      };
      dataArray.push(dataPoint);
    }

    var chart = new Highcharts.Chart({
        chart: {
          renderTo: 'stackbar-colleagues',
          type: 'bar',
          width: 640,
          height: 240,
          backgroundColor: '#F7F7F7',
          style: {
            paddingTop: '15px',
            position: 'absolute'
          }
        },
        credits: { enabled: false },
        title: {
          text: 'Skill',
          align: 'left'
        },
        xAxis: {
          categories: ['I have clear targets and objectives', 'I recieve training/coaching/feedback', 'There is a clear link between my performance and reward'],
          labels: {
            enabled: true,
            align: 'left',
            x: 5,
            y: -20,
            style: {
              width: '350px',
              fontWeight: 'bold'
            }
          },
          lineWidth: 0,
          tickLength: 0
        },
        yAxis: {
          gridLineWidth: 0,
          labels: { enabled: false },
          title: { text: '' },
        },
        legend: {
          borderColor: 'transparent',
          backgroundColor: '#FFFFFF',
          reversed: true,
          floating: true,
          verticalAlign: 'top',
          x: 170
        },
        tooltip: {
          formatter: function() {
            return ''+ this.series.name +': '+ this.y +'%';
          }
        },
        plotOptions: {
          series: {
            stacking: 'normal'
          }
        },
        series: [{
          name: 'Agree',
          color: 'green',
          data: [57, 43, 30]
        }, {
          name: 'Disagree',
          color: 'red',
          data: [39, 45, 32]
        }, {
          name: 'Neutral',
          color: 'orange',
          data: [4, 12, 38]
        }]
      });


      var chart2 = new Highcharts.Chart({
        chart: {
          renderTo: 'stackbar-colleagues2',
          type: 'bar',
          width: 640,
          height: 280,
          style: {
            position: 'absolute',
          },
          backgroundColor: '#F7F7F7'
        },
        credits: { enabled: false },
        title: {
          text: 'Will',
          align: 'left'
        },
        xAxis: {
          categories: ['I am satisfied with my job', 'I intend to stay in the company', 'I am willing to exert extraordinary effort', 'I continuously find ways and am encouraged to innovate'],
          labels: {
            enabled: true,
            align: 'left',
            x: 5,
            y: -16,
            style: {
              width: '350px',
              fontWeight: 'bold'
            }
          },
          lineWidth: 0,
          tickLength: 0
        },
        yAxis: {
          gridLineWidth: 0,
          labels: { enabled: false },
          title: { text: '' },
        },
        legend: {
          enabled: false,
          backgroundColor: '#FFFFFF',
          reversed: true,
        },
        tooltip: {
          formatter: function() {
            return ''+ this.series.name +': '+ this.y +'%';
          }
        },
        plotOptions: {
          series: {
            stacking: 'normal'
          }
        },
        series: [{
          name: 'Agree',
          color: 'green',
          data: [73, 54, 79, 29]
        }, {
          name: 'Disagree',
          color: 'red',
          data: [18, 41, 7, 29]
        }, {
          name: 'Neutral',
          color: 'orange',
          data: [9, 5, 14, 42]
        }]
      });


      var scatterChart = new Highcharts.Chart({
      chart: {
        renderTo: 'scatterchart-colleagues',
        type: 'scatter',
        // style: { padding: '0px' },
        zoomType: 'xy',
        width: 622,
        height: 400,
        backgroundColor: '#F7F7F7'
      },
      credits: { enabled: false },
      legend: {
          enabled: false
      },
      title: {
        text: ''
      },
      xAxis: {
        title: {
          text: 'Will',
          style: {
            fontSize: '1.em',
            fontWeight: 'bold',
            textDecoration: 'underline'
          },
        },
        labels: {
          enabled: false
        },
        tickLength: 0,
        lineWidth: 0
      },
      yAxis: {
        gridLineWidth: 0,
        title: {
          text: 'Skill',
          style: {
            fontSize: '1.2em',
            fontWeight: 'bold',
            textDecoration: 'underline'
          }
        },
        labels: {
          enabled: false
        }
      },
      tooltip: {
        formatter: function() {
          return 'x: ' + this.x + '<br>y: ' + this.y;
        }
      },
      plotOptions: {
        scatter: {
          marker: {
            radius: 10,
            states: {
              hover: {
                enabled: false,
                lineColor: 'rgb(100,100,100)'
              }
            }
          },
          dataLabels: {
            formatter: function() {
              return this.point.name;
            },
            enabled: true,
            y: -15,
            style: { fontSize: '13px', fontWeight: 'bold' }
          },
          states: {
            hover: {
              marker: {
                enabled: false
              }
            }
          }
        }
      },
        series: [
                {
                  data: dataArray,
                  marker: {
                      symbol: 'circle'
                  }
                },
                {
                  showInLegend: false
                }
              ]
    });
  }).error(function(err) {
    console.log(err);
  });
}
// ColleaguesCtrl.$inject = [];

function CostCtrl() {
}
// ColleaguesCtrl.$inject = [];

function OperationCostsCtrl($scope) {
  $scope.numTypeProp = "typePerc";
  $scope.headerarray = [{title: "Actual", subTitle: "Current", value: "18,220", icon: "icon-arrow-down", delta: "112 from prior week"},
                   {title: "Projection", subTitle: "End September 2012", value: "18,404", icon: "icon-ok", delta: "411 below target"},
                   {title: "Projection", subTitle: "End December 2012", value: "16,887", icon: "icon-ok", delta: "453 below target"}];
  $scope.heatMapHead = ["Asia Minor", "SuperCard", "Western", "Africa", "Banking", "Corporate", "Wealth", "Head"];
  var heatMapRaw = [[{value: 6.2, sub: ""}, {value: 2.8, sub: ""}, {value: -15.4, sub: ""}, {value: -4.0, sub: ""}, {value: -4.0, sub: ""}, {value: -1.6, sub: ""}, {value: 0, sub: ""}, {value: 4.4, sub: ""}],
                    [{value: -3.5, sub: ""}, {value: -1.4, sub: ""}, {value: 7.7, sub: ""}, {value: .2, sub: ""}, {value: .2, sub: ""}, {value: -.8, sub: ""}, {value: 0, sub: ""}, {value: -2.2, sub: ""}],
                    [{value: 3, sub: ""}, {value: 1.4, sub: ""}, {value: -7.7, sub: ""}, {value: -.2, sub: ""}, {value: -.2, sub: ""}, {value: .8, sub: ""}, {value: 0, sub: ""}, {value: 2.2, sub: ""}],
                    [{value: -3.2, sub: ""}, {value: -1.4, sub: ""}, {value: 7.7, sub: ""}, {value: .2, sub: ""}, {value: .2, sub: ""}, {value: -.8, sub: ""}, {value: 0, sub: ""}, {value: -2.2, sub: ""}],
                    [{value: 3.5, sub: ""}, {value: 1.4, sub: ""}, {value: -7.7, sub: ""}, {value: -.2, sub: ""}, {value: -.2, sub: ""}, {value: .8, sub: ""}, {value: 0, sub: ""}, {value: 2.2, sub: ""}],
                    [{value: -3, sub: ""}, {value: -1.4, sub: ""}, {value: 7.7, sub: ""}, {value: .2, sub: ""}, {value: .2, sub: ""}, {value: -.8, sub: ""}, {value: 0, sub: ""}, {value: -2.2, sub: ""}],
                    [{value: 3.3, sub: ""}, {value: 1.4, sub: ""}, {value: -7.7, sub: ""}, {value: -.2, sub: ""}, {value: -.2, sub: ""}, {value: .8, sub: ""}, {value: 0, sub: ""}, {value: 2.2, sub: ""}],
                    [{value: -3.4, sub: ""}, {value: -1.4, sub: ""}, {value: 7.7, sub: ""}, {value: .2, sub: ""}, {value: .2, sub: ""}, {value: -.8, sub: ""}, {value: 0, sub: ""}, {value: -2.2, sub: ""}],
                    [{value: 2.9, sub: ""}, {value: 1.4, sub: ""}, {value: -7.7, sub: ""}, {value: -.2, sub: ""}, {value: -.2, sub: ""}, {value: .8, sub: ""}, {value: 0, sub: ""}, {value: 2.2, sub: ""}]];
  var varCostAbsMon = {data: [.05, .1, .2, -.1, -.15, .3, 0, .1, .5], isPerc: false, barNegPos: {left: "bar positive", right: "bar negative"}};
  var varCostAbsYear = {data: [-.4, -.2, -.3, .1, .2, .3, 0, -.1, -.4], isPerc: false, barNegPos: {left: "bar positive", right: "bar negative"}};
  var varHCProjMon = {data: [.2, 2.3, 4.5, -8.2, -26.9, 24.5, 0, .6, 1], isPerc: true, barNegPos: {left: "bar positive", right: "bar negative"}};
  var varHCProjYear = {data: [-.2, -.5, -.7, .9, 3.9, 2.7, 0, -.1, -.1], isPerc: true, barNegPos: {left: "bar positive", right: "bar negative"}};
  heatMapRaw.forEach(function(subArray, key, origArray){
    subArray.forEach(function(val, key, subArr){
      if (val.value <= 0) {
        subArr[key].color = "MediumSeaGreen";
      } else if (val.value < 1) {
        subArr[key].color = "gold";
      } else {
        subArr[key].color = "red";
      }
      if (val.value < 0) {
        subArr[key].sub = "-£" + Math.abs(val.value) + "m";
      } else {
        subArr[key].sub = "+£" + val.value + "m";
      }
    });
  });
  $scope.BUBreakdown = heatMapRaw;
  $(".BUBclass").hide();
  grOp();
  if (!$("#chartLabel").length) {
    labelChart();
    varianceChart(varHCProjMon);
    varianceChart(varHCProjYear);
  }

  $scope.change = function (){
    if ($scope.numTypeProp === "typePerc") {
      $("#containerLeft").remove();
      $(".containerLeftHolder").append("<div id='containerLeft'></div>");
      labelChart();
      varianceChart(varHCProjMon);
      varianceChart(varHCProjYear);
    } else {
      $("#containerLeft").remove();
      $(".containerLeftHolder").append("<div id='containerLeft'></div>");
      labelChart();
      varianceChart(varCostAbsMon);
      varianceChart(varCostAbsYear);
    }
  };

  $scope.GOClick = function (){
    $(".groupOps").attr("class", "btn groupOps rightBtnGrp active");
    $(".BUBr").attr("class", "btn BUBr rightBtnGrp");
    $(".GOclass").show();
    $(".BUBclass").hide();
    $(".heatTable").hide();
    grOp();
  };

  $scope.BUBClick = function (){
    $(".groupOps").attr("class", "btn groupOps rightBtnGrp");
    $(".BUBr").attr("class", "btn BUBr rightBtnGrp active");
    $(".GOclass").hide();
    $(".BUBclass").show();
    $(".heatTable").show();
  };
}
// HeadCountCtrl.$inject = [];
