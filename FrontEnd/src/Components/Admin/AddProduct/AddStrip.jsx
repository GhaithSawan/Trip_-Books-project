import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import SideBar from '../SideBar/SideBar';
import "./AddStrip.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { URLaxios } from '../../../../constant';
export const AddStrip = () => {
    let navi = useNavigate()
    const [name, setname] = useState()
    const [Destination, setDestination] = useState()
    const [Rate, setRate] = useState()
    const [Duration, setDuration] = useState()
    function CreateStrop() {
        console.log(Destination.toLowerCase());
        axios.post(`${URLaxios}/StripRouts/CreateStrip`, {
            "name": name,
            "duration": Duration,
            "Destination": Destination.toLowerCase(),
            "Rate": Rate
        }).then((res) => {
            console.log(res);
            navi("/AdminPage/StripsList")
        }).catch((error) => {
            if (error.response) {
                // تم استلام استجابة من الخادم ولكن مع رمز حالة غير ناجح
                alert(error.response.data.message);
            } else if (error.request) {
                // تم إرسال الطلب ولكن لم يتم استلام أي استجابة
                alert( error.request);
            } else {
                // حدث خطأ عند إعداد الطلب
                alert( error.message);
            }
        });
    }
    return (
        <div className='AddProduct row page  py-5 px-2 gap-5' >
            <div className='col-3' style={{ borderRight: "1px solid black" }}>
                <SideBar />
            </div>
            <div className="card col-6">
                <form action="" className='mb-4'>
                    <label htmlFor="StripName">StripName</label>
                    <input type="text" id='StripName' placeholder='StripName' onChange={(e) => setname(e.target.value)} />
                    <div className='d-flex align-align-items-center  justify-content-between py-3 gap-2'>
                        <div style={{ width: "100%" }} >
                            <label htmlFor="Duration">Duration</label>
                            <input type="number" id='Duration' placeholder='Duration' onChange={(e) => setDuration(e.target.value)} />
                        </div>
                        <div style={{ width: "100%" }}>
                            <label htmlFor="Rate">Rate</label>
                            <input type="number" id='Rate' placeholder='Rate' onChange={(e) => setRate(e.target.value)} />
                        </div>
                    </div>
                    <label htmlFor="Destination">Destination</label>
                    <input type='text' id='Destination' placeholder='Destination' value={Destination} onChange={(e) => setDestination(e.target.value)}/>
                </form>
                <Button variant="primary" onClick={CreateStrop} >Create</Button>{' '}

            </div >
        </div >
    )
}
