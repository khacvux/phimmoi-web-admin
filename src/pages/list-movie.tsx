import Movie from "../components/Movie";


export default function ListMovies() {
  return (
    <div className="p-3 overflow-y-scroll grid grid-cols-5 gap-2">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
    </div>
  )
}
