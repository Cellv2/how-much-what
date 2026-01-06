import { composeStory } from "@storybook/react-vite";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Meta, { DefaultHeader as DefaultHeaderStory } from "./Header.stories";

const DefaultHeader = composeStory(DefaultHeaderStory, Meta);

describe("Header component", () => {
    it("should contain the passed in title in an h1", () => {
        render(<DefaultHeader />);

        const headerElement = screen.getByText("DefaultHeader", {
            selector: "h1",
        });

        expect(headerElement).toBeInTheDocument();
    });
});
