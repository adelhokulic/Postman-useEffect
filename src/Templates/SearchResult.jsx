import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MovieCard from "./Snipets/MovieCard";

const SearchResult = ({ movieData }) => {
	return (
		<>
			<Row xs={2} md={3} lg={4} xl={5} className="g-4 mt-2">
				{movieData.map((movie) => (
					<Col key={movie.imdbID}>
						<MovieCard movieData={movie} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default SearchResult;
