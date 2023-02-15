import camelCase from 'lodash-es/camelCase'

/**
 * @type {import('style-dictionary/types').Transform}
 */
export const value_tw3fontFamily = {
  name: 'value/tw3fontFamily',
  type: 'value',
  matcher(token) {
    return token.type === 'fontFamilies'
  },
  transformer(token) {
    return {
      [camelCase(token.value)]: [token.value],
    }
  },
}
