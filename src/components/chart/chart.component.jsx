import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

import './chart.styles.scss'

class Chart extends React.Component {
  state = {
    dataLine: {
      labels: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
      datasets: []
    }
  };

  componentDidMount() { 
    var aux = [];

    this.props.chartData.map( (chartItem) => {
      const dataChartTemplate =  {
        label: chartItem.label,
        fill: true,
        lineTension: 0.3,
        backgroundColor: chartItem.backgroundColor,
        borderColor: chartItem.borderColor,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(205, 130,1 58)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chartItem.data
      };

      aux.push(dataChartTemplate);
    });

    let stateCopy = Object.assign({}, this.state);
    stateCopy.dataLine.datasets = aux;


    this.setState({stateCopy});
  }

  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Crypto charts</h3>
        <Line data={this.state.dataLine} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default Chart;