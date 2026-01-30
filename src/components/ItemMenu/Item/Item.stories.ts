import type { Meta, StoryObj } from "@storybook/react-vite";
import { Item } from "./Item";
import { fn } from "storybook/test";

const meta = {
    title: "Components/ItemMenu/Item",
    component: Item,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    args: {
        active: false,
        onSelect: fn(),
        item: {
            currency: {
                amount: 10,
                id: "HONOR",
            },
            id: "defaultPropsStoryItem",
            name: "Default Props Story Item",
            seasonId: "SEASON_1",
            slotId: "HELM",
        },
    },
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultItem: Story = {
    args: {
        label: "DefaultItem",
    },
};

export const ActiveItem: Story = {
    args: {
        active: true,
        label: "ActiveItem",
    },
};

export const InactiveItem: Story = {
    args: {
        label: "InactiveItem",
    },
};
