import React from 'react';

function Card({ title, content, room }) {
    return (
        <div className="card_1" id="card">
            <div className="content">
                <div className="title_p">
                    <div className="title">
                        <h2>Title: {title}</h2>
                        <p>1000 comments</p>
                    </div>
                    <h4>Room: {room}</h4>
                    <p>{content}</p>
                </div>
                <button className="view_more_btn">View More</button>
            </div>
        </div>
    );
}

export default Card;