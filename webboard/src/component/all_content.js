import React, { useState } from 'react';
import Card from './card';

function All_content({ card_data }) {
  const [selectRoom, setRoom] = useState('All');

  const filterData = selectRoom === 'All' 
    ? card_data 
    : card_data.filter(item => item.room === selectRoom);

  return (
    <div>
      <div className="wel">
        <h1>Welcome to the website</h1>
      </div>
      <div className="menu_bar">
        <button id="room_btn" onClick={() => setRoom('All')}>All</button>
        <button id="room_btn" onClick={() => setRoom('Science')}>Science</button>
        <button id="room_btn" onClick={() => setRoom('Technology')}>Technology</button>
        <button id="room_btn" onClick={() => setRoom('Math')}>Math</button>
        <button id="room_btn" onClick={() => setRoom('Engineering')}>Engineering</button>
      </div>

      <div className="main_content">
        {filterData.map((data, index) => (
          <Card key={index} title={data.title} room={data.room} content={data.content} />
        ))}
      </div>
    </div>
  );
}

export default All_content;
