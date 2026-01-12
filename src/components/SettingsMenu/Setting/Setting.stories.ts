import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Setting } from "./Setting";

const meta = {
    title: "Components/SettingsMenu/Setting",
    component: Setting,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    args: {
        onSelect: fn(),
    },
} satisfies Meta<typeof Setting>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSetting: Story = {
    args: {
        active: true,
        label: "setting 1",
    },
};

export const ActiveSetting: Story = {
    args: {
        active: true,
        label: "Active setting",
    },
};

export const InactiveSetting: Story = {
    args: {
        active: false,
        label: "Inactive setting",
    },
};
