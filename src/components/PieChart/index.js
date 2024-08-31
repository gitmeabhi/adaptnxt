import {Pie} from "react-chartjs-2"
import {Chart as ChartJS,
Tooltip,
Legend,
ArcElement,
plugins,
} from "chart.js"
import { PieChartData } from "../FakeData"

ChartJS.register(
 
Tooltip,
Legend,
ArcElement,
plugins,
)

const PieChart = () =>{
   
   const options = {
    responsive : true,
    plugins:{
        legend:{
           labels:{
            boxWidth : 10,
            useBorderRadius: "true",
            borderRadius : "5"
           },
           position : "bottom"
        }
      }
   }
   

    return <Pie options={options} data = {PieChartData} />
}

export default PieChart