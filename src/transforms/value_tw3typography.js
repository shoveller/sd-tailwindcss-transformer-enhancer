import reduce from 'lodash-es/reduce'

const px2rem = (/** number|string */ value) => {
  const baseFontSize = 16
  const floatValue = parseFloat(value)

  if (isNaN(floatValue)) {
    return value
  }

  if (floatValue === 0) {
    return 0
  }

  return floatValue / baseFontSize
}

const isPx = (/** string */ value) => /[\d.]+px$/.test(value)

const isLetterSpacing = (/** string */ value) => value === 'letterSpacing'

const percentage2em = (/** string */ value) => {
  const newValue = value.replace('%', '')

  return newValue * 0.01
}

export const value_tw3typography = {
  name: 'value/tw3typography',
  type: 'value',
  matcher(token) {
    return token.type === 'typography'
  },
  transformer(token) {
    const { fontSize, ...rest } = token.value
    const size = `${px2rem(fontSize)}rem`
    const values = reduce(
      rest,
      (sum, value, key) => {
        if (isPx(value)) {
          return {
            ...sum,
            [key]: `${px2rem(value)}rem`,
          }
        }

        if (isLetterSpacing(key)) {
          return {
            ...sum,
            [key]: `${percentage2em(value)}em`,
          }
        }

        return {
          ...sum,
          [key]: value,
        }
      },
      {}
    )

    return [size, values]
  },
}
