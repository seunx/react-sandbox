import React from "react";

const ImageList = (props: any) => {
  const images = props.images.map((image: any, i: any) => (
    <img src={image.urls.regular} alt="" key={i} />
  ));
  return <div>{images}</div>;
};

export default ImageList;
