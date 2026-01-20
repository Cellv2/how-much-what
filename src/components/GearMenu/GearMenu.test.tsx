import { composeStories } from "@storybook/react-vite";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
    DEFAULT_GEAR_SLOT,
    GEAR_SLOT,
    getGearSlotNames,
} from "../../models/gearSlot";
import { expectToBeDefined } from "../../tests/assertions";
import { GearMenu } from "./GearMenu";
import * as stories from "./GearMenu.stories";

const { DefaultGearMenu } = composeStories(stories);

describe("[Behaviour] GearMenu component", () => {
    it("should render each expected gear slot", () => {
        render(<GearMenu />);

        const slots = getGearSlotNames();

        for (const slot of slots) {
            const element = screen.getByText(slot);
            expect(element).toBeInTheDocument();
        }
    });

    it("should render slots in the correct order", () => {
        render(<GearMenu />);

        const expected = getGearSlotNames();

        const container = screen.getByRole("list", {
            name: "gearSlot-selector",
        });
        const childArr = Array.from(container.children);

        const actual = childArr.map((item) => item.textContent);

        expect(actual).toEqual(expected);
    });

    it("should have the correct default slot set to active on render", () => {
        render(<GearMenu />);

        const defaultSlotLabel = GEAR_SLOT[DEFAULT_GEAR_SLOT].name;

        const list = screen.getByRole("list", { name: "gearSlot-selector" });
        const defaultSlot = within(list).getByText(defaultSlotLabel);

        expect(list).toBeInTheDocument();
        expect(defaultSlot).toHaveAttribute("aria-selected", "true");
    });

    it("should activate the correct gear slot when clicked", () => {
        render(<GearMenu />);

        const list = screen.getByRole("list", { name: "gearSlot-selector" });
        const helm = within(list).getByText(GEAR_SLOT.HELM.name);
        const shoulder = within(list).getByText(GEAR_SLOT.SHOULDER.name);

        expectToBeDefined(helm, "Helm slot");
        expectToBeDefined(shoulder, "Shoulder slot");

        fireEvent.click(helm);
        expect(helm).toHaveAttribute("aria-selected", "true");
        expect(shoulder).toHaveAttribute("aria-selected", "false");

        fireEvent.click(shoulder);
        expect(helm).toHaveAttribute("aria-selected", "false");
        expect(shoulder).toHaveAttribute("aria-selected", "true");
    });
});

describe("[Smoke] GearMenu stories", () => {
    it("should render the component without crashing", () => {
        render(<DefaultGearMenu />);

        const list = screen.getByRole("list", { name: "gearSlot-selector" });

        expect(list).toBeInTheDocument();
    });

    it("should not render any unexpected gear slots", () => {
        render(<DefaultGearMenu />);

        const list = screen.getByRole("list", { name: "gearSlot-selector" });

        const expectedNames = getGearSlotNames();
        const renderedItems = within(list).getAllByRole("listitem");

        expect(renderedItems).toHaveLength(expectedNames.length);
        for (const name of expectedNames) {
            const expected = within(list).getByText(name);
            expect(expected).toBeInTheDocument();
        }
    });

    it("should render with internal defaults", () => {
        render(<DefaultGearMenu />);

        const defaultSlotLabel = GEAR_SLOT[DEFAULT_GEAR_SLOT].name;

        const element = screen.getByRole("list", { name: "gearSlot-selector" });
        const defaultSlot = within(element).getByText(defaultSlotLabel);

        expect(element).toBeInTheDocument();
        expect(defaultSlot).toHaveAttribute("aria-selected", "true");
    });
});

// it.skip("should update the costs when an item is selected", () => {})
// it("should show a 'Clear All Gear' button", () => {});
// it("should clear all variant selections when the 'Clear All Gear' buttin is clicked", () => {});
// it("should make the function call to update the available item variants when selecting a slot", () => {});
// it("should show item variants when a gear slot is clicked", () => {});
// it("should highlight the slot when selected", () => {});
// it("should have the correct aria role", () => {});
