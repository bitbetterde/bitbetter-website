import 'react'

// React 19 supports `fetchPriority` on <img>, but the installed @types/react
// (18.x, pulled in by @astrojs/react) only knows it on <link>.
// Delete this file once @types/react is on 19.
declare module 'react' {
  interface ImgHTMLAttributes<T> {
    fetchPriority?: 'high' | 'low' | 'auto'
  }
}
