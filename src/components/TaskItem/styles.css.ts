import { vars } from '@/styles/theme.css'
import { globalStyle, keyframes, style } from '@vanilla-extract/css'

const scaleInCenter = keyframes({
  '0%': {
    transform: 'translateY(-1rem)',
    opacity: 0,
  },
  '100%': {
    transform: 'translateY(0)',
    opacity: 1,
  },
})

export const container = style({
  borderRadius: '5px',
  border: '1px solid',
  borderColor: vars.gray.primary,
  overflow: 'hidden',
  animation: `${scaleInCenter} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`,
})

export const containerTask = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  background: vars.color.black,
  borderBottom: '1px solid',
  borderColor: vars.gray.primary,
  paddingLeft: '1rem',
})

globalStyle(`${containerTask} > p`, {
  padding: '1rem',
  width: '100%',
  overflow: 'hidden',
})

export const inputEditing = style({
  width: '100%',
  padding: '1rem',
})

export const buttonConfirmation = style({
  display: 'flex',
  padding: '1rem 0.75rem',

  borderLeft: '1px solid',
  borderColor: vars.gray.primary,
  transition: 'background 0.2s ease',

  ':hover': {
    background: vars.gray.primary,
  },
})

export const titleTaskCompleted = style({
  textDecoration: 'line-through',
})

export const buttonOpen = style({
  marginRight: '1rem',
  padding: '0.25rem',
  borderRadius: '50%',

  ':hover': {
    background: vars.gray.primary,
  },
})

export const groupButtons = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
})

export const buttonOptions = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  padding: '0.25rem 0.5rem',
  borderRadius: 4,
  transition: 'background 0.2s ease',

  ':hover': {
    background: vars.gray.primary,
  },

  ':last-child': {
    color: 'red',
  },
})

export const footer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.25rem 0.75rem',
  background: vars.gray.primary1,
  color: vars.gray.secondary,

  fontSize: '0.875rem',
})
