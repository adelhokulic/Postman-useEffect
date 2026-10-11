import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import SearchResults from "../Templates/SearchResult";

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const Search = () => {
	const [searchTerm, setSearchTerm] = useState("Lord of the Rings");
	const [movieData, setMovieData] = useState([]);

	useEffect(() => {
		searchMovieDates(searchTerm);
	}, []);

	return (
		<>
		<Container className="my-4">
			<Form>
				<Form.Group className="mb-3" controlId="searchTerm">
					<Form.Label>Search Term:</Form.Label>
					<InputGroup>
						<Form.Control
							type="text"
							placeholder="Enter movie title"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
						<Button
							onClick={() => searchMovieDates(searchTerm)}
							type="button"
							variant="primary"
						>
							Search
						</Button>
					</InputGroup>
				</Form.Group>
			</Form>
			<SearchResults movieData={movieData} />
		</Container>
		</>
	);
	function searchMovieDates(searchTerm) {
		axios
			.get(API_URL + "?s=" + searchTerm + "&apikey=" + API_KEY)
			.then((response) => {
				setMovieData(response.data.Search || []);
				setSearchTerm("");
			})
			.catch((error) => console.error(error));
	}
};

export default Search;
