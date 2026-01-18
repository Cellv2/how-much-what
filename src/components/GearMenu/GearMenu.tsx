import { getGearSlotNames } from "../../models/gearSlot";

export const GearMenu = () => {
    const slotNames = getGearSlotNames();
    const menuSlots = slotNames.map((slot) => {
        return (
            <li role="listitem" key={slot}>
                {slot}
            </li>
        );
    });

    return (
        <ul role="list" aria-label="gearSlot-selector">
            {menuSlots}
        </ul>
    );
};
