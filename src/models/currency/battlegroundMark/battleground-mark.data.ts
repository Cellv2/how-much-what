import type { NamedEntity } from "../../../types/common";

type BattlegroundMarkKind = "AB" | "AV" | "EOTS" | "WSG";

export const BATTLEGROUND_MARK = {
    AB: { id: "AB", name: "Arathi Basin" },
    AV: { id: "AV", name: "Alterac Valley" },
    EOTS: { id: "EOTS", name: "Eye of the Storm" },
    WSG: { id: "WSG", name: "Warsong Gulch" },
} as const satisfies Record<BattlegroundMarkKind, NamedEntity>;
