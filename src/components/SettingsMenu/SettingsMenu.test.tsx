import { render, screen, fireEvent, within } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SettingsMenu } from "./SettingsMenu";
import { composeStories } from "@storybook/react-vite";
import * as stories from "./SettingsMenu.stories";
import { getSeasonNamesForExpansion } from "../../models/season";

const { PreselectedSetting } = composeStories(stories);

describe("[Behaviour] SettingsMenu", () => {
    it("activates a setting when clicked", () => {
        render(<SettingsMenu />);

        const setting1 = screen.getByText("setting 1");

        fireEvent.click(setting1);

        expect(setting1).toHaveAttribute("aria-selected", "true");
    });

    it("should only show the seasons relevant to the expansion selected", () => {
        render(<SettingsMenu initialActiveExpansion="TBC" />);

        const expectedSeasons = getSeasonNamesForExpansion("TBC");
        const notExpectedSeasons = ["Random Season 1", "S5", "S6", "SEASON_1"];

        const seasonTabList = screen.getByRole("tablist", {
            name: "season-selector",
        });

        for (const season of expectedSeasons) {
            expect(
                within(seasonTabList).getByRole("tab", { name: season })
            ).toBeInTheDocument();
        }

        for (const season of notExpectedSeasons) {
            expect(
                within(seasonTabList).queryByRole("tab", { name: season })
            ).not.toBeInTheDocument();
        }
    });
});

describe("[Smoke] SettingsMenu stories", () => {
    it("PreselectedSetting should render the correct config", () => {
        render(<PreselectedSetting />);

        const setting2 = screen.getByText("setting 2");
        const expansionSelection = screen.getByRole("tab", {
            name: "TBC",
        });
        const currencyFilterSelection = screen.getByRole("tab", {
            name: "Arena Points",
        });
        const seasonSelection = screen.getByRole("tab", {
            name: "S4",
        });

        expect(setting2).toHaveAttribute("aria-selected", "true");
        expect(expansionSelection).toHaveAttribute("aria-selected", "true");
        expect(currencyFilterSelection).toHaveAttribute(
            "aria-selected",
            "true"
        );
        expect(seasonSelection).toHaveAttribute("aria-selected", "true");
    });
});
