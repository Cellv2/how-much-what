import { composeStories } from "@storybook/react-vite";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import * as stories from "./ClearGearButton.stories";
import { ClearGearButton } from "./ClearGearButton";

const { DefaultClearGearButton } = composeStories(stories);

describe("Behaviour] ClearGearButton", () => {
    it("should call the clear gear function when clicked", () => {
        const mockOnClick = vi.fn();
        render(<ClearGearButton onClick={mockOnClick} />);

        const button = screen.getByRole("button", { name: "Clear all gear" });
        fireEvent.click(button);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});

describe("[Smoke] ClearGearButton", () => {
    it("should render without crashing", () => {
        render(<DefaultClearGearButton />);

        const button = screen.getByRole("button", { name: "Clear all gear" });

        expect(button).toBeInTheDocument();
    });
});
