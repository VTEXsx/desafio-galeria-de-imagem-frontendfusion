/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import GalleryItem from "../../components/GalleryItem";

function Gallery() {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [color, setColor] = useState("");
  const [type, setType] = useState("");
  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
        setFilteredImages(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados da API:", error);
      });
  }, []);
  const handleFilterChange = () => {
    let filtered = images;

    if (color) {
      filtered = filtered.filter((image) => image.color === color);
    }

    if (type) {
      filtered = filtered.filter((image) => image.type === type);
    }

    setFilteredImages(filtered);
  };

  useEffect(() => {
    handleFilterChange();
  }, [color, type]);
  return (
    <main className="py-4 text-teal-900 font-bold">
      <div className="flex items-center justify-center gap-4">
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">Cores</option>
          <option value="red">Vermelho</option>
          <option value="blue">Azul</option>
          <option value="green">Verde</option>
        </select>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">Categoria</option>
          <option value="landscape">Paisagem</option>
          <option value="portrait">Retrato</option>
        </select>
      </div>
      <section className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredImages.map((image) => (
          <GalleryItem key={image.id} image={image} />
        ))}
      </section>
    </main>
  );
}

export default Gallery;
