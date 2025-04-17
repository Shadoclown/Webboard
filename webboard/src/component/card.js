import React from 'react';

function Card({ title, content, category, username }) {
    return (
        <div className="card_1" id="card">
            <div className="content">
                <div className="title_p">
                    <div className="title">
                        <h2>Title: {title}</h2>
                        <p>1000 comments</p>
                    </div>
                    <h4 className='category'>Category: {category}</h4>
                    <h4 className='posted_user'>Posted by: {username}</h4>
                    <p>{content}</p>
                </div>
                <button className="view_more_btn">View More</button>
            </div>
        </div>
    );
}

export default Card;