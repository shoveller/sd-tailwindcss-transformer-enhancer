import {
  camelCase,
  isArray,
  isEmpty,
  isPlainObject,
  setWith,
  transform,
} from 'lodash-es'

const parseDesignTokens = (o, prefix = '', result = {}, keepNull = false) => {
  const newResult = result || {}

  if (
    Object.hasOwnProperty.call(o, 'type') &&
    Object.hasOwnProperty.call(o, 'value')
  ) {
    newResult[prefix] = o
    return newResult
  }

  if (isArray(o) || isPlainObject(o)) {
    for (const i in o) {
      let pref = prefix
      if (isArray(o)) {
        pref = pref + `[${i}]`
      } else {
        if (isEmpty(prefix)) {
          pref = camelCase(i)
        } else {
          pref = prefix + '.' + camelCase(i)
        }
      }
      parseDesignTokens(o[i], pref, newResult, keepNull)
    }
    return newResult
  }
  return newResult
}

const normalize = (flattenTokens = {}) => {
  return transform(
    flattenTokens,
    (result, value, key = '') => {
      const camelName = key
        .replace(/\.(.)/g, (match, p1) => '.' + p1.toUpperCase())
        .replace(/\./gi, '')
      const newkey = camelCase(camelName)
      if (value.type === 'color') {
        return setWith(result, `colors.${newkey}`, value, Object)
      }

      if (value.type === 'typography') {
        return setWith(result, `fontSize.${newkey}`, value, Object)
      }

      if (value.type === 'fontFamilies') {
        return setWith(result, 'fontFamily', value, Object)
      }

      if (value.type === 'boxShadow') {
        return setWith(result, `boxShadow.${newkey}`, value, Object)
      }

      return result
    },
    {}
  )
}

/**
 * @type {import('style-dictionary/types').Parser}
 */
export const jsonParser = {
  pattern: /\.json$/,
  parse: ({ contents }) => {
    try {
      const deignToken = JSON.parse(contents)
      const parsedToken = parseDesignTokens(deignToken)
      const normalizedToken = normalize(parsedToken)

      return normalizedToken
    } catch (error) {
      console.log(error)
    }
  },
}
