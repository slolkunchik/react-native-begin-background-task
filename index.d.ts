export function beginBackgroundTask(): Promise<number>;
export function endBackgroundTask(backgroundTaskId: number): void;
export function backgroundTimeRemaining(): Promise<number>;
