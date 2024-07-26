import { FaStar } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Gallery from "./pages/Gallery";

function App() {
  const width = window.innerWidth;
  return (
    <Router>
      <header className="flex justify-between px-5 h-16 items-center bg-teal-700 text-white font-bold">
        <h1 className="text-xl">Photo Gallery</h1>
        <nav>
          <ul className="flex gap-4">
            <li className="gap-2 flex">
              <GrGallery className="text-2xl"/>
              <Link to="/">{width > 767 ? "Galeria de fotos" : ""}</Link>
            </li>
            <li className="gap-2 flex">
              <FaStar className="text-2xl"/>
              <Link to="/favorites">{width > 767 ? "Favoritos" : ""}</Link>
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
