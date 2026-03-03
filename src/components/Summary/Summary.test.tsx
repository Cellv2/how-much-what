import { composeStories } from "@storybook/react-vite";
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CURRENCY } from "../../models/currency";
import type { ItemEntity } from "../../models/item";
import { expectToBeDefined } from "../../tests/assertions";
import { Summary } from "./Summary";
import * as stories from "./Summary.stories";

const { DefaultSummary } = composeStories(stories);

const fakeHonorItem: ItemEntity = {
    currency: {
        amount: 12345,
        id: CURRENCY.HONOR.id,
    },
    id: "fakeId",
    name: "fake name",
    seasonId: "SEASON_1",
    slotId: "BACK",
};

const fakeArenaItem: ItemEntity = {
    ...fakeHonorItem,
    currency: {
        amount: 67890,
        id: CURRENCY.ARENA.id,
    },
};

describe("[Behaviour] Summary component", () => {
    it("should show total honor value", () => {
        render(<Summary items={[fakeHonorItem]} />);

        const articles = screen.getAllByRole("article");
        const honorArticle = articles.find((article) =>
            within(article).queryByText(CURRENCY.HONOR.name)
        );

        expectToBeDefined(honorArticle, "honorArticle");

        expect(within(honorArticle).getByText("12345")).toBeInTheDocument();
    });

    it.todo("should show the correct badge numbers");

    it("should show total arena point value", () => {
        render(<Summary items={[fakeArenaItem]} />);

        const articles = screen.getAllByRole("article");
        const arenaArticle = articles.find((article) =>
            within(article).queryByText(CURRENCY.ARENA.name)
        );

        expectToBeDefined(arenaArticle, "arenaArticle");

        expect(within(arenaArticle).getByText("67890")).toBeInTheDocument();
    });

    it("should render one SummaryCard for each cost type", () => {
        render(<Summary items={[]} />);

        expect(screen.getAllByRole("article").length).toBe(3);
    });

    it("should rerender with the correct values when an item is updated", () => {
        const { rerender } = render(
            <Summary items={[fakeArenaItem, fakeHonorItem]} />
        );

        let articles = screen.getAllByRole("article");
        let honorArticle = articles.find((article) =>
            within(article).queryByText(CURRENCY.HONOR.name)
        );

        expectToBeDefined(honorArticle, "honorArticle");
        expect(within(honorArticle).getByText("12345")).toBeInTheDocument();

        rerender(
            <Summary items={[fakeArenaItem, fakeHonorItem, fakeHonorItem]} />
        );
        articles = screen.getAllByRole("article");
        honorArticle = articles.find((article) =>
            within(article).queryByText(CURRENCY.HONOR.name)
        );

        expectToBeDefined(honorArticle, "honorArticle");
        expect(within(honorArticle).getByText("24690")).toBeInTheDocument();
    });
});

describe("[Smoke] DefaultSummary story", () => {
    it("should render without crashing", () => {
        render(<DefaultSummary />);

        const element = screen.getByRole("heading", { name: /total costs/i });

        expect(element).toBeInTheDocument();
    });

    it.todo("should have 0 values for badges, honor and arena points");
});
