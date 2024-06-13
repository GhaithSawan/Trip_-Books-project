import React from 'react'
import { Link } from 'react-router-dom'
import "./SideBar.css"
const SideBar = () => {
    return (
        <div className='SideBar'>
            <div className="title">DashBoard <hr /></div>
            <ul>
                <Link to={"/AdminPage"}>
                    <li>AddProduct</li>
                </Link>
                <Link to={"/AdminPage/StripsList"}>
                    <li>ProductsList</li>
                </Link>
            </ul>
        </div>
    )
}

export default SideBar