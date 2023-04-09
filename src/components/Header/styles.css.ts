import { vars } from '@/styles/theme.css'
import { style, globalStyle } from '@vanilla-extract/css'

export const header = style({
  background: vars.color.black,
  borderBottom: `1px solid ${vars.gray.primary}`,
})

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '0 auto',
  padding: '1rem 1.5rem',
  maxWidth: '80rem',
})

export const logo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
})

globalStyle(`${logo} > b`, {
  display: 'none',

  '@media': {
    'screen and (min-width: 480px)': {
      display: 'flex',
    },
  },
})

export const containerLinks = style({
  display: 'flex',
  gap: '0.5rem',
})

export const link = style({
  display: 'flex',
  padding: '0.5rem',
  color: vars.color.white,
  transition: 'color 0.2s ease',

  ':hover': {
    color: vars.color.blue,
  },
})
