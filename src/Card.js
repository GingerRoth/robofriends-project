import React from 'react';

const Card = (props) => {
    return (
        <div className='bg-light-red tc dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt="robos" src={`https://robohash.org/${props.id}?size=200x200`}></img>
            <div>
                <h3>#{props.id}</h3>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );

}

export default Card;