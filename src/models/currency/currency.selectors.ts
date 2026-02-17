import { CURRENCY } from "./currency.data";
import type { Currency, CurrencyId } from "./currency.types";

export const getCurrencyById = (currencyId: CurrencyId): Currency =>
    CURRENCY[currencyId];
