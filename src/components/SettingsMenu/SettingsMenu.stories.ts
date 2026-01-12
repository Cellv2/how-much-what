import type { Meta, StoryObj } from "@storybook/react-vite";
import { SettingsMenu } from "./SettingsMenu";

const meta = {
    title: "Components/SettingsMenu",
    component: SettingsMenu,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof SettingsMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSettingsMenu: Story = {
    args: { initialActive: "setting 1" },
};

export const PreselectedSetting: Story = {
    args: {
        initialActive: "setting 2",
        initialActiveCurrencyFilter: "ARENA",
        initialActiveExpansion: "TBC",
        initialActiveSeason: "SEASON_4",
    },
};
