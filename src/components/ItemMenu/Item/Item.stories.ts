import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import type { ItemEntity } from "../../../models/item";
import { Item } from "./Item";

const defaultItem = {
    currency: {
        amount: 10,
        id: "HONOR",
    },
    id: "defaultPropsStoryItem",
    name: "DefaultItem",
    seasonId: "SEASON_1",
    slotId: "HELM",
} satisfies ItemEntity;

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
        item: defaultItem,
    },
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultItem: Story = {};

export const ActiveItem: Story = {
    args: {
        active: true,
        item: {
            ...defaultItem,
            name: "ActiveItem",
        },
    },
};

export const InactiveItem: Story = {
    args: {
        item: {
            ...defaultItem,
            name: "InactiveItem",
        },
    },
};
