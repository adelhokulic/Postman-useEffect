import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../Templates/Snipets/MovieCard";

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const GetMovies = () => {
	const [movieName, setMovieName] = useState("");
	const [movieData, setMovieData] = useState({});
	useEffect(() => {
		fetchMovie("The Matrix");
	}, []);
	return (
		<>
			<h1>Get Movies</h1>
			<form>
				<input
					type="text"
					placeholder="Enter movie title"
					value={movieName}
					onInput={(e) => setMovieName(e.target.value)}
				/>
				<button type="button" onClick={() => fetchMovie(movieName)}>
					Search
				</button>
			</form>
			<MovieCard movieData={movieData} />
			</>
	);
	function fetchMovie(title) {
		axios
			.get(API_URL + "?t=" + title + "&apikey=" + API_KEY)
			.then((response) => setMovieData(response.data))
			.catch((error) => console.error(error));
	}
};

export default GetMovies;
