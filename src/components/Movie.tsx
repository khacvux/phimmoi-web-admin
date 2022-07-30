import { Link } from "react-router-dom";
import { infoMovieModel } from "../models/movie";

export default function Movie({ info }: { info: infoMovieModel}) {
  return (
    <Link to="/info-movie">
      <div className="bg-bg3 p-2 rounded hover:bg-dark">
        <img
          src={info.posterUrl}
          className="w-full overflow-hidden"
        />
        <p className="font-bold text-center px-3 truncate hover:text-clip text-font mt-2 text-sm">
          {info.name}
        </p>
      </div>
    </Link>
  );
}
