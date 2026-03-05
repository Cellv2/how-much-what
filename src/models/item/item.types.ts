import type { NamedEntity } from "../../types/common";
import type { CurrencyId } from "../currency";
import type { BattlegroundMarkId } from "../currency/battlegroundMark/battleground-mark.types";
import type { GearSlotId } from "../gearSlot";
import type { ArenaSeasonId } from "../season";

export type ItemEntity = NamedEntity & {
    battlegroundMarks?: Partial<Record<BattlegroundMarkId, number>>;
    currency: {
        id: CurrencyId;
        amount: number;
    };
    seasonId: ArenaSeasonId;
    slotId: GearSlotId;
};
