export type NamedEntity<TId extends string = string> = {
    id: TId;
    name: string;
};

export type ObjectValue<T> = T[keyof T];
