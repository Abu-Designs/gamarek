/*=========================================================================================
    File Name: chartjs.js
    Description: Chartjs chart
    ----------------------------------------------------------------------------------------
    Item Name: Apex - Responsive Admin Theme
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(window).on("load", function () {

  //-------------- Line chart starts --------------

  //Get the context of the Chart canvas element we want to select
  var ctx = $("#line-chart");
  // Chart Options
  var chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'bottom',
    },
    hover: {
      mode: 'label'
    },
    scales: {
      xAxes: [{
        display: true,
        gridLines: {
          color: "#F5F5F5",
          drawTicks: false,
        },
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: true,
        gridLines: {
          color: "#F5F5F5",
          drawTicks: false,
        },
        scaleLabel: {
          display: true,
          labelString: 'Value'
        }
      }]
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart - Legend'
    }
  };
  // Chart Data
  var chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: "My First dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderDash: [5, 5],
      borderColor: "#7b2222",
      pointBorderColor: "#7b2222",
      pointBackgroundColor: "#FFF",
      pointBorderWidth: 2,
      pointHoverBorderWidth: 2,
      pointRadius: 4,
    }, {
      label: "My Second dataset",
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: false,
      borderDash: [5, 5],
      borderColor: "#F77E17",
      pointBorderColor: "#F77E17",
      pointBackgroundColor: "#FFF",
      pointBorderWidth: 2,
      pointHoverBorderWidth: 2,
      pointRadius: 4,
    }, {
      label: "My Third dataset - No bezier",
      data: [45, 25, 16, 36, 67, 18, 76],
      lineTension: 0,
      fill: false,
      borderColor: "#40C057",
      pointBorderColor: "#40C057",
      pointBackgroundColor: "#FFF",
      pointBorderWidth: 2,
      pointHoverBorderWidth: 2,
      pointRadius: 4,
    }]
  };
  var config = {
    type: 'line',

    // Chart Options
    options: chartOptions,

    data: chartData
  };
  // Create the chart
  var lineChart = new Chart(ctx, config);


  //-------------- Area Chart starts --------------

  //Get the context of the Chart canvas element we want to select
  var ctx = $("#area-chart");
  // Chart Options
  var chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'bottom',
    },
    hover: {
      mode: 'label'
    },
    scales: {
      xAxes: [{
        display: true,
        gridLines: {
          color: "#F5F5F5",
          drawTicks: false,
        },
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: true,
        gridLines: {
          color: "#F5F5F5",
          drawTicks: false,
        },
        scaleLabel: {
          display: true,
          labelString: 'Value'
        }
      }]
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart - Legend'
    }
  };
  // Chart Data
  var chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: "My First dataset",
      data: [0, 150, 140, 105, 190, 230, 270],
      backgroundColor: "rgba(189, 189, 189, 0.3)",
      borderColor: "transparent",
      pointBorderColor: "#BDBDBD",
      pointBackgroundColor: "#FFF",
      pointBorderWidth: 2,
      pointHoverBorderWidth: 2,
      pointRadius: 4,
    }, {
      label: "My Second dataset",
      data: [0, 90, 120, 240, 140, 250, 190],
      backgroundColor: "rgba(47, 139, 230, 0.7)",
      borderColor: "transparent",
      pointBorderColor: "#2F8BE6",
      pointBackgroundColor: "#FFF",
      pointBorderWidth: 2,
      pointHoverBorderWidth: 2,
      pointRadius: 4,
    }]
  };
  var config = {
    type: 'line',
    // Chart Options
    options: chartOptions,
    // Chart Data
    data: chartData
  };
  // Create the chart
  var areaChart = new Chart(ctx, config);
});


//-------------- Scatter Chart starts --------------

//Get the context of the Chart canvas element we want to select
var ctx = $("#scatter-logx");
// Chart Options
var chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  responsiveAnimationDuration: 800,
  title: {
    display: false,
    text: 'Chart.js Scatter Chart - Logarithmic X-Axis'
  },
  scales: {
    xAxes: [{
      type: 'logarithmic',
      position: 'bottom',
      ticks: {
        userCallback: function (tick) {
          var remain = tick / (Math.pow(10, Math.floor(Chart.helpers.log10(tick))));
          if (remain === 1 || remain === 2 || remain === 5) {
            return tick.toString() + "Hz";
          }
          return '';
        },
      },
      gridLines: {
        zeroLineColor: "rgba(0,0,0,.1)",
        color: "#F5F5F5",
        drawTicks: false,
      },
      scaleLabel: {
        labelString: 'Frequency',
        display: true,
      }
    }],
    yAxes: [{
      type: 'linear',
      ticks: {
        userCallback: function (tick) {
          return tick.toString() + "dB";
        }
      },
      gridLines: {
        zeroLineColor: "#2F8BE6",
        color: "#F5F5F5",
        drawTicks: false,
      },
      scaleLabel: {
        labelString: 'Voltage',
        display: true
      }
    }]
  }
};
// Chart Data
var chartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [{
    label: "V(node2)",
    data: [{
      x: 1,
      y: -1.711e-2,
    }, {
      x: 1.26,
      y: -2.708e-2,
    }, {
      x: 1.58,
      y: -4.285e-2,
    }, {
      x: 2.0,
      y: -6.772e-2,
    }, {
      x: 2.51,
      y: -1.068e-1,
    }, {
      x: 3.16,
      y: -1.681e-1,
    }, {
      x: 3.98,
      y: -2.635e-1,
    }, {
      x: 5.01,
      y: -4.106e-1,
    }, {
      x: 6.31,
      y: -6.339e-1,
    }, {
      x: 7.94,
      y: -9.659e-1,
    }, {
      x: 10.00,
      y: -1.445,
    }, {
      x: 12.6,
      y: -2.110,
    }, {
      x: 15.8,
      y: -2.992,
    }, {
      x: 20.0,
      y: -4.102,
    }, {
      x: 25.1,
      y: -5.429,
    }, {
      x: 31.6,
      y: -6.944,
    }, {
      x: 39.8,
      y: -8.607,
    }, {
      x: 50.1,
      y: -1.038e1,
    }, {
      x: 63.1,
      y: -1.223e1,
    }, {
      x: 79.4,
      y: -1.413e1,
    }, {
      x: 100.00,
      y: -1.607e1,
    }, {
      x: 126,
      y: -1.803e1,
    }, {
      x: 158,
      y: -2e1,
    }, {
      x: 200,
      y: -2.199e1,
    }, {
      x: 251,
      y: -2.398e1,
    }, {
      x: 316,
      y: -2.597e1,
    }, {
      x: 398,
      y: -2.797e1,
    }, {
      x: 501,
      y: -2.996e1,
    }, {
      x: 631,
      y: -3.196e1,
    }, {
      x: 794,
      y: -3.396e1,
    }, {
      x: 1000,
      y: -3.596e1,
    }],
    backgroundColor: "rgba(47, 139, 230, 0.6)",
    borderColor: "transparent",
    pointBorderColor: "#2F8BE6",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 2,
    pointHoverBorderWidth: 2,
    pointRadius: 4,
  }]
};
var config = {
  type: 'scatter',
  // Chart Options
  options: chartOptions,
  data: chartData
};
// Create the chart
var scatterLogXChart = new Chart(ctx, config);


//-------------- Column Chart starts

//Get the context of the Chart canvas element we want to select
var ctx = $("#column-chart");
// Chart Options
var chartOptions = {
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each bar to be 2px wide and green
  elements: {
    rectangle: {
      borderWidth: 2,
      borderSkipped: 'bottom'
    }
  },
  responsive: true,
  maintainAspectRatio: false,
  responsiveAnimationDuration: 500,
  legend: {
    position: 'top',
  },
  scales: {
    xAxes: [{
      display: true,
      gridLines: {
        color: "#F5F5F5",
        drawTicks: false,
      },
      scaleLabel: {
        display: true,
      }
    }],
    yAxes: [{
      display: true,
      gridLines: {
        color: "#F5F5F5",
        drawTicks: false,
      },
      scaleLabel: {
        display: true,
      }
    }]
  },
  title: {
    display: true,
    text: 'Chart.js Bar Chart'
  }
};
// Chart Data
var chartData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [{
    label: "My First dataset",
    data: [65, 59, 80, 81, 56],
    backgroundColor: "#7b2222",
    hoverBackgroundColor: "rgba(151, 90, 255, 0.9)",
    borderColor: "transparent"
  }, {
    label: "My Second dataset",
    data: [28, 48, 40, 19, 86],
    backgroundColor: "#F77E17",
    hoverBackgroundColor: "rgba(247, 126, 23, 0.9)",
    borderColor: "transparent"
  }]
};
var config = {
  type: 'bar',
  // Chart Options
  options: chartOptions,
  data: chartData
};
// Create the chart
var lineChart = new Chart(ctx, config);


//-------------- Pie Chart starts --------------

//Get the context of the Chart canvas element we want to select
var ctx = $("#simple-pie-chart");
// Chart Options
var chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  responsiveAnimationDuration: 500,
};
// Chart Data
var chartData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [{
    label: "My First dataset",
    data: [85, 65, 34, 45, 35],
    backgroundColor: ['#7b2222', '#F77E17', '#40C057', '#F55252', '#2F8BE6'],
  }]
};
var config = {
  type: 'pie',
  // Chart Options
  options: chartOptions,
  data: chartData
};
// Create the chart
var pieSimpleChart = new Chart(ctx, config);


//-------------- Doughnut Chart starts --------------

//Get the context of the Chart canvas element we want to select
var ctx = $("#simple-doughnut-chart");
// Chart Options
var chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  responsiveAnimationDuration: 500,
};
// Chart Data
var chartData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [{
    label: "My First dataset",
    data: [65, 35, 24, 45, 85],
    backgroundColor: ['#7b2222', '#F77E17', '#40C057', '#F55252', '#2F8BE6'],
  }]
};
var config = {
  type: 'doughnut',
  // Chart Options
  options: chartOptions,
  data: chartData
};
// Create the chart
var doughnutSimpleChart = new Chart(ctx, config);


//-------------- Polar Chart starts --------------

//Get the context of the Chart canvas element we want to select
var ctx = $("#polar-chart");
// Chart Options
var chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  responsiveAnimationDuration: 500,
  legend: {
    position: 'top',
  },
  title: {
    display: false,
    text: 'Chart.js Polar Area Chart'
  },
  scale: {
    ticks: {
      beginAtZero: true
    },
    reverse: false
  },
  animation: {
    animateRotate: false
  }
};
// Chart Data
var chartData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [{
    data: [65, 59, 80, 81, 56],
    backgroundColor: ['#7b2222', '#F77E17', '#40C057', '#F55252', '#2F8BE6'],
    label: 'My dataset' // for legend
  }],
};
var config = {
  type: 'polarArea',
  // Chart Options
  options: chartOptions,
  data: chartData
};
// Create the chart
var polarChart = new Chart(ctx, config);


//-------------- Radar Chart starts --------------

//Get the context of the Chart canvas element we want to select
var ctx = $("#radar-chart");
// Chart Options
var chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  responsiveAnimationDuration: 500,
  legend: {
    position: 'top',
  },
  title: {
    display: true,
    text: 'Chart.js Radar Chart'
  },
  scale: {
    reverse: false,
    ticks: {
      beginAtZero: true
    }
  }
};
// Chart Data
var chartData = {
  labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
  datasets: [{
    label: "My First dataset",
    backgroundColor: "rgba(151, 90, 255, 0.3)",
    borderColor: "transparent",
    pointBorderColor: "#7b2222",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 2,
    pointHoverBorderWidth: 2,
    pointRadius: 4,
    data: [65, 59, 80, 81, 56, 55, 40],
  }, {
    label: 'Hidden dataset',
    hidden: true,
    data: [45, 25, 16, 36, 67, 18, 76],
  }, {
    label: "My Second dataset",
    backgroundColor: "rgba(151, 90, 255, 0.8)",
    borderColor: "transparent",
    pointBorderColor: "#7b2222",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 2,
    pointHoverBorderWidth: 2,
    pointRadius: 4,
    data: [28, 48, 40, 19, 86, 27, 78],
  }, ]
};
var config = {
  type: 'radar',
  // Chart Options
  options: chartOptions,
  data: chartData
};
// Create the chart
var polarChart = new Chart(ctx, config);
