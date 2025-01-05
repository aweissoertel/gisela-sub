export interface ArrivalProps {
    delta?: number;
    actual: Date;
}

const Arrival = ({ delta = 0, actual }: ArrivalProps) => {
    const displayDelta = delta <= 0 ? 'Jetzt' : delta;
    const displayPadded = (valAsNumber: number) => valAsNumber.toString().padStart(2, '0');

    return (
        <h1 className="Arrival">
            ({displayPadded(actual.getHours())}:{displayPadded(actual.getMinutes())}) {displayDelta}
        </h1>
    );
};
export default Arrival;
