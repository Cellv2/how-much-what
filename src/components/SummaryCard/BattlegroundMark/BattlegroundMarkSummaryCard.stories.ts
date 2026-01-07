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

export const DefaultBattlegroundMarkSummaryCard: Story = {};

export const BattlegroundMarkSummaryCardWithOneMark: Story = {};

export const BattlegroundMarkSummaryCardWithAllMarks: Story = {};
