import MovieList from '../atoms/MovieList';

import dontLook from '../../assets/dontlook.png';
import allOfUs from '../../assets/allofus.png';
import blueLock from '../../assets/bluelock.png';
import otto from '../../assets/otto.png';

import top1 from '../../assets/top1.png';
import top2 from '../../assets/top2.png';
import top3 from '../../assets/top3.png';
import top4 from '../../assets/top4.png';
import top5 from '../../assets/top5.png';

import trend1 from '../../assets/trend1.png';
import trend2 from '../../assets/trend2.png';
import trend3 from '../../assets/trend3.png';
import trend4 from '../../assets/trend4.png';
import trend5 from '../../assets/trend5.png';

const movies = [
    { src: dontLook, alt: "Don't Look Up" },
    { src: allOfUs, alt: "All of Us Are Dead" },
    { src: blueLock, alt: "Blue Lock" },
    { src: otto, alt: "A Man Called Otto" },
];

const topMovies = [
    { src: top1, alt: "Avatar 1" },
    { src: top2, alt: "Avatar 2" },
    { src: top3, alt: "Avatar 3" },
    { src: top4, alt: "Avatar 4" },
    { src: top5, alt: "Avatar 5" }
];

const trendingMovies = [
    { src: trend1, alt: "Trending 1" },
    { src: trend2, alt: "Trending 2" },
    { src: trend3, alt: "Trending 3" },
    { src: trend4, alt: "Trending 4" },
    { src: trend5, alt: "Trending 5" }
];

function Movie() {
    return (
        <div>
            <MovieList
                movies={movies}
                topMovies={topMovies}
                trendingMovies={trendingMovies}
            />
        </div>
    );
}

export default Movie;