import { composeStories } from "@storybook/react-vite";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import * as stories from "./SummaryCard.stories";

const { DefaultSummaryCard } = composeStories(stories);

describe("DefaultSummaryCard", () => {
    it("should fail", () => {
        render(<DefaultSummaryCard />);

        expect(true).toBe(false);
    });

    it("should show the correct point value amount passed in", () => {});
});
