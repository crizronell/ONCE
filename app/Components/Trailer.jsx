import React from "react";

function Trailer() {
  return (
    <>
      <div className="fixed w-full h-full  ">
        <iframe
          className="absolute w-full h-screen pointer-events-none "
          width="1920"
          height="1080"
          src="https://www.youtube-nocookie.com/embed/w4cTYnOPdNk?playlist=w4cTYnOPdNk&showinfo=0&controls=1&autohide=1&modestbranding=1&autoplay=1"
          title='TWICE "SET ME FREE" M/V Teaser 2'
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
      </div>
    </>
  );
}

export default Trailer;
