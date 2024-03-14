import React from 'react';
import {Link} from 'react-router-dom';
const Appmovies = ({id, title, date,  average, posterPath}) => {
    
    return (
        <div className='amovieWrap' key={id}>
            <Link to={`/about/${id}`}>
                <h2>{title}</h2>
                <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} />
                <div className="date">개봉일 : {date}</div>
                <div className="average">별점 : {average}</div>
            </Link>
        </div>
    );
};

export default Appmovies;