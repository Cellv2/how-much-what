import type { CURRENCY_FILTER } from "./currency-filter.data";

export type CurrencyFilterId = keyof typeof CURRENCY_FILTER;
export type CurrencyFilter = (typeof CURRENCY_FILTER)[CurrencyFilterId];
