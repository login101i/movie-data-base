
import { useContext } from "react";
import { MovieContext } from "./MovieContext";
import {Link} from 'react-router-dom'


const Movies = () => {
    const { movies, isLoading } = useContext(MovieContext);
    console.log("To są moowies", movies.results)

    return (
        <div className="movies">
                {movies.results && movies.results.length === 0 && (
                    <h1 className="error">Result not found</h1>
                )}
                {!isLoading ? (
                    movies.results &&
                    movies.results.map((movieItem, index) => (
                        <Link to={`/moviedetail/${movieItem.id}`} >
                        <img
                            key={index}
                            src={`https://image.tmdb.org/t/p/w400/${movieItem.poster_path}`}
                            alt="poster"
                        />
                        </Link>
                    ))
                ) : (
                   <div>Loader</div>
                    )}
        </div>
    );
};



export default Movies;
