import { useState } from "react";
import { Setting } from "./Setting/Setting";
import {
    ARENA_SEASON,
    getSeasonIdsForExpansion,
    type ArenaSeasonId,
} from "../../models/season";
import {
    CURRENCY_FILTER,
    type CurrencyFilterId,
} from "../../models/currency-filter";
import { EXPANSION, type ExpansionId } from "../../models/expansion";

export type SettingsMenuProps = {
    initialActive?: string;
    initialActiveCurrencyFilter?: CurrencyFilterId;
    initialActiveExpansion?: ExpansionId;
    initialActiveSeason?: ArenaSeasonId;
};

export const SettingsMenu = (props: SettingsMenuProps) => {
    const {
        initialActive,
        initialActiveCurrencyFilter,
        initialActiveExpansion,
        initialActiveSeason,
    } = props;

    // TODO: probs move this into config or some such
    const defaultExpansion = EXPANSION.TBC;
    const defaultSeason = ARENA_SEASON.SEASON_1;
    const defaultCurrencyFilter = CURRENCY_FILTER.BOTH;

    const [active, setActive] = useState<string | null>(initialActive ?? null);
    const [activeExpansion, setActiveExpansion] = useState(
        initialActiveExpansion ?? defaultExpansion.id
    );

    const [activeSeason, setActiveSeason] = useState(
        initialActiveSeason ?? defaultSeason.id
    );

    const [activeCurrencyFilter, setActiveCurrencyFilter] = useState(
        initialActiveCurrencyFilter ?? defaultCurrencyFilter.id
    );

    const options = ["setting 1", "setting 2"];
    const expansionOptions = [EXPANSION.CLASSIC.id, EXPANSION.TBC.id];
    const seasonOptions = getSeasonIdsForExpansion(activeExpansion);
    const currencyFilterOptions = [
        CURRENCY_FILTER.BOTH.id,
        CURRENCY_FILTER.ARENA.id,
        CURRENCY_FILTER.HONOR.id,
    ];

    return (
        <>
            <div role="tablist">
                {options.map((option) => (
                    <Setting
                        key={option}
                        label={option}
                        active={active === option}
                        onSelect={() => {
                            setActive(option);
                        }}
                    />
                ))}
            </div>
            <div role="tablist" aria-label="expansion-selector">
                {expansionOptions.map((id) => (
                    <Setting
                        key={id}
                        label={EXPANSION[id].name}
                        active={activeExpansion === id}
                        onSelect={() => {
                            setActiveExpansion(id);
                        }}
                    />
                ))}
            </div>
            <div role="tablist" aria-label="season-selector">
                {seasonOptions.map((id) => (
                    <Setting
                        key={id}
                        label={ARENA_SEASON[id].name}
                        active={activeSeason === id}
                        onSelect={() => {
                            setActiveSeason(id);
                        }}
                    />
                ))}
            </div>
            <div role="tablist" aria-label="currencyFilter-selector">
                {currencyFilterOptions.map((id) => (
                    <Setting
                        key={id}
                        label={CURRENCY_FILTER[id].name}
                        active={activeCurrencyFilter === id}
                        onSelect={() => {
                            setActiveCurrencyFilter(id);
                        }}
                    />
                ))}
            </div>
        </>
    );
};
