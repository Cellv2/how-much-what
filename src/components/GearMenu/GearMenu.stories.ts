import type { Meta, StoryObj } from "@storybook/react-vite";
import { GearMenu } from "./GearMenu";

const meta = {
    title: "Components/GearMenu",
    component: GearMenu,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof GearMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultGearMenu: Story = {};
