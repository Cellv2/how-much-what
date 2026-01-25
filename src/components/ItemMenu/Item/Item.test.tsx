import { composeStories } from "@storybook/react-vite";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Item } from "./Item";
import * as stories from "./Item.stories";

const { DefaultItem } = composeStories(stories);

describe("[Behaviour] Item component", () => {
    it("should have the correct label", () => {
        render(<Item label="test" />);

        const item = screen.getByText("test");

        expect(item).toBeInTheDocument();
    });
});

describe("[Smoke] Item stories", () => {
    it("DefaultItem should not crash when rendered", () => {
        render(<DefaultItem />);

        const item = screen.getByText("DefaultItem");

        expect(item).toBeInTheDocument();
    });

    it("DefaultItem should render with the correct props", () => {
        render(<DefaultItem />);

        const item = screen.getByText("DefaultItem");

        expect(item).toBeInTheDocument();
    });
});
