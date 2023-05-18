export interface ArrivalProps {
    delta?: number
}

const Arrival = ({ delta = 0 }: ArrivalProps) => {
    const displayDelta = delta <= 0 ? 'Jetzt' : delta;

    return (
        <h1 className="Arrival">
            {displayDelta}
        </h1>
    );
};
export default Arrival;
