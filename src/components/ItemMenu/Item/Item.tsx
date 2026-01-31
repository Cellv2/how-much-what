import type { ItemEntity } from "../../../models/item";

export type ItemProps = {
    active: boolean;
    onSelect: () => void;
    item: ItemEntity;
};

export const Item = (props: ItemProps) => {
    const { active, onSelect, item } = props;

    return (
        <div role="option" aria-selected={active} onClick={onSelect}>
            <span>{item.name}</span>
            <span>{item.currency.amount}</span>
        </div>
    );
};
