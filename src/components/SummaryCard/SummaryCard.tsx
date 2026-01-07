export type SummaryCardProps = {
    label: string;
    value: number;
};

export const SummaryCard = (props: SummaryCardProps) => {
    const { label, value } = props;
    return (
        <>
            <div>{label}</div>
            <div>{value}</div>
        </>
    );
};
