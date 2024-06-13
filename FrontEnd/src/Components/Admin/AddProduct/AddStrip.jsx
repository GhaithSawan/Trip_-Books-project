import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import SideBar from '../SideBar/SideBar';
import "./AddStrip.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { URLaxios } from '../../../../constant';
export const AddStrip = () => {
    let navi = useNavigate()
    const [title, settitle] = useState("")
    const [Price, setPrice] = useState()
    const [Cat, setCat] = useState("")
    const [desc, setdesc] = useState("")
    const [Img, setImg] = useState()
    function CreateProduct() {
        axios.post(`${URLaxios}/ProductRouts/CreateProduct`).then((res) => {
            console.log(res);
            navi("/AdminPage/StripsList")
        }).catch((e) => {
            console.log(e);
            alert(e?.response?.data?.message);
        })
    }
    return (
        <div className='AddProduct row page  py-5 px-2 gap-5' >
            <div className='col-3' style={{ borderRight: "1px solid black" }}>
                <SideBar  reloud={reloud} setreloud={setreloud}/>
            </div>
            <div className="card col-6">
                <form action="" className='mb-4'>
                    <label htmlFor="StripName">StripName</label>
                    <input type="text" id='StripName' placeholder='StripName' onChange={(e) => settitle(e.target.value)} />
                    <div className='d-flex align-align-items-center  justify-content-between py-3 gap-2'>
                        <div style={{ width: "100%"}} >
                            <label htmlFor="Duration">Duration</label>
                            <input type="number" id='Duration' placeholder='Duration' onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div style={{ width: "100%" }}>
                            <label htmlFor="Rate">Rate</label>
                            <input type="number" id='Rate' placeholder='Rate' onChange={(e) => setPrice(e.target.value)} />
                        </div>
                    </div>
                    <label htmlFor="Destination">Destination</label>
                    <select id='Destination' onChange={(e) => setCat(e.target.value)}>
                        <option value="" >Choose Category</option>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Kids">Kids</option>
                    </select>
                </form>
                <Button variant="primary" onClick={CreateProduct} >Create</Button>{' '}

            </div >
        </div >
    )
}
