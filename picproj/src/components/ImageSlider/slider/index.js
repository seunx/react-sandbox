import React from "react";
import SlideIndex from "../slideIndex";

export default ({ images, index, end }) => {
  return (
    <>
      <img
        className="img-slide"
        src={`${images.originalImage}`}
        alt={images.alt}
      />
      <SlideIndex index={index} end={end} />
    </>
  );
};
