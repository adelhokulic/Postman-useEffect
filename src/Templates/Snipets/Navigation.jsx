import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
	return (
		<>
			<Navbar className="bg-dark" data-bs-theme="dark">
				<Container className="justify-content-center">
					<Navbar.Brand href="#" className="fw-bold">
						Movies Search
					</Navbar.Brand>
				</Container>
			</Navbar>
		</>
	);
};

export default Navigation;
