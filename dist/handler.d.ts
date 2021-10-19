declare const handler: (callback: () => Promise<unknown>) => Promise<[
    unknown,
    unknown
]>;
export default handler;
