import { useState } from "react";
import { IoClose } from "react-icons/io5";

/* eslint-disable react/prop-types */
function GalleryItem({ image }) {
  const [isHovered, setIsHovered] = useState(false);
  const openMoreInfo = () => {
    setIsHovered(true);
  };
  const closeMoreInfo = () => {
    setIsHovered(false);
  };
  return (
    <div
      onClick={openMoreInfo}
      style={{ backgroundImage: `url('${image.download_url}')` }}
      className="w-full h-56 bg-black bg-cover bg-center flex items-center justify-center text-white rounded-xl"
    >
      {isHovered && (
        <div className="w-full h-full bg-black/50 flex flex-col items-center justify-center space-y-2 rounded-xl relative">
          <button onClick={closeMoreInfo} className="absolute right-2 top-2">
            <IoClose size={40} />
          </button>
          <p>Autor: {image.author}</p>
          <p>Dimensões: {`${image.width} x ${image.height}px`}</p>
          <a
            href={image.download_url}
            className="border-2 py-2 px-4 rounded-lg hover:bg-white hover:text-teal-600 hover:border-teal-600"
            target="_blank"
          >
            Download
          </a>
        </div>
      )}
    </div>
  );
}

export default GalleryItem;
