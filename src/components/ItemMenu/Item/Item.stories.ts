import type { Meta, StoryObj } from "@storybook/react-vite";
import { Item } from "./Item";

const meta = {
    title: "Components/ItemMenu/Item",
    component: Item,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultItem: Story = {
    args: {
        label: "DefaultItem",
    },
};
