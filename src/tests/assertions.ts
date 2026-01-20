import { expect } from "vitest";

/**
 * Asserts that a value is defined
 *
 * @param value - The value being checked
 * @param label - A label for the error message, if one occurs
 * @throws If the value is undefined
 */
export function expectToBeDefined<T>(
    value: T | undefined,
    label: string
): asserts value is T {
    expect(value, `Expected ${label} to be defined`).toBeDefined();
}
