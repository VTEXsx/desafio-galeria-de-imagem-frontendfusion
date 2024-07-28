import { FaStar } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { useSelector } from "react-redux";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Gallery from "./pages/Gallery";
import { selectFavoriteCount } from "./redux/favorite/favorite.selector";

function App() {
  const favoritesCount = useSelector(selectFavoriteCount);
  const width = window.innerWidth;
  return (
    <Router>
      <header className="flex justify-between px-5 h-16 items-center text-teal-700 font-bold border-b-2">
        <h1 className="text-2xl">Fusion Gallery</h1>
        <nav>
          <ul className="flex gap-6 ">
            <li>
              <Link
                to="/"
                className="gap-2 flex items-center hover:text-teal-800"
              >
                <GrGallery size={30} />
                {width > 767 ? "Galeria de fotos" : ""}
              </Link>
            </li>
            <li>
              <Link
                to="/favorites"
                className="gap-2 flex items-center hover:text-teal-800"
              >
                <FaStar size={30} />
                {width > 767 ? "Favoritas" : ""}
                {favoritesCount > 0 && (
                  <span className="bg-teal-700 text-white px-2.5 py-0.5 rounded-md -ml-1">
                    {favoritesCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
