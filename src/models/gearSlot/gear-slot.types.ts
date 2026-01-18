import type { GEAR_SLOT } from "./gear-slot.data";

export type GearSlotId = keyof typeof GEAR_SLOT;
export type GearSlot = (typeof GEAR_SLOT)[GearSlotId];
