import type { NamedEntity } from "../../types/common";
import { CURRENCY } from "../currency";

export const CURRENCY_FILTER = {
    ...CURRENCY,
    BOTH: { id: "BOTH", name: "Both" },
} as const satisfies Record<string, NamedEntity>;
