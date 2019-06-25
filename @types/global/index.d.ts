declare module '*.svg' {
  const svg: string
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
declare module "*.otf" {
  const otf: string
  export default otf
}

declare module "*.ttf" {
  const ttf: string
  export default ttf
}


declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production'
  }
}
