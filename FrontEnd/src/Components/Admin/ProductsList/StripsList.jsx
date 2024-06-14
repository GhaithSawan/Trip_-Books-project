import React, { useContext, useEffect, useState } from 'react'
import SideBar from '../SideBar/SideBar'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { URLaxios } from '../../../../constant';
import "./StripsList.css"
import EditStrip from '../../EditStrip/EditStrip';
const StripsList = () => {
    const [Strips, setStrips] = useState()
    const [reloud, setreloud] = useState(false)
    const [singleStripDate, setsingleStripDate] = useState()

  useEffect(() => {
    axios.get(`${URLaxios}/StripRouts/GetAllStrips`)
      .then((res) => {
        setStrips(res.data)
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
  }, [reloud])

    
    const [show, setShow] = useState(false);
    const handleShow = (e) => {
        setsingleStripDate(e)
        setShow(true)
    };

    function handelDelete(id) {
        axios.delete(`${URLaxios}/StripRouts/deleteStrip/${id}`,
        ).then((res) => {
            alert("Strip deleted")
            console.log(res.data)
            setreloud(!reloud)
        })
    }
    return (
        <div className='ProductsList row page gap-5  py-5 px-2' >
            <div className='col-3' style={{ borderRight: "1px solid black" }}>
                <SideBar />
            </div>
            <div className="card col-8">
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th >StripName</th>
                            <th >Destination</th>
                            <th>Available to</th>
                            <th >Rate</th>
                            <th >Delete</th>
                            <th >Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                                Strips?.map((e, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td >{e?.name}</td>
                                            <td >{e?.Destination}</td>
                                            <td >{e?.expiresAt.split("T")[0]}</td>
                                            <td >{e?.Rate}</td>
                                            <td >
                                                <Button variant="danger" onClick={() => handelDelete(e?._id)} >Delete</Button>
                                            </td>
                                            <td >
                                                <Button variant="primary" onClick={() => handleShow(e)}>Edit</Button>
                                            </td>

                                        </tr>
                                    )
                                })
                            }
                    </tbody>
                </Table>
            </div>
            <EditStrip show={show} setShow={setShow} singleStripDate={singleStripDate} reloud={reloud} setreloud={setreloud}  />
        </div>
    )
}

export default StripsList