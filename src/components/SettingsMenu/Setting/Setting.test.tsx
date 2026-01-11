import { composeStories } from "@storybook/react-vite";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import * as stories from "./Setting.stories";
import { Setting } from "./Setting";
import { userEvent } from "@testing-library/user-event";

const { ActiveSetting, InactiveSetting } = composeStories(stories);

describe("[Behaviour] Setting tests", () => {
    it("should be focusable", () => {
        render(
            <Setting label="setting 1" active={false} onSelect={() => {}} />
        );
        const element = screen.getByRole("tab", { name: "setting 1" });

        element.focus();

        expect(element).toHaveFocus();
    });

    it("should allow keyboard interaction via enter", async () => {
        const mockOnSelect = vi.fn();
        render(
            <Setting label="setting 1" active={false} onSelect={mockOnSelect} />
        );
        const element = screen.getByRole("tab", { name: "setting 1" });

        element.focus();
        await userEvent.keyboard("{Enter}");

        expect(mockOnSelect).toHaveBeenCalledTimes(1);
    });

    it("should allow keyboard interaction via space", async () => {
        const mockOnSelect = vi.fn();
        render(
            <Setting label="setting 1" active={false} onSelect={mockOnSelect} />
        );
        const element = screen.getByRole("tab", { name: "setting 1" });

        element.focus();
        await userEvent.keyboard(" ");

        expect(mockOnSelect).toHaveBeenCalledTimes(1);
    });

    it("should call the onSelect function when clicked", () => {
        const mockOnSelect = vi.fn();
        render(
            <Setting label="setting 1" active={false} onSelect={mockOnSelect} />
        );

        fireEvent.click(screen.getByRole("tab", { name: "setting 1" }));

        expect(mockOnSelect).toHaveBeenCalledTimes(1);
    });
});

describe("[Smoke] Setting stories", () => {
    it("ActiveSetting renders with aria-selected=true", () => {
        render(<ActiveSetting />);
        const element = screen.getByRole("tab", { name: "Active setting" });

        expect(element).toHaveAttribute("aria-selected", "true");
        expect(element).toHaveAccessibleName("Active setting");
    });

    it("InactiveSetting renders with aria-selected=false", () => {
        render(<InactiveSetting />);
        const element = screen.getByRole("tab", { name: "Inactive setting" });

        expect(element).toHaveAttribute("aria-selected", "false");
        expect(element).toHaveAccessibleName("Inactive setting");
    });
});
