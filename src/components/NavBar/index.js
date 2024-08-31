import { NavLink} from "react-router-dom"

import "./index.css"

// const listData = [
//     { "id" : 1, "name" : "Dashboard"},
//     { "id" : 2, "name" : "Inventory"},
//     { "id" : 3, "name" : "Order"},
//     { "id" : 4, "name" : "Returns"},
//     { "id" : 5, "name" : "Customers"},
//     { "id" : 5, "name" : "Chipping"},
//     { "id" : 6, "name" : "Channel"},
//     { "id" : 7, "name" : "Integrations"},
//     { "id" : 8, "name" : "Calculators"},
//     { "id" : 9, "name" : "Reports"},
//     { "id" : 10, "name" : "Account"},
   

// ]

const NavBar = () =>{
    return(
        <nav className="navbar">
            <ul className="nav-items-list">
       
             <NavLink to="/" className="nav-link"><li className="item">Dashboard</li></NavLink>
             <NavLink to="/d" className="nav-link"><li className="item">Inventory</li></NavLink>
             <NavLink to="/w" className="nav-link"><li className="item">Order</li></NavLink>
             <NavLink to="/e" className="nav-link"><li className="item">Returns</li></NavLink>
             <NavLink to="/k" className="nav-link"><li className="item">Customers</li></NavLink>
             <NavLink to="/c" className="nav-link"><li className="item">Chipping</li></NavLink>
             <NavLink to="/i" className="nav-link"><li className="item">Channel</li></NavLink>
             <NavLink to="/v" className="nav-link"><li className="item">Integrations</li></NavLink>
             <NavLink to="/t" className="nav-link"><li className="item">Calculators</li></NavLink>
             <NavLink to="/r" className="nav-link"><li className="item">Reports</li></NavLink>
             <NavLink to="/x" className="nav-link"><li className="item">Account</li></NavLink>

           
            </ul>
        </nav>
    )
}

export default NavBar