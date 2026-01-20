import { useState } from "react";
import {
    DEFAULT_GEAR_SLOT,
    GEAR_SLOT,
    getGearSlotIds,
    type GearSlotId,
} from "../../models/gearSlot";

export const GearMenu = () => {
    const [activeGearSlot, setActiveGearSlot] =
        useState<GearSlotId>(DEFAULT_GEAR_SLOT);

    const slotIds = getGearSlotIds();
    const menuSlots = slotIds.map((slotId) => {
        const slotLabel = GEAR_SLOT[slotId].name;
        return (
            <li
                aria-selected={slotId === activeGearSlot}
                role="listitem"
                key={slotId}
                onClick={() => {
                    setActiveGearSlot(slotId);
                }}
            >
                {slotLabel}
            </li>
        );
    });

    return (
        <ul role="list" aria-label="gearSlot-selector">
            {menuSlots}
        </ul>
    );
};
