import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import img1 from "../../../images/gallery/img1.jpg";
import img2 from "../../../images/gallery/img2.webp";
import img3 from "../../../images/gallery/img3.jpg";
import img4 from "../../../images/gallery/img4.jpeg";
import img5 from "../../../images/gallery/img5.jpeg";
import img6 from "../../../images/gallery/img6.jpg";
const Gallery = () => {
  const imgages = [img1, img2, img3, img4, img5, img6, img6, img6];
  return (
    <div className="my-24 md:px-24 p-2">
        <h4 className="text-center text-orange-600 font-bold text-3xl">Our Gallery</h4>
        <h2 className="text-center text-4xl mb-6">See some images from our recent works</h2>
      <div className="" style={{ columns: "3", columnGap: "0px" }}>
        {imgages.map((img, i) => (
          <PhotoProvider key={i}>
            <PhotoView src={img}>
              <img src={img} className="w-full block p-2" alt="" />
            </PhotoView>
          </PhotoProvider>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
