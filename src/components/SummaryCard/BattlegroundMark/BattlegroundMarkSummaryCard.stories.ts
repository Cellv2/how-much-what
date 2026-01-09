import type { Meta, StoryObj } from "@storybook/react-vite";
import { BattlegroundMarkSummaryCard } from "./BattlegroundMarkSummaryCard";

const meta = {
    title: "Components/SummaryCard/BattlegroundMark/BattlegroundMarkSummaryCard",
    component: BattlegroundMarkSummaryCard,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof BattlegroundMarkSummaryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultBattlegroundMarkSummaryCard: Story = {
    args: {
        requiredBattlegroundMarks: {
            AB: 0,
            AV: 0,
            EotS: 0,
            WSG: 0,
        },
    },
};

export const BattlegroundMarkSummaryCardWithOneMark: Story = {
    args: {
        requiredBattlegroundMarks: {
            AB: 5,
            AV: 0,
            EotS: 0,
            WSG: 0,
        },
    },
};

export const BattlegroundMarkSummaryCardWithAllMarks: Story = {
    args: {
        requiredBattlegroundMarks: {
            AB: 5,
            AV: 10,
            EotS: 20,
            WSG: 5,
        },
    },
};
