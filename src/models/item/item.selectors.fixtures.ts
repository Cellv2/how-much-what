import type { ItemCostSummaryValue, ItemEntity } from "./item.types";

const defaultItem: ItemEntity = {
    currency: {
        id: "HONOR",
        amount: 0,
    },
    id: "DEFAULT_ITEM",
    name: "Default Item",
    seasonId: "SEASON_1",
    slotId: "BACK",
};

const honorTest: ItemEntity[] = [
    {
        ...defaultItem,
        currency: {
            amount: 1000,
            id: "HONOR",
        },
    },
];
const honorTestResult: ItemCostSummaryValue = {
    arena: 0,
    honor: 1000,
    badges: { AB: 0, AV: 0, EOTS: 0, WSG: 0 },
};

const honorAndMarkTest: ItemEntity[] = [
    {
        ...defaultItem,
        currency: {
            amount: 123,
            id: "HONOR",
        },
        battlegroundMarks: {
            AB: 5,
        },
    },
];
const honorAndMarkTestResult: ItemCostSummaryValue = {
    arena: 0,
    honor: 123,
    badges: { AB: 5, AV: 0, EOTS: 0, WSG: 0 },
};

const arenaTest: ItemEntity[] = [
    {
        ...defaultItem,
        currency: {
            amount: 3000,
            id: "ARENA",
        },
    },
];
const arenaTestResult: ItemCostSummaryValue = {
    arena: 3000,
    honor: 0,
    badges: { AB: 0, AV: 0, EOTS: 0, WSG: 0 },
};

const multiHonorAndMarkTest: ItemEntity[] = [
    {
        ...defaultItem,
        currency: {
            amount: 20000,
            id: "HONOR",
        },
        battlegroundMarks: {
            EOTS: 40,
        },
    },
    {
        ...defaultItem,
        currency: {
            amount: 15000,
            id: "HONOR",
        },
        battlegroundMarks: {
            EOTS: 20,
        },
    },
    {
        ...defaultItem,
        currency: {
            amount: 15000,
            id: "HONOR",
        },
        battlegroundMarks: {
            WSG: 15,
        },
    },
];
const multiHonorAndMarkTestResult: ItemCostSummaryValue = {
    arena: 0,
    honor: 50000,
    badges: {
        AB: 0,
        AV: 0,
        EOTS: 60,
        WSG: 15,
    },
};

const multiHonorArenaMarkTest: ItemEntity[] = [
    {
        ...defaultItem,
        currency: {
            amount: 1,
            id: "HONOR",
        },
        battlegroundMarks: {
            AV: 20,
        },
    },
    {
        ...defaultItem,
        currency: {
            amount: 49000,
            id: "HONOR",
        },
        battlegroundMarks: {
            EOTS: 40,
        },
    },
    {
        ...defaultItem,
        currency: {
            amount: 1500,
            id: "ARENA",
        },
    },
    {
        ...defaultItem,
        currency: {
            amount: 750,
            id: "ARENA",
        },
    },
];
const multiHonorArenaMarkTestResult: ItemCostSummaryValue = {
    arena: 2250,
    honor: 49001,
    badges: {
        AB: 0,
        AV: 20,
        EOTS: 40,
        WSG: 0,
    },
};

export const calculateTotalItemCostsCases: Array<
    [ItemEntity[], ItemCostSummaryValue]
> = [
    [honorTest, honorTestResult],
    [honorAndMarkTest, honorAndMarkTestResult],
    [arenaTest, arenaTestResult],
    [multiHonorAndMarkTest, multiHonorAndMarkTestResult],
    [multiHonorArenaMarkTest, multiHonorArenaMarkTestResult],
];
