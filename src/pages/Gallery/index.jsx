import { useEffect, useState } from "react";
import GalleryItem from "../../components/GalleryItem";

function Gallery() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados da API:", error);
      });
  }, []);
  return (
    <main className="py-4 text-teal-900 font-bold">
      <h1 className="text-center text-3xl font-bold">Galeria</h1>
      <section className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <GalleryItem key={image.id} image={image} />
        ))}
      </section>
    </main>
  );
}

export default Gallery;
