import type { NamedEntity } from "../../types/common";
import type { CurrencyId } from "../currency";
import type { GearSlotId } from "../gearSlot";
import type { ArenaSeasonId } from "../season";

export type ItemEntity = NamedEntity & {
    currency: {
        id: CurrencyId;
        amount: number;
    };
    seasonId: ArenaSeasonId;
    slotId: GearSlotId;
};
