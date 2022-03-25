import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
);

const LineChart = ({ lineColor }) => {
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
  
  const datasets = [
    {
      data: [ 12, 18, 47, null, 17.5, null, 42, 33 ],
      borderColor: lineColor,
      borderWidth: 2,
      backgroundColor: 'white',
      pointBorderWidth: 1
    }
  ]

  const options = {
    spanGaps: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 6,
      },
    },
    scales: {
      y: {
        id: 'y',
        min: 10,
        max: 50,
        grid: {
          color: '#ECEBF5',
          borderColor: 'white',
          borderWidth: 1,
          
        },
        ticks: {
          color: '#696D8C',
          padding: 20,
          font: {
            family: "'Gelion'",
            size: 14,
            weight: '400',
            lineHeight: '22px',
          },
          stepSize: 10,
          textStrokeWidth: 22
        }
      },
      x: {
        grid: {
          color: 'white',
          borderColor: 'transparent'
        },
        ticks: {
          color: '#696D8C',
          padding: 14,
          font: {
            family: "'Gelion'",
            size: 14,
            weight: '400',
            lineHeight: '22px'
          }
        }
      }
    }
  }

  return (
    <Line 
      height={"89%"}
      options={options} 
      data={{ labels, datasets }} 
    />
  )
}

export default LineChart