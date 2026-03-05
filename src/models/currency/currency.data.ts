import type { NamedEntity } from "../../types/common";

export const CURRENCY = {
    HONOR: { id: "HONOR", name: "Honor Points" },
    ARENA: { id: "ARENA", name: "Arena Points" },
    BATTLEGROUND: { id: "BATTLEGROUND", name: "Battleground Marks" },
} as const satisfies Record<string, NamedEntity>;
