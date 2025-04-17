import React, { useEffect, useState } from 'react';
import '../style_component/homepage.css';
import All_content from './all_content';
import { supabase } from './connect';


function Homepage() {
    const [cardData, setCardData] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
        const { data } = await supabase
            .from('information')
            .select(`
            info_id,
            content,
            title,
            category:category (category_name),
            user:user_id (username)
            `);

            setCardData(data);
            console.log(data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h3 className='choose'>Choose Your Favorite Category</h3>
            <All_content card_data={cardData} />
        </div>
    );
}

export default Homepage;