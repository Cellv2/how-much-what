import { CURRENCY } from "../../models/currency";
import type { ItemEntity } from "../../models/item";
import { SummaryCard } from "./SummaryCard/SummaryCard";

export type SummaryProps = {
    items: ItemEntity[];
};

// TODO: move this into its own file
type SummaryValue = { honor: number; badges: number; arena: number };
const calculateTotalCosts = (items: ItemEntity[]): SummaryValue => {
    const vals = items.reduce<SummaryValue>(
        (acc, curr) => {
            const { currency } = curr;
            const { amount, id } = currency;

            if (id === CURRENCY.HONOR.id) {
                acc["honor"] += amount;
            }

            if (id === CURRENCY.ARENA.id) {
                acc["arena"] += amount;
            }

            return acc;
        },
        { arena: 0, badges: 0, honor: 0 } satisfies SummaryValue
    );

    return vals;
};

export const Summary = (props: SummaryProps) => {
    const summaryValues = calculateTotalCosts(props.items);

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
        </>
    );
};
