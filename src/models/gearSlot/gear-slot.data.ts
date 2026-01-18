import type { NamedEntity } from "../../types/common";
import type { GearSlotId } from "./gear-slot.types";

export const GEAR_SLOT = {
    HELM: { id: "HELM", name: "Helm" },
    SHOULDER: { id: "SHOULDER", name: "Shoulder" },
    NECK: { id: "NECK", name: "Neck" },
    BACK: { id: "BACK", name: "Back" },
    CHEST: { id: "CHEST", name: "Chest" },
    WRIST: { id: "WRIST", name: "Bracers" },
    GLOVES: { id: "GLOVES", name: "Gloves" },
    BELT: { id: "BELT", name: "Belt" },
    LEGS: { id: "LEGS", name: "Legs" },
    FEET: { id: "FEET", name: "Boots" },
    RING_1: { id: "RING_1", name: "Ring 1" },
    RING_2: { id: "RING_2", name: "Ring 2" },
    TRINKET_1: { id: "TRINKET_1", name: "Trinket 1" },
    TRINKET_2: { id: "TRINKET_2", name: "Trinket 2" },
    WEAPON: { id: "WEAPON", name: "Weapon" },
    OFFHAND: { id: "OFFHAND", name: "Offhand" },
    RANGED: { id: "RANGED", name: "Ranged / Relic" },
} as const satisfies Record<string, NamedEntity>;

export const DEFAULT_GEAR_SLOT: GearSlotId = GEAR_SLOT.HELM.id;
