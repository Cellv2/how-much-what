import type { Meta, StoryObj } from "@storybook/react-vite";
import { SummaryCard } from "./SummaryCard";

const meta = {
    title: "Components/SummaryCard",
    component: SummaryCard,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof SummaryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSummaryCard: Story = {
    args: {
        label: "DefaultLabel",
        value: 1500,
    },
};

export const SummaryCardWithZeroValue: Story = {
    args: {
        label: "ZeroValue",
        value: 0,
    },
};
