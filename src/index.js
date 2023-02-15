import styleDictionary from 'style-dictionary'
import { shadow_shorthand } from './transforms/shadow_shorthand.js'
import { value_tw3fontFamily } from './transforms/value_tw3fontFamily.js'
import { value_tw3BoxShadow } from './transforms/value_tw3BoxShadow.js'
import { value_tw3typography } from './transforms/value_tw3typography.js'
import { jsonParser } from './parsers/jsonParser.js'

styleDictionary.registerParser(jsonParser)

styleDictionary.registerTransform(value_tw3BoxShadow)

styleDictionary.registerTransform(value_tw3fontFamily)

styleDictionary.registerTransform(value_tw3typography)

styleDictionary.registerTransform(shadow_shorthand)

export const enhance = (config) => {
  config.platforms.tailwind.transforms = [
    ...config.platforms.tailwind.transforms,
    'value/tw3typography',
    'value/tw3fontFamily',
    'value/tw3BoxShadow',
    'shadow/shorthand',
  ]

  return config
}
