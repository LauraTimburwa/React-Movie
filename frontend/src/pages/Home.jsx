import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "She's The Man", release_date: "2005" },
    { id: 2, title: "Bee Movie", release_date: "2020" },
    { id: 3, title: "Avengers: Endgame", release_date: "2018" }
  ];

  return (
    <div className="home">
      <form onSubmit={} className="search-form"></form>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;

