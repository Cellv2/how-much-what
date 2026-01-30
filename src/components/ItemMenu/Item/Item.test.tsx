import { composeStories } from "@storybook/react-vite";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Item, type ItemProps } from "./Item";
import * as stories from "./Item.stories";
import type { ItemEntity } from "../../../models/item";

const { DefaultItem, ActiveItem, InactiveItem } = composeStories(stories);

const defaultProps: ItemProps = {
    active: false,
    label: "test",
    onSelect: vi.fn(),
    item: {
        currency: {
            amount: 500,
            id: "HONOR",
        },
        id: "defaultPropsItem",
        name: "Default Props Item",
        seasonId: "SEASON_1",
        slotId: "HELM",
    },
};

const renderItemComponent = (props?: Partial<ItemProps>) =>
    render(<Item {...defaultProps} {...props} />);

describe("[Behaviour] Item component", () => {
    it("should have the correct label", () => {
        renderItemComponent();

        const item = screen.getByRole("option");

        expect(item).toBeInTheDocument();
    });

    it("should call the onSelect function when clicked", () => {
        const mockOnSelect = vi.fn();
        renderItemComponent({ onSelect: mockOnSelect });

        const item = screen.getByRole("option");

        fireEvent.click(item);

        expect(mockOnSelect).toHaveBeenCalledOnce();
    });

    it("should render with the correct aria roles", () => {
        renderItemComponent();

        const item = screen.getByText("test");
        const itemParent = item.parentElement;

        expect(itemParent).toHaveAttribute("role", "option");
    });

    it("should have the correct aria attributes when active", () => {
        renderItemComponent({ active: true });

        const option = screen.getByRole("option");

        expect(option).toHaveAttribute("aria-selected", "true");
    });

    it("should rerender correctly when active state is changed", () => {
        const { rerender } = renderItemComponent({ active: false });

        let option = screen.getByRole("option");
        expect(option).toHaveAttribute("aria-selected", "false");

        rerender(<Item {...defaultProps} active={true} />);

        option = screen.getByRole("option");
        expect(option).toHaveAttribute("aria-selected", "true");
    });

    it("should show the correct currency value", () => {
        const item: ItemEntity = {
            ...defaultProps.item,
            currency: { amount: 1500, id: "HONOR" },
        };
        renderItemComponent({ item });

        const option = screen.getByRole("option");
        const currencyValue = within(option).getByText("1500");

        expect(currencyValue).toBeInTheDocument();
    });
});

describe("[Smoke] Item stories", () => {
    it("DefaultItem should not crash when rendered", () => {
        render(<DefaultItem />);

        const item = screen.getByRole("option");

        expect(item).toBeInTheDocument();
        expect(item).toHaveTextContent("DefaultItem");
    });

    it("ActiveItem should render with aria-selected=true", () => {
        render(<ActiveItem />);

        const item = screen.getByRole("option");

        expect(item).toHaveAttribute("aria-selected", "true");
    });

    it("InactiveItem should render with aria-selected=false", () => {
        render(<InactiveItem />);

        const item = screen.getByRole("option");

        expect(item).toHaveAttribute("aria-selected", "false");
    });
});
