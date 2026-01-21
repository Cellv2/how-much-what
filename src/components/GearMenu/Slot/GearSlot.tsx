export type GearSlotProps = {
    active: boolean;
    label: string;
    onSelect: () => void;
};

export const GearSlot = (props: GearSlotProps) => {
    const { active, label, onSelect } = props;
    return (
        <li aria-selected={active} role="option" onClick={onSelect}>
            {label}
        </li>
    );
};
