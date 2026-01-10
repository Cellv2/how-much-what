import type { Meta, StoryObj } from "@storybook/react-vite";
import { Setting } from "./Setting";

const meta = {
    title: "Components/SettingsMenu/Setting",
    component: Setting,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof Setting>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSetting: Story = {
    args: {
        active: true,
        label: "setting 1",
        onSelect: () => {
            console.log("clicked");
        },
    },
};

export const ActiveSetting: Story = {
    args: {
        active: true,
        label: "Active setting",
        onSelect: () => {
            console.log("clicked");
        },
    },
};

export const InactiveSetting: Story = {
    args: {
        active: false,
        label: "Inactive setting",
        onSelect: () => {
            console.log("clicked");
        },
    },
};
