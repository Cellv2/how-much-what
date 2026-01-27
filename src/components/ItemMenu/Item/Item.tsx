export type ItemProps = {
    active: boolean;
    label: string;
    onSelect: () => void;
};

export const Item = (props: ItemProps) => {
    const { active, label, onSelect } = props;

    return (
        <div role="option" aria-selected={active} onClick={onSelect}>
            {label}
        </div>
    );
};
