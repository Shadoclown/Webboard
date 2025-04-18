import React from 'react';

function Card({ title, content, category, username }) {
    return (
        <div className="card_1" id="card">
            <div className="content">
                <div className="title_p">
                    <div className="title">
                        <h2>Title: {title}</h2>
                        <h4 className='category'>Category: {category}</h4>
                    <p>{content}</p>
                    </div>
                </div>
            </div>
            <footer className="card_footer">
                <div className='card_footer_content'>
                    <span className='posted_user'>Posted by: {username}</span>
                    <span>1000 comments</span>
                </div>
            </footer>
        </div>
    );
}

export default Card;