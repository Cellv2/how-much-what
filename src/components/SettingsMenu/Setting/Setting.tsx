export type SettingProps = {
    active: boolean;
    label: string;
    onSelect: () => void;
};

export const Setting = (props: SettingProps) => {
    const { active, label, onSelect } = props;

    return (
        <button aria-selected={active} role="tab" onClick={onSelect}>
            {label}
        </button>
    );
};
