import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AddMoviesPage from "./pages/AddMovies";
import ListMovies from "./pages/ListMovies";
import InfoMovie from "./pages/InfoMovie";
import Signin from "./pages/Signin";

function App() {
  return (
    <Router>
      <div className="flex flex-row w-full h-full">
        <div className=" w-64 h-full">
          <Navbar />
        </div>
        <div className="flex-1 h-screen overflow-hidden flex flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<AddMoviesPage />} />
            <Route path="list-movies" element={<ListMovies />} />
            <Route path="info-movie" element={<InfoMovie />} />
            <Route path="signin" element={<Signin />} />
          </Routes>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
