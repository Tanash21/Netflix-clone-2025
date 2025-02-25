import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from '../../../utils/axios';
import movietrailer from 'movie-trailer';
import YouTube from 'react-youtube';
import { padding } from '@mui/system';

const Row = ({title,fetchUrl,isLargeRow}) => {
    const [movies, setMovie] = useState([]);
    const [trailerUrl, SetTrailerUrl] = useState("")
    const base_Url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        (async () => {
            try {
                console.log(fetchUrl);
                const request = await axios.get(fetchUrl);
                console.log(request);

                setMovie(request.data.results);
            }catch (error) {
                console.log("error", error);
            }
        }) ()
    }, [fetchUrl]);

    const handleClick = (movie) => {
        if (trailerUrl) {
            SetTrailerUrl("")
        }else {
            movietrailer(movie?.title || movie?.original_name || movie?.name )
            .then((url) => {
                console.log(url);
                const urlparams = new URLSearchParams(new URL(url).search)
                console.log(urlparams);
                console.log(urlparams.get('v'));
                SetTrailerUrl(urlparams.get('v'))

            })
        }
    }
    const opts = {
        height: '300',
        width: '100%',
        playervars: {
            autoplay:1,
        },
    }

    return (
        <div className='row'>
            <h1>{title}</h1>
            <div className='row_posters'>
                {movies?.map((movie, index) => (
                    <img
                    onClick={() => handleClick(movie)}
                    Key = {index}
                    src={`${base_Url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}
                    className={`row_poster ${isLargeRow && "row_poster_Large"} `}
                    />

                ))}

            </div>
            <div style={{padding: '40px'}}>
                {trailerUrl && <YouTube videoId={trailerUrl} opts= {opts} />}
            </div>
        </div>
    );
}

export default Row;
