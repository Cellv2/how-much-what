import { BATTLEGROUND_MARK } from "./battleground-mark.data";
import type {
    BattlegroundMark,
    BattlegroundMarkId,
} from "./battleground-mark.types";

export const getBattlegroundMarkById = (
    bgMark: BattlegroundMarkId
): BattlegroundMark => BATTLEGROUND_MARK[bgMark];
