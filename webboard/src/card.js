import React from 'react';

function Card({ title, content }) {
    return (
        <div className="card_1" id="card">
            <div className="content">
                <h2>Title: {title}</h2>
                <p>{content}</p>
                <p>1000 comments</p>
                <button className="view_more_btn">View More</button>
            </div>
        </div>
    );
}

export default Card;