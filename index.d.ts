export function beginBackgroundTask(): Promise<number>;
export function endBackgroundTask(backgroundTaskId: number): Promise<void>;
export function backgroundTimeRemaining(): Promise<number>;
