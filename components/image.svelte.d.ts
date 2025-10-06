export default Image;
type Image = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const Image: import("svelte").Component<{
    src: any;
    alt?: string;
    class?: string;
} & Record<string, any>, {}, "">;
type $$ComponentProps = {
    src: any;
    alt?: string;
    class?: string;
} & Record<string, any>;
