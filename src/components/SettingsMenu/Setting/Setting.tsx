export type SettingProps = {
    active: boolean;
    label: string;
    onSelect: () => void;
};

export const Setting = (settings: SettingProps) => {
    const { active, label, onSelect } = settings;

    return (
        <button aria-selected={active} role="tab" onClick={onSelect}>
            {label}
        </button>
    );
};
