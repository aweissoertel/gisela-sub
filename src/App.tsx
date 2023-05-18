import React from 'react';
import getSubways from './api';
import Arrival from './Arrival';
import SubwayLabel from './SubwayLabel';

function App() {
  const [trains, setTrains] = React.useState<Departure[]>([]);
  const [time, setTime] = React.useState(Date.now());

  React.useEffect(() => {
    getSubways().then(res => setTrains(res));
    const interval = setInterval(() => {
      setTime(Date.now());
      getSubways().then(res => setTrains(res));
    }, 1000*10);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App" key={time}>
      {trains.map((train, idx) => (
        <div key={idx} className="Row">
          <SubwayLabel label={train.label} color={train.lineBackgroundColor} />
          <h1 className="Destination">{train.destination}</h1>
          <Arrival delta={train.delta} />
        </div>
      ))}
    </div>
  )
}

export default App;
