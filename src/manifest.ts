import path from 'path'
import {darkBlue} from './views/app/style.json'
import { ManifestOptions } from 'webpack-pwa-manifest'


const manifest: ManifestOptions = {
  name: 'BSunderhus',
  short_name: 'BS',
  description: 'My personal website',
  background_color: darkBlue,
  theme_color: darkBlue,
  start_url: ".",
  display: 'browser',
  icons: [
    {
      src: path.resolve(__dirname, 'images/favicon-16x16.png'),
      size: '16x16',
      destination: 'images'
    },
    {
      src: path.resolve(__dirname, 'images/favicon-32x32.png'),
      size: '32x32',
      destination: 'images'
    },
    {
      src: path.resolve(__dirname, 'images/favicon-48x48.png'),
      size: '48x48',
      destination: 'images'
    },
    {
      src: path.resolve(__dirname, 'images/favicon-180x180.png'),
      size: '180x180',
      destination: 'images'
    },
  ]
}

export default manifest
