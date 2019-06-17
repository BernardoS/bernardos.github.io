import style from '~/styles/style.scss'
import {renderPage} from '../webpack/pre-render'
import * as DOM from 'DOM'
import variables from '~/styles/style.json'

import ico from './images/favicon.ico'
import ico16x16 from './images/favicon-16x16.png'
import ico32x32 from './images/favicon-32x32.png'
import ico180x180 from './images/apple-touch-icon.png'

import header from './views/header'
import about from './views/about'
import experiences from './views/experiences'
import educations from './views/educations'
import footer from '~/views/footer' 

renderPage<'main' | 'components'>((chunks) => (
  <html>
    <head>
      <title>Bernardo Sunderhus</title>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1"/>
      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <meta name="msapplication-TileColor" content={variables.coral}/>
      <meta name="theme-color" content={variables.darkBlue}/>
      <meta name="mobile-web-app-capable" content="yes"/>
      <link rel="icon" href={ico} type="image/png" sizes="48x48"/>
      <link rel="icon" href={ico16x16} type="image/png" sizes="16x16"/>
      <link rel="icon" href={ico32x32} type="image/png" sizes="32x32"/>
      <link rel="apple-touch-icon" href={ico180x180} type="image/png" sizes="180x180"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato|Rubik"/>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/fira_code.css"/>
      {chunks.main.css.map(path => <link rel="stylesheet" href={path}/>)}
      {chunks.components.js.map(chunk => <script src={chunk}/>)}
    </head>
    <body class={style.baseTheme}>
      {header}
      <main class={style.mainSection}>
        {about.content.cloneNode(true)}
        {experiences.content.cloneNode(true)}
        {educations.content.cloneNode(true)}
      </main>
      {footer.content.cloneNode(true)}
    </body>
  </html>
))
