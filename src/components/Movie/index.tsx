import { Link } from "react-router-dom";

export default function Movie() {
  return (
    <Link to='/info-movie'>
      <div className="">
        <img
          src="https://www.wowweekend.vn/document_root/upload/articles/image/BrowseContent/StraightNoMixer/202009/Phi%20v%E1%BB%A5%20tri%E1%BB%87u%20%C4%91%C3%B4/1.jpg"
          className="w-full overflow-hidden"
        />
        <p className="font-bold text-center px-3 truncate hover:text-clip">Money heist heisth eistheistheistheisteistheistheistheisteistheistheistheist</p>
      </div>
    </Link>
  );
}
