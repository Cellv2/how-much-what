import { composeStories } from "@storybook/react-vite";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { getSeasonNamesForExpansion } from "../../models/season";
import { expectToBeDefined } from "../../tests/assertions";
import { SettingsMenu } from "./SettingsMenu";
import * as stories from "./SettingsMenu.stories";

const { DefaultSettingsMenu, PreselectedSettingMenu } = composeStories(stories);

describe("[Behaviour] SettingsMenu", () => {
    it("activates a setting when clicked", () => {
        render(<SettingsMenu />);

        const settings = screen.getByRole("tablist", {
            name: "currencyFilter-selector",
        });
        const tabs = within(settings).getAllByRole("tab");
        expect(tabs.length).toBeGreaterThan(1);

        const tab1 = tabs[0];
        const tab2 = tabs[1];

        expectToBeDefined(tab1, "Tab1");
        expectToBeDefined(tab2, "Tab2");

        fireEvent.click(tab1);
        expect(tab1).toHaveAttribute("aria-selected", "true");
        expect(tab2).toHaveAttribute("aria-selected", "false");

        fireEvent.click(tab2);
        expect(tab1).toHaveAttribute("aria-selected", "false");
        expect(tab2).toHaveAttribute("aria-selected", "true");
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

    // TODO: Add this in when wrath becomes a thing
    // it("updates seasons when expansion changes", () => {
    //     render(<SettingsMenu initialActiveExpansion="TBC" />);
    //     const expansionTab = screen.getByRole("tab", { name: "Wrath" });
    //     fireEvent.click(expansionTab);
    //     const expectedSeasons = getSeasonNamesForExpansion("WOTLK");
    //     for (const season of expectedSeasons) {
    //         expect(
    //             screen.getByRole("tab", { name: season })
    //         ).toBeInTheDocument();
    //     }
    // });
});

describe("[Smoke] SettingsMenu stories", () => {
    it("should render the correct settings for DefaultSettingsMenu", () => {
        render(<DefaultSettingsMenu />);

        const expansionSelection = screen.getByRole("tab", {
            name: "TBC",
        });
        const currencyFilterSelection = screen.getByRole("tab", {
            name: "Both",
        });
        const seasonSelection = screen.getByRole("tab", {
            name: "S1",
        });

        expect(expansionSelection).toHaveAttribute("aria-selected", "true");
        expect(currencyFilterSelection).toHaveAttribute(
            "aria-selected",
            "true"
        );
        expect(seasonSelection).toHaveAttribute("aria-selected", "true");
    });

    it("PreselectedSetting should render the correct config", () => {
        render(<PreselectedSettingMenu />);

        const expansionSelection = screen.getByRole("tab", {
            name: "TBC",
        });
        const currencyFilterSelection = screen.getByRole("tab", {
            name: "Arena Points",
        });
        const seasonSelection = screen.getByRole("tab", {
            name: "S4",
        });

        expect(expansionSelection).toHaveAttribute("aria-selected", "true");
        expect(currencyFilterSelection).toHaveAttribute(
            "aria-selected",
            "true"
        );
        expect(seasonSelection).toHaveAttribute("aria-selected", "true");
    });
});
