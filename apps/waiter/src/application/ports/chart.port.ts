

export default abstract class ChartPort {
    abstract add(itemUUID: string): void
    abstract remove(itemUUID: string): void
    abstract clear(): void
}
