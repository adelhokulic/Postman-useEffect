import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

const MovieCard = ({ movieData }) => {
	return (
		<>
			<Card className="movie-card h-100 border-0 shadow-sm">
				<Card.Img
					variant="top"
					className="movie-poster"
					src={movieData.Poster}
					alt={movieData.Title}
				/>
				<Card.Body className="d-flex flex-column">
					<Card.Title className="fs-6">{movieData.Title}</Card.Title>
					<div className="mt-auto d-flex justify-content-between align-items-center">
						<span className="text-body-secondary">{movieData.Year}</span>
						<Badge className="text-capitalize">
							{movieData.Type}
						</Badge>
					</div>
				</Card.Body>
			</Card>
		</>
	);
};

export default MovieCard;
