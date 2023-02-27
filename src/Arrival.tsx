export interface ArrivalProps {
    departureTime: number;
    delay?: number;
}

const Arrival = ({ departureTime, delay }: ArrivalProps) => {
    const now = new Date();
    now.setSeconds(0, 0);
    const departure = new Date(departureTime);
    const delta = (departure.getTime() - now.getTime()) / (1000 * 60) + (delay ?? 0);

    return (
        <h1 className="Arrival">
            {delta}
        </h1>
    );
};
export default Arrival;
