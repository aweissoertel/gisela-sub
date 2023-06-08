import config from '../config';

export const fetchRaw = async () => {
    try {
        const response = await fetch(`https://www.mvg.de/api/fib/v2/departure?globalId=${config.stationId}&offset=${config.offset}`);
        const data = await response.json() as Departure[];
        return data;
    } catch (e) {
        console.error(e);
    }
};

const getSubways = async () => {
    const raw = await fetchRaw();
    if (!raw) { return []; }
    const subways = raw.filter(sub => sub.transportType === 'UBAHN').slice(0,config.itemsDisplayed);
    return subways.sort((a, b) => a.realtimeDepartureTime- b.realtimeDepartureTime);
}
export default getSubways;
