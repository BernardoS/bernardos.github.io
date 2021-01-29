const path = require('path')
const fs = require('fs')
const {paramCase} = require('change-case')

const jsonMap = new Map()

/**
 * @param {string} url
 * @param {string} prev
 */
function importJson (url) {
	if (url.endsWith('.json')) {
		const pathToJSON = path.resolve(`./${url}`)
		if (jsonMap.has(pathToJSON)) return {contents: jsonMap.get(pathToJSON)}
		if (!fs.existsSync(pathToJSON)) return null
		const contents = Object
		.entries(require(pathToJSON))
		.reduce((acc, [key, value]) => (
			`${acc}$${paramCase(key)}: ${value};\n`
		), '')
		jsonMap.set(pathToJSON, contents)
		return {contents}
	}
	return null
}

// next.config.js
module.exports = {
	sassOptions: {
		importer: [importJson]
	},
  webpack: (config) => {

    const { rules } = config.module;
    const styleRules = (rules.find((m) => (
			m.oneOf && m.oneOf.find(({ test: reg }) => reg.test('file.css'))
		)) || {}).oneOf;
    if (!styleRules) return config;
    const cssModuleRules = [
			styleRules.find(({ test: reg, use }) =>
				reg.test('file.module.css') && use.loader !== 'error-loader'),
			styleRules.find(({ test: reg, use }) =>
				reg.test('file.module.scss') && use.loader !== 'error-loader'),
    ].filter((n) => n);
    cssModuleRules.forEach((cmr) => {
      const cssLoaderConfig = cmr.use.find(({ loader }) => loader.includes('css-loader'));
      if (cssLoaderConfig && cssLoaderConfig.options) {
				cssLoaderConfig.options.modules.exportLocalsConvention = 'camelCase'
      }
    });
    return config;
  },
};
