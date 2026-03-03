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

        const ab = screen.getByText("AB: 0");
        const av = screen.getByText("AV: 0");
        const eots = screen.getByText("EotS: 0");
        const wsg = screen.getByText("WSG: 0");

        expect(ab).toBeInTheDocument();
        expect(av).toBeInTheDocument();
        expect(eots).toBeInTheDocument();
        expect(wsg).toBeInTheDocument();
    });
});

describe("BattlegroundMarkSummaryCardWithOneMark story", () => {
    it("should render the one badge correctly", () => {
        render(<BattlegroundMarkSummaryCardWithOneMark />);

        const ab = screen.getByText("AB: 5");
        const av = screen.getByText("AV: 0");
        const eots = screen.getByText("EotS: 0");
        const wsg = screen.getByText("WSG: 0");

        expect(ab).toBeInTheDocument();
        expect(av).toBeInTheDocument();
        expect(eots).toBeInTheDocument();
        expect(wsg).toBeInTheDocument();
    });
});

describe("BattlegroundMarkSummaryCardWithAllMarks story", () => {
    it("should render all badges correctly", () => {
        render(<BattlegroundMarkSummaryCardWithAllMarks />);

        const ab = screen.getByText("AB: 5");
        const av = screen.getByText("AV: 10");
        const eots = screen.getByText("EotS: 20");
        const wsg = screen.getByText("WSG: 5");

        expect(ab).toBeInTheDocument();
        expect(av).toBeInTheDocument();
        expect(eots).toBeInTheDocument();
        expect(wsg).toBeInTheDocument();
    });
});
