type command = 'hello' | 'about' | 'help' | 'logo';
export declare const Commands: Record<command, string[] | (() => Promise<string[]>)>;
export {};
