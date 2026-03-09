import { CURRENCY } from "../../models/currency";
import { calculateTotalItemCosts, type ItemEntity } from "../../models/item";
import { BattlegroundMarkSummaryCard } from "./SummaryCard/BattlegroundMark/BattlegroundMarkSummaryCard";
import { SummaryCard } from "./SummaryCard/SummaryCard";

export type SummaryProps = {
    items: ItemEntity[];
};

export const Summary = (props: SummaryProps) => {
    const summaryValues = calculateTotalItemCosts(props.items);

    return (
        <>
            <h2>Total Costs</h2>
            <SummaryCard
                label={CURRENCY.ARENA.name}
                value={summaryValues.arena}
            />
            <SummaryCard
                label={CURRENCY.HONOR.name}
                value={summaryValues.honor}
            />
            {/* TODO: add badges  */}
            <SummaryCard label="Badges" value={0} />
            <BattlegroundMarkSummaryCard requiredBattlegroundMarks={{}} />
        </>
    );
};
