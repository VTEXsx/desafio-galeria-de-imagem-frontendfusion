import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { isFavorite } from "../../redux/favorite/favorite.selector";
import { addFavorite, removeFavorite } from "../../redux/favorite/slice";

/* eslint-disable react/prop-types */
function GalleryItem({ image }) {
  const dispatch = useDispatch();
  const handleFavoriteClick = () => {
    dispatch(addFavorite(image));
  };
  const handleRemoveFavoriteClick = () => {
    dispatch(removeFavorite(image));
  };
  const isItemFavorite = useSelector((state) => isFavorite(state, image.id));
  const [isHovered, setIsHovered] = useState(false);
  const openMoreInfo = () => {
    setIsHovered(true);
  };
  const closeMoreInfo = (e) => {
    e.stopPropagation();
    setIsHovered(false);
  };

  return (
    <div
      style={{ backgroundImage: `url('${image.download_url}')` }}
      className="w-full h-56 bg-black bg-cover bg-center flex items-center justify-center text-white rounded-xl"
    >
      {!isHovered && (
        <div className="w-full h-full flex flex-col items-start justify-end space-y-2 rounded-xl relative pb-4 pl-4">
          <button className="absolute right-3 top-3">
            {isItemFavorite ? (
              <FaStar
                onClick={handleRemoveFavoriteClick}
                className="text-teal-600"
                size={35}
              />
            ) : (
              <FaRegStar onClick={handleFavoriteClick} size={35} />
            )}
          </button>
          <button
            onClick={openMoreInfo}
            className="border-b-2 py-2 px-4 rounded-lg bg-black/60 text-teal-600 border-teal-600"
            target="_blank"
          >
            Ver mais
          </button>
        </div>
      )}
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
