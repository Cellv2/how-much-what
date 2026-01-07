import { composeStories } from "@storybook/react-vite";

import * as stories from "./BattlegroundMarkSummaryCard.stories";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

const {
    DefaultBattlegroundMarkSummaryCard,
    BattlegroundMarkSummaryCardWithAllMarks,
    BattlegroundMarkSummaryCardWithOneMark,
} = composeStories(stories);

describe("DefaultBattlegroundMarkSummaryCard story", () => {
    it("should render badges correctly", () => {
        render(<DefaultBattlegroundMarkSummaryCard />);

        const element = screen.getByText("");

        expect(element).toBeInTheDocument();
    });
});

describe("BattlegroundMarkSummaryCardWithAllMarks story", () => {
    it("should render all badges correctly", () => {
        render(<BattlegroundMarkSummaryCardWithAllMarks />);

        const element = screen.getByText("");

        expect(element).toBeInTheDocument();
    });
});

describe("BattlegroundMarkSummaryCardWithOneMark story", () => {
    it("should render the one badge correctly", () => {
        render(<BattlegroundMarkSummaryCardWithOneMark />);

        const element = screen.getByText("");

        expect(element).toBeInTheDocument();
    });
});
