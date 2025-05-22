import { useState } from "react";
import img1 from "../assets/snowboard.png";
import img2 from "../assets/snowboard2.jpg";
import img3 from "../assets/nature1.jpg";
import img4 from "../assets/nature2.jpeg";
import img5 from "../assets/123213.jpg";

const images = [
  { id: 1, src: img1, alt: "Snowboard 1" },
  { id: 4, src: img4, alt: "Gallery 2" },
  { id: 3, src: img3, alt: "Gallery 1" },
  { id: 2, src: img2, alt: "Snowboard 2" },
  { id: 5, src: img5, alt: "Gallery 3" },
];
export default function Projects() {
  const [selectedImg, setSelectedImg] = useState(images[0]);
  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-2xl mb-6">Gallery</h2>

      {/* Large image at top */}
      <div className="w-full max-w-4xl mb-6">
        <img
          src={selectedImg.src}
          alt={selectedImg.alt}
          className="w-full h-[650px] object-contain border rounded-lg shadow-md"
        />
      </div>

      {/* Thumbnails at the bottom */}
      <div  className="overflow-visible">
        {/* Increased height */}
        <div style={{ height: "130px" }} className="flex overflow-x-auto gap-4 max-w-4xl px-12">
          {images.map((img) => (
            <img
              key={img.id}
              src={img.src}
              alt={img.alt}
              height={110} // thumbnail size stays same
              onClick={() => setSelectedImg(img)}
              className={`cursor-pointer border-2 rounded-md hover:scale-115 transition-transform duration-300 ${
                selectedImg.id === img.id
                  ? "border-purple-600"
                  : "border-transparent"
              } hover:border-purple-400`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
