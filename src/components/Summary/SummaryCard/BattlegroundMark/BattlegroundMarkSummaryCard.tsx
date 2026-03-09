import type { BattlegroundMarkCost } from "../../../../models/currency";

export type BattlegroundMarkSummaryCardProps = {
    requiredBattlegroundMarks: Partial<BattlegroundMarkCost>;
};

export const BattlegroundMarkSummaryCard = (
    props: BattlegroundMarkSummaryCardProps
) => {
    const marksElements = Object.entries(props.requiredBattlegroundMarks).map(
        (objEntry) => {
            const [key, value] = objEntry;

            return (
                <span key={key}>
                    {key}: {value}
                </span>
            );
        }
    );

    return <div>{marksElements}</div>;
};
