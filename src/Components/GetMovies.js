import { useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function fetchMovie(title) {
	axios
		.get(API_URL + "?t=" + title + "&apikey=" + API_KEY)
		.then((response) => console.log(response.data))
		.catch((error) => console.error(error));
}

const GetMovies = () => {
	const [movieName, setMovieName] = useState("");

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
		</>
	);
};

export default GetMovies;
