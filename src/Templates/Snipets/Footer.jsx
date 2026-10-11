import Container from "react-bootstrap/Container";
import { useContext } from "react";
import SiteNameContext from "../../Context/SiteNameContext";
const Footer = () => {
	const siteTitle = useContext(SiteNameContext);
	return (
		<>
			<footer className="bg-body-tertiary py-3 mt-auto">
				<Container className="text-center">
					<p className="mb-0">Copyright &copy; 2026 {siteTitle}</p>
				</Container>
			</footer>
		</>
	);
};

export default Footer;
