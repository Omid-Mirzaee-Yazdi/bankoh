import routes from 'config/routes'

/**
 * Makes sure path param is a valid path
 * @param path string
 * @returns string if valid path, else null
 */
export const makeSafeCallbackPath = (path?: string) => {
  if (path && Object.values(routes).includes(path)) {
    return path
  } else {
    return null
  }
}
