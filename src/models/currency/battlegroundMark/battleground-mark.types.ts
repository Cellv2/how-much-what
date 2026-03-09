import type { BATTLEGROUND_MARK } from "./battleground-mark.data";

export type BattlegroundMarkId = keyof typeof BATTLEGROUND_MARK;
export type BattlegroundMark = (typeof BATTLEGROUND_MARK)[BattlegroundMarkId];

export type BattlegroundMarkCost = Record<BattlegroundMarkId, number>;
