import { vars } from '@/styles/theme.css'
import { globalStyle, keyframes, style } from '@vanilla-extract/css'

const fade = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const form = style({
  display: 'flex',
  gap: '0.5rem',
  animation: `${fade} 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`,
})

export const container = style({
  display: 'flex',
  alignItems: 'center',
  border: `1px solid ${vars.gray.primary}`,
  borderRadius: '5px',
  background: vars.color.black,
  width: '100%',
  padding: '0 0.75rem',
  gap: '0.75rem',
  transition: 'border-color .15s ease',

  ':focus-within': {
    borderColor: vars.gray.terciary,
  },
})

export const icon = style({
  display: 'flex',
  color: vars.gray.secondary,
})

export const input = style({
  padding: '0.75rem 0',
  width: '100%',
  color: vars.color.white,
  fontSize: '1rem',

  '::placeholder': {
    color: vars.gray.secondary,
  },
})

export const button = style({
  display: 'flex',
  alignItems: 'center',
  background: vars.color.blue,
  color: vars.color.white,

  lineHeight: '1.25',

  border: '1px solid transparent',
  borderRadius: 5,
  gap: '0.25rem',
  padding: '0 0.75rem',

  cursor: 'pointer',
  transition: 'border-color .15s ease',

  ':hover': {
    borderColor: vars.color.white,
  },
})

globalStyle(`${button} span`, {
  display: 'none',
  '@media': {
    'screen and (min-width: 480px)': {
      display: 'flex',
    },
  },
})
