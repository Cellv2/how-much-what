import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { ClearGearButton } from "./ClearGearButton";

const meta = {
    title: "Components/GearMenu/ClearGearButton/ClearGearButton",
    component: ClearGearButton,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    args: {
        onClick: fn(),
    },
} satisfies Meta<typeof ClearGearButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultClearGearButton: Story = {};
