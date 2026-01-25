export type ItemProps = {
    label: string;
};

export const Item = (props: ItemProps) => {
    const { label } = props;

    return <div>{label}</div>;
};
