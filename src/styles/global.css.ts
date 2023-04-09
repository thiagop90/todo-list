import { globalStyle } from '@vanilla-extract/css'

globalStyle('html, body', {
  maxWidth: '100vw',
})

globalStyle('*', {
  fontFamily: 'Satoshi, sans-serif',
  fontWeight: '500',
  padding: 0,
  margin: 0,
  boxSizing: 'border-box',
})

globalStyle('input, button', {
  background: 'transparent',
  border: 'none',
  outline: 'transparent',
})
