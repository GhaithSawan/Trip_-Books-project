import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./EditStrip.css"
import axios from 'axios';
import { URLaxios } from '../../../constant';
const EditStrip = ({ show, setShow ,singleStripDate}) => {

    const [name, setname] = useState()
    const [Destination, setDestination] = useState()
    const [Duration, setDuration] = useState()
    const [Rate, setRate] = useState()

    function handelupdate(id) {
        axios.put(`${URLaxios}/StripRouts/UpdateStrip/${id}`, {
            "name": name,
            "duration": Duration, 
            "Destination": Destination,
            "Rate": Rate
        }).then((res) => {
            console.log(res);
        })
            .catch((error) => {
                if (error.response) {
                    console.error("Server responded with an error:", error.response.data);
                } else if (error.request) {
                    console.error("No response received:", error.request);
                } else {
                    console.error("Error in setting up request:", error.message);
                }
            });
    }
    // ____________________________
    const [Destinations, setDestinations] = useState()
    let uniqueDestinations = Destinations?.filter((destination, index, self) =>
        index === self.findIndex((t) => (
            t.Destination === destination.Destination
        ))
    );
    useEffect(() => {
        axios.get(`${URLaxios}/StripRouts/GetAllStrips`)
            .then((res) => {
                console.log(res);
                setDestinations(res.data)
            })
            .catch((error) => {
                if (error.response) {
                    // تم استلام استجابة من الخادم ولكن مع رمز حالة غير ناجح
                    console.error("Server responded with an error:", error.response.data);
                } else if (error.request) {
                    // تم إرسال الطلب ولكن لم يتم استلام أي استجابة
                    console.error("No response received:", error.request);
                } else {
                    // حدث خطأ عند إعداد الطلب
                    console.error("Error in setting up request:", error.message);
                }
            });
    }, []);


    const handleClose = () => setShow(false);
    return (
        <div className=' w-100'>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header  >
                    <Modal.Title>EditStrip</Modal.Title>
                </Modal.Header>
                <Modal.Body className='w-100'>
                    <form className='border-bottom  py-3'>
                        <label htmlFor="StripName">StripName</label>
                        <input type="text" id='StripName' placeholder='StripName' value={name} onChange={(e) => setname(e.target.value)} />
                        <div className='d-flex align-align-items-center  justify-content-between py-3 gap-2'>
                            <div style={{ width: "100%" }} >
                                <label htmlFor="Duration">Duration</label>
                                <input type="number" id='Duration' placeholder='Duration' value={Duration} onChange={(e) => setDuration(e.target.value)} />
                            </div>
                            <div style={{ width: "100%" }}>
                                <label htmlFor="Rate">Rate</label>
                                <input type="number" id='Rate' placeholder='Rate' value={Rate} onChange={(e) => setRate(e.target.value)} />
                            </div>
                        </div>
                        <label htmlFor="Destination">Destination</label>
                        <select id='Destination' onChange={(e) => setDestinations(e.target.value)}>
                            <option value="" >Choose Category</option>
                            {
                                uniqueDestinations?.map((e) => {
                                    return (
                                        <>
                                            <option value={e?.Destination}>{e?.Destination}</option>
                                        </>
                                    )
                                })
                            }
                        </select>
                    </form>
                </Modal.Body>
                <Modal.Footer className=' w-100 pt-0 mt-0 ' style={{ borderTop: "none" }}>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="secondary" onClick={()=>handelupdate(singleStripDate._id)}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EditStrip