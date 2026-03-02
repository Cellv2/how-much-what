export type ClearGearButtonProps = {
    onClick: () => void;
};

export const ClearGearButton = (props: ClearGearButtonProps) => {
    const { onClick } = props;
    return (
        <button aria-label="Clear all gear" onClick={onClick}>
            Clear All Gear
        </button>
    );
};
