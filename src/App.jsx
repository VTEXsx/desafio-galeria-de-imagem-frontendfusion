import { FaStar } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Gallery from "./pages/Gallery";

function App() {
  const width = window.innerWidth;
  return (
    <Router>
      <header className="flex justify-between px-5 h-16 items-center text-teal-700 font-bold border-b-2 border-dashed border-teal-700">
        <h1 className="text-2xl">Fusion Galeria</h1>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link to="/" className="gap-2 flex">
                <GrGallery className="text-2xl" />
                {width > 767 ? "Galeria de fotos" : ""}
              </Link>
            </li>
            <li>
              <Link to="/favorites" className="gap-2 flex">
                <FaStar className="text-2xl" />
                {width > 767 ? "Favoritos" : ""}
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
