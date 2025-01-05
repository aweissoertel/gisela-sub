import config from '../config';

export const fetchRaw = async () => {
    const station = localStorage.getItem('station') ?? config.stationId;
    const antiCache = Date.now();
    // don't mind me, nothing to see here 👀
    // const url = 'https://corsproxy.io/?' + encodeURIComponent(`https://www.mvg.de/api/bgw-pt/v3/departures?globalId=${station}&offsetInMinutes=${config.offset}&lol=${antiCache}`);
    const url = `https://www.mvg.de/api/bgw-pt/v3/departures?globalId=${station}&offsetInMinutes=${config.offset}&lol=${antiCache}`;
    try {
        const response = await fetch(url);
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
    return subways.sort((a, b) => a.realtimeDepartureTime - b.realtimeDepartureTime);
}
export default getSubways;
