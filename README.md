
# Enhancement of sd-tailwindcss-transformer<br />
This plugin preprocesses the design tokens provided to [sd-tailwindcss-transformer](https://www.npmjs.com/package/sd-tailwindcss-transformer).<br />
Use it in conjunction with [sd-tailwindcss-transformer](https://www.npmjs.com/package/sd-tailwindcss-transformer).

## Install

```bash
$ npm i sd-tailwindcss-transformer sd-tailwindcss-transformer-enhancer -D
# or with yarn
$ yarn add sd-theme-transformer sd-tailwindcss-transformer-enhancer -D
```

## Usage

### Normalize your design token with Token Transformer before using it.
```shell
npx token-transformer data/input.json data/global.json global
```

### Generate tainwind.config.js

```js
// build-config.js
const styleDictionary = require('style-dictionary')
const { makeSdTailwindConfig } = require('sd-tailwindcss-transformer')
const { enhance } = require('sd-tailwindcss-transformer-enhancer')

const SD = styleDictionary.extend(
  enhance(
    makeSdTailwindConfig({
      type: 'all',
      source: ['data/global.json'],
      buildPath: 'theme/',
    })
  )
)
SD.buildAllPlatforms()

```

Output:

```js
// theme/tainwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        textShadowParagraph: '0px 2px 6px 0px #0000008c',
      },
      fontFamily: {
        spoqaHanSans: ['SpoqaHanSans'],
      },
      fontSize: {
        bigTitleMobile: [
          '1.875rem',
          {
            fontFamily: 'SpoqaHanSans',
            fontWeight: 'Bold',
            lineHeight: '120%',
            letterSpacing: '0em',
            paragraphSpacing: 0,
            paragraphIndent: '0rem',
            textCase: 'none',
            textDecoration: 'none',
          },
        ],
      },
      colors: {
        red100: '#faced0',
      },
    },
  },
}
```

### Supported theme properties
| Property                                                                                   | Limitations                                      |
|--------------------------------------------------------------------------------------------|--------------------------------------------------|
| [`theme.colors`](https://tailwindcss.com/docs/theme#colors)                                | Does not support linear-gradient function in CSS |
| [`theme.fontSize`](https://tailwindcss.com/docs/font-size#providing-a-default-line-height) | Does not support font-weight property in CSS     |
| [`theme.fontFamily`](https://tailwindcss.com/docs/font-family#customizing-your-theme)      |                                                  |                                                   |
| [`theme.boxShadow`](https://tailwindcss.com/docs/box-shadow#customizing-your-theme)        |                                                  |                                                  |


## License

[Apache 2.0](https://github.com/nado1001/sd-theme-transformer/blob/main/license)
