import type { CURRENCY } from "./currency.data";

export type CurrencyId = keyof typeof CURRENCY;
export type Currency = (typeof CURRENCY)[CurrencyId];
