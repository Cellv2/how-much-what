import type { NamedEntity } from "../types/common";

export const CURRENCY = {
    HONOR: { id: "HONOR", name: "Honor Points" },
    ARENA: { id: "HONOR", name: "Arena Points" },
} as const satisfies Record<string, NamedEntity>;

export type CurrencyId = keyof typeof CURRENCY;
export type Currency = (typeof CURRENCY)[CurrencyId];
