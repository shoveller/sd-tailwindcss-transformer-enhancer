import camelCase from 'lodash-es/camelCase'

/**
 * @type {import('style-dictionary/types').Transform}
 */
export const value_tw3BoxShadow = {
  name: 'value/tw3BoxShadow',
  type: 'value',
  matcher(token) {
    return token.type === 'boxShadow'
  },
  transformer(token) {
    return {
      [camelCase(token.value)]: [token.value],
    }
  },
}
