function Movie({name, year, rating}) {
    
    return (
        <li class="card">
            <a>
                <h3>Name: {name}</h3>
                <p>Year: {year}</p>
                <p>rating: {rating}</p>
            </a>
        </li>
    )

}

export default Movie