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
    const subways = raw.departures.filter(sub => sub.product === 'UBAHN');
    return subways;
}
export default getSubways;
