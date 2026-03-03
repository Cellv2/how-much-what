import type { Meta, StoryObj } from "@storybook/react-vite";
import { Summary } from "./Summary";

const meta = {
    title: "Components/Summary",
    component: Summary,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    args: {
        items: [],
    },
} satisfies Meta<typeof Summary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSummary: Story = {};
