import { composeStories } from "@storybook/react-vite";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import * as stories from "./SummaryCard.stories";

const { DefaultSummaryCard, SummaryCardWithZeroValue } =
    composeStories(stories);

describe("DefaultSummaryCard story", () => {
    it("should show the correct label", () => {
        render(<DefaultSummaryCard />);

        const element = screen.getByText("DefaultLabel");

        expect(element).toBeInTheDocument();
    });

    it("should show the correct point value amount passed in", () => {
        render(<DefaultSummaryCard />);

        const element = screen.getByText("1500");

        expect(element).toBeInTheDocument();
    });
});

describe("SummaryCardWithZeroValue story", () => {
    it("should render without issue with a 0 value", () => {
        render(<SummaryCardWithZeroValue />);

        const element = screen.getByText("0");

        expect(element).toBeInTheDocument();
    });
});
