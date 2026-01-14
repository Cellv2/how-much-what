import { expect } from "vitest";

export function expectToBeDefined<T>(
    value: T | undefined,
    element: string
): asserts value is T {
    expect(value, `Expected ${element} to be defined`).toBeDefined();
}
