import { createContext, useState } from "react";

export const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
	const [movieData, setMovieData] = useState([]);
	return (
		<>
			<MoviesContext.Provider value={{ movieData, setMovieData }}>
				{children}
			</MoviesContext.Provider>
		</>
	);
};
export default MoviesProvider;
