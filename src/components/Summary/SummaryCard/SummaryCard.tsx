export type SummaryCardProps = {
    label: string;
    value: number;
};

export const SummaryCard = (props: SummaryCardProps) => {
    const { label, value } = props;
    return (
        <article>
            <span>{label}</span>
            <span>{value}</span>
        </article>
    );
};
