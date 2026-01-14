import { useState } from "react";
import { Setting } from "./Setting/Setting";
import {
    ARENA_SEASON,
    DEFAULT_SEASON,
    getSeasonIdsForExpansion,
    type ArenaSeasonId,
} from "../../models/season";
import {
    CURRENCY_FILTER,
    DEFAULT_CURRENCY_FILTER,
    type CurrencyFilterId,
} from "../../models/currencyFilter";
import {
    DEFAULT_EXPANSION,
    EXPANSION,
    type ExpansionId,
} from "../../models/expansion";

export type SettingsMenuProps = {
    initialActiveCurrencyFilter?: CurrencyFilterId;
    initialActiveExpansion?: ExpansionId;
    initialActiveSeason?: ArenaSeasonId;
};

export const SettingsMenu = (props: SettingsMenuProps) => {
    const {
        initialActiveCurrencyFilter,
        initialActiveExpansion,
        initialActiveSeason,
    } = props;

    const [activeExpansion, setActiveExpansion] = useState(
        initialActiveExpansion ?? DEFAULT_EXPANSION
    );

    const [activeSeason, setActiveSeason] = useState(
        initialActiveSeason ?? DEFAULT_SEASON
    );

    const [activeCurrencyFilter, setActiveCurrencyFilter] = useState(
        initialActiveCurrencyFilter ?? DEFAULT_CURRENCY_FILTER
    );

    const expansionOptions = [EXPANSION.CLASSIC.id, EXPANSION.TBC.id];
    const seasonOptions = getSeasonIdsForExpansion(activeExpansion);
    const currencyFilterOptions = [
        CURRENCY_FILTER.BOTH.id,
        CURRENCY_FILTER.ARENA.id,
        CURRENCY_FILTER.HONOR.id,
    ];

    return (
        <>
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
