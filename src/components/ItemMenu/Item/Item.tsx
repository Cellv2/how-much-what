import type { ItemEntity } from "../../../models/item";

export type ItemProps = {
    active: boolean;
    label: string;
    onSelect: () => void;
    item: ItemEntity;
};

export const Item = (props: ItemProps) => {
    const { active, label, onSelect, item } = props;

    return (
        <div role="option" aria-selected={active} onClick={onSelect}>
            <span>{label}</span>
            <span>{item.currency.amount}</span>
        </div>
    );
};
