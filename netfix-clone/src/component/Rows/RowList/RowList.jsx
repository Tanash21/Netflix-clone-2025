import React from 'react';
import Row from '../Row/Row'
import requests from '../../../utils/requests'

const RowList = () => {
    return (
        <>
            <Row
                title="NETFLIX ORIGINAL"
                fetchUrl ={requests.fetchNetflixOriginals}
                isLargeRow={true}
            />
            <Row title="Trading Now" fetchUrl={requests.fetchTrending}/>
            <Row title= "Top Rated" fetchUrl={requests.fetchTopRatedMovies}/>
            <Row title= "Action movies" fetchUrl={requests.fetchActionMovies}/>
            <Row title= "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title= "Horror Movies" fetchUrl={requests.fetchHorrorsMovies}/>
            <Row title= "Romance Movies" fetchUrl={requests.fetchRomancesMovies}/>
            <Row title= "TV Shows" fetchUrl={requests.fetchTvShow}/>
            <Row title="Documenteries" fetchUrl={requests.fetchDocumentaryMovies}/>

   
        </>
    );
}

export default RowList;
