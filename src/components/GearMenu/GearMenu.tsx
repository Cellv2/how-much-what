import { GEAR_SLOT, getGearSlotIds } from "../../models/gearSlot";

export const GearMenu = () => {
    const slotIds = getGearSlotIds();
    const menuSlots = slotIds.map((slotId) => {
        const slotLabel = GEAR_SLOT[slotId].name;
        return (
            <li role="listitem" key={slotId}>
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
