import type { ItemEntity } from "./item.types";

export const ITEM = {
    SEASON_1_HELM: {
        id: "SEASON_1_HELM",
        name: "Helm",
        slotId: "HELM",
        currency: {
            id: "HONOR",
            amount: 500,
        },
        seasonId: "SEASON_1",
    },
    SEASON_2_HELM: {
        id: "SEASON_2_HELM",
        name: "Helm",
        slotId: "HELM",
        currency: {
            id: "HONOR",
            amount: 500,
        },
        seasonId: "SEASON_2",
    },
} as const satisfies Record<string, ItemEntity>;
