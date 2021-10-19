const handler = async (callback: () => Promise<unknown>): Promise<[unknown, unknown]> => {
    try {
        const data = await callback()
        return [null, data]
    } catch (error) {
        return [error, null]
    }
}

export default handler
