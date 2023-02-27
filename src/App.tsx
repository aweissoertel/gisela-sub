import React from 'react';
import getSubways from './api';
import Arrival from './Arrival';
import SubwayLabel from './SubwayLabel';

function App() {
  const [trains, setTrains] = React.useState<Departure[]>([]);

  React.useEffect(() => {
    getSubways().then(res => setTrains(res));
  }, []);

  return (
    <div className="App">
      {trains.slice(0,8).map((train, idx) => (
        <div key={idx} className="Row">
          <SubwayLabel label={train.label} color={train.lineBackgroundColor} />
          <h1 className="Destination">{train.destination}</h1>
          <Arrival departureTime={train.departureTime} delay={train.delay} />
        </div>
      ))}
    </div>
  )
}

export default App;
