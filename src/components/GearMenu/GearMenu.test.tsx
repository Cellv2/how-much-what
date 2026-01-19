import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { getGearSlotNames } from "../../models/gearSlot";
import { GearMenu } from "./GearMenu";

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

    it("should display gear slot labels with the correct text", () => {});

    it("should highlight the correct default slot", () => {});
});

describe("[Smoke] GearMenu stories", () => {
    it("should render the component without crashing", () => {});

    it("should not render any unexpected gear slots", () => {});

    it("should render with default props", () => {});
});

// it.skip("should update the costs when an item is selected", () => {})
// it("should show a 'Clear All Gear' button", () => {});
// it("should clear all variant selections when the 'Clear All Gear' buttin is clicked", () => {});
// it("should make the function call to update the available item variants when selecting a slot", () => {});
// it("should show item variants when a gear slot is clicked", () => {});
// it("should highlight the slot when selected", () => {});
