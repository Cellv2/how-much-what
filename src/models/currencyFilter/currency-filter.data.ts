import type { NamedEntity } from "../../types/common";
import { CURRENCY } from "../currency";
import type { CurrencyFilterId } from "./currency-filter.types";

export const CURRENCY_FILTER = {
    ...CURRENCY,
    BOTH: { id: "BOTH", name: "Both" },
} as const satisfies Record<string, NamedEntity>;

export const DEFAULT_CURRENCY_FILTER: CurrencyFilterId =
    CURRENCY_FILTER.BOTH.id;
