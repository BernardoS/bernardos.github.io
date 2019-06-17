declare module '*.svg' {
  const svg: SVGElement
  export default  svg
}

// declare module '*.css' {
//   const classes: { [key: string]: string };
//   export default classes;
// }

// declare module '*.scss' {
//   const classes: { [key: string]: string };
//   export default classes;
// }

// declare module '*.sass' {
//   const classes: { [key: string]: string };
//   export default classes;
// }

declare module '*.png' {
  const png: string
  export default png
}

declare module '*.ico' {
  const ico: string
  export default ico
}

declare module "*.md" {
  const md: string
  export default md
}


declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production'
  }
}
