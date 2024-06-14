import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const phoneNumber = "0958884004";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div id="Contact" className="md:max-w-[70%] max-w-[90%] m-auto mb-5">
      <h3 className="text-center text-xl font-bold">Send us a message on WhatsApp </h3>
      <p className="text-center mb-4">We're standing by!</p>
      <div className="grid md:grid-cols-2 gap-2">
        <img
          loading="lazy"
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1682695796497-31a44224d6d6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8NDh8fGJlYWNofGVufDB8MHwwfHx8MA%3D%3D"
          alt="/"
        />
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-3 w-100">
            <textarea
              className="border p-2 col-span-2 resize-none"
              placeholder="write your message here"
              cols="30"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit" className="col-span-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
