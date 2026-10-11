import { useState, useEffect, useContext } from "react";
import { MoviesContext } from "../Context/MoviesContext";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import SearchResults from "../Templates/SearchResult";

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const Search = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const { setMovieData } = useContext(MoviesContext);

	useEffect(() => {
		searchMovieDates("Batman");
	}, []);

	return (
		<>
			<Container className="my-4">
				<Form onSubmit={(e) => {
					e.preventDefault();
					searchMovieDates(searchTerm);
				}}>
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
								type="submit"							>
								Search
							</Button>
						</InputGroup>
					</Form.Group>
				</Form>
				<SearchResults />
			</Container>
		</>
	);
	function searchMovieDates(searchTerm) {
		if (searchTerm.trim() === "") {
			alert("Please enter a movie title.");
			return;
		}
		axios
			.get(API_URL + "?s=" + searchTerm + "&apikey=" + API_KEY)
			.then((response) => {
				if (response.data.Response === "False") {
					alert("Movie not found. Please try again.");
					return;
				}
				setMovieData(response.data.Search);
				setSearchTerm("");
			})
			.catch((error) => console.error(error));
	}
};

export default Search;
