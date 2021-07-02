/**
 * @param callback
 * @returns {Promise<*[]|*[]>}
 */
const handler = async (callback) => {
  try {
    const data = await callback()
    return [null, data]
  } catch (error) {
    return [error, null]
  }
}

module.exports = handler