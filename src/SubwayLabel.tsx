export interface SubwayLabelProps {
    label: string;
    color: string;
}

const SubwayLabel = ({ label, color }: SubwayLabelProps) => (
    <div className="SubwayLabel" style={{ backgroundColor: color }}>
        <span className="SubwayLabelContent">
            {label}
        </span>
    </div>
);
export default SubwayLabel;
