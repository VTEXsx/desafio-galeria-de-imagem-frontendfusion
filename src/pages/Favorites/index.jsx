import { useSelector } from "react-redux";
import GalleryItem from "../../components/GalleryItem";

function Favorites() {
  const favorites = useSelector((state) => state.favoriteReducer.favorite);
  console.log(favorites);
  return (
    <main className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {favorites.length > 0 ? (
        <>
          {favorites.map((image) => (
            <GalleryItem key={image.id} image={image} />
          ))}
        </>
      ) : (
        <p className="col-span-3 text-center text-2xl font-bold mt-5 text-teal-950">Nenhuma imagem favoritada! </p>
      )}
    </main>
  );
}

export default Favorites;
