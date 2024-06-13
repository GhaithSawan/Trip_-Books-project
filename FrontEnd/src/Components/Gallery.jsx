import React from "react";

const Gallery = () => {
  return (
    <div id="Gallery" className="md:max-w-[70%] max-w-[90%] mx-auto m-[50px]  ">
      <h3 className="mt-10 m-5 text-xl text-center font-bold">Gallery</h3>
      {/* Gallery */}
      <div className=" grid md:grid-cols-5 gap-2">
        <img
          loading="lazy"
          className="h-full w-full object-cover md:col-span-3 col-span-2 row-span-2 "
          src="https://images.unsplash.com/photo-1432889490240-84df33d47091?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGJlYWNofGVufDB8MHwwfHx8MA%3D%3D"
          alt="/"
        />
        <img
          loading="lazy"
          className="h-full w-full object-cover "
          src="https://images.unsplash.com/photo-1527206363095-ca2f054128b0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGJlYWNofGVufDB8MHwwfHx8MA%3D%3D"
          alt="/"
        />
        <img
          loading="lazy"
          className="h-full w-full object-cover "
          src="https://plus.unsplash.com/premium_photo-1670011075152-ad63b9a4e26a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGJlYWNofGVufDB8MHwwfHx8MA%3D%3D"
          alt="/"
        />
        <img
          loading="lazy"
          className="h-full w-full object-cover "
          src="https://images.unsplash.com/photo-1618324766504-4a94f694309d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGJlYWNofGVufDB8MHwwfHx8MA%3D%3D"
          alt="/"
        />
        <img
          loading="lazy"
          className="h-full w-full object-cover "
          src="https://images.unsplash.com/photo-1581609836630-9007630f7a7b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGJlYWNofGVufDB8MHwwfHx8MA%3D%3D"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Gallery;
