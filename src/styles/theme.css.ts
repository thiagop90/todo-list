import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  color: {
    white: '#fff',
    black: '#000',
    blue: '#0466C8',
  },
  gray: {
    primary1: '#111',
    primary: '#333',
    secondary: '#666',
    terciary: '#888',
  },
})
