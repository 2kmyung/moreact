import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {

    const [current, setCurrent] = useState({});

    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setCurrent(json.data.movie);
        console.log(json.data.movie);
    };

    useEffect(() => {
        getMovie();
    }, []);
    return <h1>{current.title}</h1>
}

export default Detail;