let xAxisData = [];
let data1 = [];
let data2 = [];
let data3 = [];
let data4 = [];

for (let i = 0; i < 10; i++) {
  xAxisData.push('Class' + i);
  data1.push((Math.random() * 2).toFixed(2));
  data2.push(-Math.random().toFixed(2));
  data3.push((Math.random() * 5).toFixed(2));
  data4.push((Math.random() + 0.3).toFixed(2));
}

let itemStyle = {
  normal: {
  },
  emphasis: {
    barBorderWidth: 1,
    shadowBlur: 10,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowColor: 'rgba(0,0,0,0.5)'
  }
};



let option = {
  legend: {
    data: ['bar', 'bar2', 'bar3', 'bar4'],
    align: 'left',
    left: 10
  },
  brush: {
    toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
    xAxisIndex: 0
  },
  toolbox: {
    feature: {
      magicType: {
        type: ['stack', 'tiled']
      },
      dataView: {}
    }
  },
  tooltip: {},
  xAxis: {
    data: xAxisData,
    name: 'X Axis',
    silent: false,
    axisLine: {onZero: true},
    splitLine: {show: false},
    splitArea: {show: false}
  },
  yAxis: {
    inverse: true,
    splitArea: {show: false}
  },
  grid: {
    left: 30
  },
  /*visualMap: {
    type: 'continuous',
    dimension: 1,
    text: ['High', 'Low'],
    inverse: true,
    itemHeight: 200,
    calculable: true,
    min: -2,
    max: 6,
    top: 60,
    left: 10,
    inRange: {
      colorLightness: [0.4, 0.8]
    },
    outOfRange: {
      color: '#bbb'
    },
    controller: {
      inRange: {
        color: '#2f4554'
      }
    }
  },*/
  series: [
    {
      name: 'bar',
      type: 'bar',
      stack: 'one',
      itemStyle: itemStyle,
      data: data1
    },
    {
      name: 'bar2',
      type: 'bar',
      stack: 'one',
      itemStyle: itemStyle,
      data: data2
    },
    {
      name: 'bar3',
      type: 'bar',
      stack: 'two',
      itemStyle: itemStyle,
      data: data3
    },
    {
      name: 'bar4',
      type: 'bar',
      stack: 'two',
      itemStyle: itemStyle,
      data: data4
    }
  ],
  animationDuration: 2000
};

function getBar() {
  return option
}
export default getBar;
