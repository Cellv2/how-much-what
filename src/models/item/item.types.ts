import type { NamedEntity } from "../../types/common";
import type { BattlegroundMarkCost, CurrencyId } from "../currency";
import type { GearSlotId } from "../gearSlot";
import type { ArenaSeasonId } from "../season";

export type ItemEntity = NamedEntity & {
    battlegroundMarks?: Partial<BattlegroundMarkCost>;
    currency: {
        id: CurrencyId;
        amount: number;
    };
    seasonId: ArenaSeasonId;
    slotId: GearSlotId;
};

export type ItemCostSummaryValue = {
    honor: number;
    badges: BattlegroundMarkCost;
    arena: number;
};
