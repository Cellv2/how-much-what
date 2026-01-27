import { composeStories } from "@storybook/react-vite";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Item } from "./Item";
import * as stories from "./Item.stories";

const { DefaultItem } = composeStories(stories);

describe("[Behaviour] Item component", () => {
    it("should have the correct label", () => {
        render(<Item active={false} label="test" onSelect={() => {}} />);

        const item = screen.getByRole("option");

        expect(item).toBeInTheDocument();
    });

    it("should call the onSelect function when clicked", () => {
        const mockOnSelect = vi.fn();
        render(<Item active={false} label="test" onSelect={mockOnSelect} />);

        const item = screen.getByRole("option");

        fireEvent.click(item);

        expect(mockOnSelect).toHaveBeenCalledOnce();
    });

    it("should render with the correct aria roles", () => {
        render(<Item active={false} label="test" onSelect={() => {}} />);

        const item = screen.getByText("test");

        expect(item).toHaveAttribute("role", "option");
    });

    it("should have the correct aria attributes when active", () => {
        render(<Item active={true} label="test" onSelect={() => {}} />);

        const option = screen.getByRole("option");

        expect(option).toHaveAttribute("aria-selected", "true");
    });

    it("should rerender correctly when active state is changed", () => {
        const { rerender } = render(
            <Item active={false} label="test" onSelect={() => {}} />
        );

        let option = screen.getByRole("option");
        expect(option).toHaveAttribute("aria-selected", "false");

        rerender(<Item active={true} label="test" onSelect={() => {}} />);

        option = screen.getByRole("option");
        expect(option).toHaveAttribute("aria-selected", "true");
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
