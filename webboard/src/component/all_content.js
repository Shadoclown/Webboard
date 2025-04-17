import React, { useState } from 'react';
import Card from './card';

function All_content({ card_data }) {
  const [selectRoom, setRoom] = useState('All');

  const filterData = selectRoom === 'All' 
    ? card_data 
    : card_data.filter(item => item.category.category_name === selectRoom);

  return (
    <div>
      <div className="menu_bar">
        <button id="room_btn" onClick={() => setRoom('All')}>All</button>
        <button id="room_btn" onClick={() => setRoom('Science')}>Science</button>
        <button id="room_btn" onClick={() => setRoom('Engineer')}>Engineer</button>
        <button id="room_btn" onClick={() => setRoom('Social')}>Social</button>
        <button id="room_btn" onClick={() => setRoom('Technology')}>Technology</button>
      </div>

      <div className="main_content">
        {filterData.map((data, index) => (
          <Card
            key={index}
            title={data.title}
            category={data.category.category_name}
            content={data.content}
            username={data.user.username}
          />
        ))}
      </div>
    </div>
  );
}

export default All_content;
