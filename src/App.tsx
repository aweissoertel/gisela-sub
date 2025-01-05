import React from 'react';
import getSubways from './api';
import Arrival from './Arrival';
import SubwayLabel from './SubwayLabel';
import { COLORS } from './constants';

function App() {
  const getCleanTime = (start?: number) => {
    const date = start ? new Date(start) : new Date();
    date.setSeconds(0, 0);
    return date;
  };
  
  const [trains, setTrains] = React.useState<Departure[]>([]);
  const [time, setTime] = React.useState(getCleanTime());

  React.useEffect(() => {
    getSubways().then(res => setTrains(res));
    const interval = setInterval(() => {
      setTime(getCleanTime());
      getSubways().then(res => setTrains(res));
    }, 1000*10);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      {trains.map((train, idx) => {
        const delta = (getCleanTime(train.realtimeDepartureTime).getTime() - time.getTime()) / (1000 * 60);
        return (
          <div key={idx} className="Row">
            <SubwayLabel label={train.label} color={COLORS[train.label as keyof typeof COLORS]} />
            <h1 className="Destination">{train.destination}</h1>
            <Arrival delta={delta} actual={new Date(train.realtimeDepartureTime)} />
          </div>
        );
      })}
    </div>
  )
}
export default App;
