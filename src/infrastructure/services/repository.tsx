export interface PlayerRepository<T> {
    get: () => Promise<Array<T>>;
    getOne?: (id: number) => Promise<T>;
    query: (key: string, value: string) => Promise<Array<T>>;
    create: (item: Partial<T>) => Promise<T>;
    update: (item: Partial<T>) => Promise<T>;
    delete: (id: number) => Promise<void>;
}
export interface MatchRepository<T> {
    get: () => Promise<Array<T>>;
    query: (key: string, value: string) => Promise<Array<T>>;
    create: (item: Partial<T>) => Promise<T>;
    updateAdd: (item: Partial<T>) => Promise<T>;
    updateDelete: (id: number) => Promise<void>;
}
