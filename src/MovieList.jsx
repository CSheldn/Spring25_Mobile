import Movie from './Movie.jsx'

function MovieList({data}) {

    return (
        <>
        {
            data.map( (movieInfo) => {
                return <Movie name={movieInfo.name} year={movieInfo.year} rating={movieInfo.rating}/>
            })
        }
        </>
    )
};

export default MovieList;