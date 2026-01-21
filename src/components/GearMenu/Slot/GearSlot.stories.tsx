import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { GearSlot } from "./GearSlot";

const meta = {
    title: "Components/GearMenu/GearSlot",
    component: GearSlot,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    args: {
        active: true,
        label: "DefaultLabel",
        onSelect: fn(),
    },
} satisfies Meta<typeof GearSlot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultGearSlot: Story = {};

export const ActiveGearSlot: Story = {
    args: {
        label: "ActiveGearSlot",
    },
};

export const InactiveGearSlot: Story = {
    args: {
        active: false,
        label: "InactiveGearSlot",
    },
};
