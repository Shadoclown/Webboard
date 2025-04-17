import React, { useEffect, useState } from 'react';
import Homepage from './component/homepage';

function App() {
  const [setPage, setPageState] = useState('Home');
  return (
    <div>
      {setPage === 'Home' && <Homepage />}
    </div>
  );
}

export default App;
