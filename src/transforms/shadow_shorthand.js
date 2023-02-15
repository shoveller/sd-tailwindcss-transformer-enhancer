const transformShadow = (shadow) => {
  const { x, y, blur, spread, color } = shadow
  return `${x}px ${y}px ${blur}px ${spread}px ${color}`
}

/**
 * @type {import('style-dictionary/types').Transform}
 */
export const shadow_shorthand = {
  name: 'shadow/shorthand',
  type: 'value',
  transitive: true,
  matcher: (token) => ['boxShadow'].includes(token.type),
  transformer(token) {
    const { value } = token.original

    if (Array.isArray(value)) {
      return value.map((single) => transformShadow(single)).join(', ')
    }

    return transformShadow(value)
  },
}
