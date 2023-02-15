import { makeSdTailwindConfig } from 'sd-tailwindcss-transformer'
import styleDictionary from 'style-dictionary'
import { enhance } from '../index.js'

const SD = styleDictionary.extend(
  enhance(
    makeSdTailwindConfig({
      type: 'all',
      source: ['data/global.json'],
      buildPath: '../theme/',
    })
  )
)
SD.buildAllPlatforms()
