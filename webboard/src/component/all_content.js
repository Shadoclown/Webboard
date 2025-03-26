import React, { useState } from 'react';
import Card from './card';

function All_content({ card_data }) {
    const [select_room, set_room] = useState('All');

    const filter_data = select_room === 'All' ? card_data : card_data.filter(item => item.room === select_room);

    return (
        <div>
            <div className="wel">
                <h1>Welcome to the website</h1>
            </div>
            <div className="menu_bar">
                <button id="room_btn" onClick={() => set_room('All')}>All</button>
                <button id="room_btn" onClick={() => set_room('Science')}>Science</button>
                <button id="room_btn" onClick={() => set_room('Technology')}>Technology</button>
                <button id="room_btn" onClick={() => set_room('Math')}>Math</button>
                <button id="room_btn" onClick={() => set_room('Engineering')}>Engineering</button>
                <button id="room_btn" onClick={() => set_room('Social')}>Engineering</button>
            </div>

            <div className="main_content">
                {filter_data.map((data, index) => (
                    <Card key={index} title={data.title} room={data.room} content={data.content} />
                ))}
            </div>
        </div>
    );
}

export default All_content;
