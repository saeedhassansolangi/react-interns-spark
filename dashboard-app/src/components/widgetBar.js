import React from 'react';

// Fusion Chart Libraries
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

function WidgetBar(props) {
  const chartConfigs = {
    type: 'bar2d',
    width: '100%',
    height: '125',
    dataFormat: 'json',
    dataSource: {
      chart: {
        bgColor: '#121212',
        theme: 'fusion',
      },
      data: props.chartData,
    },
  };
  return (
    <div className="widgetWrap">
      <div className="widgetTitle">{props.title}</div>
      <div className="widgetValue">
        <ReactFC {...chartConfigs} />
      </div>
    </div>
  );
}

export default WidgetBar;
