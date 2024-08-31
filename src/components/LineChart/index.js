import {Line} from "react-chartjs-2"
import {Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend,
scales,
plugins,
} from "chart.js"
import { lineChartData } from "../FakeData"

ChartJS.register(
    CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend,
scales,
plugins,
)

const LineChart = () =>{
   
   const options = {
   
    scales: {
        y: {
          type: 'linear',
          max: 1.6,
          min: 0,
         
          display: true,
          position: 'left',
        },
        y1: {
          type: 'linear',
          max: 4,
          min: 0,

          tension : 3,
          display: true,
          position: 'right',
   }
},
plugins:{
  legend:{
     labels:{
      boxWidth : 10,
      useBorderRadius: "true",
      borderRadius : "5"
     }
  }
}
   }
   

    return <Line options={options} data = {lineChartData} />
}

export default LineChart