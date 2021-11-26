import {BrowserRouter as Router, Link,Route,Routes,Outlet } from "react-router-dom";

export default function Friends() {
    return(
        <div >
            <h1 className="text-center">Friends Page</h1>
            <nav className="container bg-white">
                <ul className="list-group">
                    <li className="">
                       <Link to="alex">Alex</Link> 
                    </li>
                    <li className="">
                        <Link to="jhon">Jhon</Link> 
                    </li>
                    <li className="">
                        <Link to="martha">Martha</Link> 
                    </li>
                    
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
};
