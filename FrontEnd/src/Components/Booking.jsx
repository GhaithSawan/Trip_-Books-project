import axios from "axios";
import React, { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import StripsModel from "./StripsModel";
import { URLaxios } from "../../constant";

const Booking = () => {
  const [Strips, setStrips] = useState()

  const [Destinations, setDestinations] = useState()
  let uniqueDestinations = Destinations?.filter((destination, index, self) =>
    index === self.findIndex((t) => (
      t.Destination === destination.Destination
    ))
  );

  const [Destination, setDestination] = useState("maxico")
  const [Check_Out, setCheck_Out] = useState("2024-06-15")
  const [Check_In, setCheck_In] = useState("2024-06-11")

  const [show, setShow] = useState(false);

  const handleShow = () => {


    if (Check_In && Check_Out && Destination) {
      handelSearch()
      setShow(true)
    } else {
      alert("please Fill in the fields")
    }
  }
 

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

  function handelSearch() {
    axios.get(`${URLaxios}/StripRouts/GetAllStrips?Destination=${Destination}`).then((res) => {
      setStrips(res.data);
      console.log(res.data);
    })
  }

  return (
    <Slide direction="down">
      <div
        id="Deals"
        className="md:max-w-[70%] max-w-[90%]  m-auto flex flex-col md:flex-col  gap-3"
      >
        <div className="flex  flex-col w-full ">
          <label
            htmlFor="Destination"
            className=" text-lg font-bold text-gray-700"
          >
            Destination
          </label>
          <select
            id="Destination"
            className=" text-lg  bg-black/10 p-1 text-gray-700"
            onChange={(e) => { setDestination(e.target.value) }}
            value={Destination}
          >
            <option value="">Choose Destination</option>

            {
              uniqueDestinations?.map((e) => {
                return (<>
                  <option value={e?.Destination}>{e?.Destination}</option>
                </>
                )
              })
            }
          </select>
        </div>
        <div className="flex  flex-row gap-2  flex-wrap justify-between w-full ">
          <div className="flex  flex-col flex-1">
            <label
              htmlFor="Check-In"
              className=" text-lg font-bold text-gray-700"
            >
              Check-In
            </label>
            <input
              className=" text-lg  bg-black/10 p-1 text-gray-700"
              type="date"
              id="Check-In"
              value={Check_In}
              onChange={(e) => { setCheck_In(e.target.value) }}
            />
          </div>
          <div className="flex  flex-col flex-1">
            <label
              htmlFor="Check-Out"
              className=" text-lg font-bold text-gray-700"
            >
              Check-Out
            </label>
            <input
              className=" text-lg  bg-black/10 p-1 text-gray-700"
              type="date"
              id="Check-Out"
              value={Check_Out}
              onChange={(e) => { setCheck_Out(e.target.value) }}
            />
          </div>
        </div>
        <div className="flex  flex-col w-full mt-3 ">
          <button className="text-lg font-bold tracking-wide" onClick={handleShow}>
            Search
          </button>
        </div>
      </div>
      <StripsModel show={show} setShow={setShow} Strips={Strips} Check_In={Check_In} Check_Out={Check_Out} />
    </Slide>
  );
};

export default Booking;
