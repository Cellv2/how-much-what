import type { NamedEntity } from "../types/common";
import { CURRENCY } from "./currency";

export const CURRENCY_FILTER = {
    ...CURRENCY,
    BOTH: { id: "BOTH", name: "Both" },
} as const satisfies Record<string, NamedEntity>;

export type CurrencyFilterId = keyof typeof CURRENCY_FILTER;
export type CurrencyFilter = (typeof CURRENCY_FILTER)[CurrencyFilterId];
