import React from 'react';
import getSubways from './api';

function App() {
  React.useEffect(() => {
    getSubways().then(res => console.log(res));
  }, []);

  return (
    <div className="App">
      <h1 style={{ padding: '2rem' }}>Test</h1>
    </div>
  )
}

export default App
