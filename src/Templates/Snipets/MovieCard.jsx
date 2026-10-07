const MovieCard = ({ movieData }) => {
  return (
<div>
					<h2>{movieData.Title}</h2>
					<img src={movieData.Poster} alt={movieData.Title} />
					<p>Year: {movieData.Year}</p>
					<p>Genre: {movieData.Genre}</p>
					<p>Director: {movieData.Director}</p>
					<p>Actors: {movieData.Actors}</p>
					<p>{movieData.Plot}</p>
				</div>
  );
}

export default MovieCard;