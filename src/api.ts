export const fetchRaw = async () => {
    try {
        const response = await fetch("https://www.mvg.de/api/fahrinfo/departure/de:09162:80");
        const data = await response.json() as ApiResponse;
        return data;
    } catch (e) {
        console.error(e);
    }
};

const getSubways = async () => {
    const raw = await fetchRaw();
    if (!raw) { return []; }
    const subways = raw.departures.filter(sub => sub.product === 'UBAHN').slice(0,8);
    const now = new Date();
    now.setSeconds(0, 0);
    subways.forEach((subway) => {
        const departure = new Date(subway.departureTime);
        subway.delta = (departure.getTime() - now.getTime()) / (1000 * 60) + (subway.delay ?? 0);
    });
    return subways.sort((a, b) => (a.delta ?? 0) - (b.delta ?? 0));
}
export default getSubways;
