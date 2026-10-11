import "./App.css";
import Navigation from "./Templates/Snipets/Navigation";
import Footer from "./Templates/Snipets/Footer";
import Search from "./Components/Search";
import SiteNameContext from "./Context/SiteNameContext";
import MoviesProvider from "./Context/MoviesContext";

const App = () => {
	return (
		<MoviesProvider>
			<SiteNameContext.Provider value="Movies Search">
				<div
					data-bs-theme="dark"
					className="d-flex flex-column min-vh-100 bg-body text-body"
				>
					<Navigation />
					<Search />
					<Footer />
				</div>
			</SiteNameContext.Provider>
		</MoviesProvider>
	);
};

export default App;
