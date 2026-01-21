import { composeStories } from "@storybook/react-vite";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { GearSlot } from "./GearSlot";
import * as stories from "./GearSlot.stories";

const { ActiveGearSlot, DefaultGearSlot, InactiveGearSlot } =
    composeStories(stories);

describe("[Behaviour] GearSlot component", () => {
    it("should render with the correct label", () => {
        const label = "test-label";
        render(<GearSlot active={false} label={label} onSelect={() => {}} />);

        const option = screen.getByText(label);

        expect(option).toBeInTheDocument();
    });

    it("should render with the correct aria roles", () => {
        const label = "test-label";
        render(<GearSlot active={false} label={label} onSelect={() => {}} />);

        const option = screen.getByText(label);

        expect(option).toHaveAttribute("role", "option");
    });

    it("should have the correct aria roles when active", () => {
        const isActive = true;
        render(<GearSlot active={isActive} label="test" onSelect={() => {}} />);

        const option = screen.getByRole("option");

        expect(option).toHaveAttribute("aria-selected", "true");
    });

    it("should call the onSelect function when clicked", () => {
        const label = "test-label";
        const mockOnSelect = vi.fn();
        render(
            <GearSlot active={false} label={label} onSelect={mockOnSelect} />
        );

        const option = screen.getByText(label);
        fireEvent.click(option);

        expect(mockOnSelect).toHaveBeenCalledOnce();
    });

    it("should rerender correctly when active state is changed", () => {
        const { rerender } = render(
            <GearSlot active={false} label="x" onSelect={() => {}} />
        );

        let option = screen.getByRole("option");
        expect(option).toHaveAttribute("aria-selected", "false");

        rerender(<GearSlot active={true} label="x" onSelect={() => {}} />);
        option = screen.getByRole("option");

        expect(option).toHaveAttribute("aria-selected", "true");
    });
});

describe("[Smoke] GearSlot stories", () => {
    it("DefaultGearSlot renders without crashing", () => {
        render(<DefaultGearSlot />);

        const option = screen.getByRole("option");

        expect(option).toBeInTheDocument();
        expect(option).toHaveTextContent("DefaultLabel");
    });

    it("ActiveGearSlot renders with aria-selected=true", () => {
        render(<ActiveGearSlot />);

        const option = screen.getByRole("option");

        expect(option).toHaveAttribute("aria-selected", "true");
    });

    it("InactiveGearSlot renders with aria-selected=false", () => {
        render(<InactiveGearSlot />);

        const option = screen.getByRole("option");

        expect(option).toHaveAttribute("aria-selected", "false");
    });
});
