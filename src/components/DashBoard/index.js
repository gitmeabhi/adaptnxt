import { MdOutlineErrorOutline } from "react-icons/md";

import NavBar from "../NavBar"
import LineChart from "../LineChart"
import PieChart from "../PieChart"
import"./index.css"

const DashBoard = () =>{
    return(
        <div className="dash-container">
           
           <div className="sidenav"> <NavBar /></div>
            <div className="dash-content">
                <div className="top-text">
                    <h1 className="open-item">Dashboard</h1>
                </div>
                <div className="main-content">
                    <div className="line-container">
                        <h1 className="line-tex">Sales vs Orders <MdOutlineErrorOutline /></h1>
                       <LineChart className="line-be" />

                    </div>
                    <div className="pie-container">
                    <h1 className="line-tex">Portion of Sales <MdOutlineErrorOutline /></h1>
                    <PieChart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard