import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MovieCard from "./Snipets/MovieCard";
import { useContext } from "react";
import { MoviesContext } from "../Context/MoviesContext";

const SearchResult = () => {
	const { movieData } = useContext(MoviesContext);
	return (
		<>
			<Row xs={2} md={3} lg={4} xl={5} className="g-4 mt-2">
				{movieData
				.filter((movie) => movie.Poster !== "N/A")
				.map((movie) => (
					<Col key={movie.imdbID}>
						<MovieCard movieData={movie} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default SearchResult;
