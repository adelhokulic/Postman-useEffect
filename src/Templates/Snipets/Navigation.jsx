import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import SiteNameContext from "../../Context/SiteNameContext";

const Navigation = () => {
	const siteTitle = useContext(SiteNameContext);
	return (
		<>
			<Navbar className="bg-dark" data-bs-theme="dark">
				<Container className="justify-content-center">
					<Navbar.Brand href="#" className="fw-bold">
						{siteTitle}
					</Navbar.Brand>
				</Container>
			</Navbar>
		</>
	);
};

export default Navigation;
