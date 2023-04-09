import { vars } from '@/styles/theme.css'
import { globalStyle, keyframes, style } from '@vanilla-extract/css'

const fade = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const main = style({
  maxWidth: '80rem',
  margin: '0 auto',
  padding: '0 1.5rem',
})

export const containerTasks = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '1.5rem 0',
  gap: '1.5rem',
  animation: `${fade} 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`,
})

export const containerImage = style({
  padding: '0 1.5rem',
})

export const containerHome = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '1.5rem 0',
  gap: '2rem',
  height: 'calc(100vh - 4.75rem)',
  animation: `${fade} 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`,
})

export const containerText = style({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
})

export const buttonAddTask = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
  padding: '0.75rem',
  background: vars.color.blue,
  borderRadius: 8,
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'transform 0.25s ease, box-shadow 0.25s ease',

  ':hover': {
    boxShadow: '0 4px 14px 0 #0952A5',
  },

  ':active': {
    transform: 'scale(0.97)',
  },
})

export const containerNewTask = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '48rem',
})

globalStyle(`${containerNewTask} > div`, {
  width: '100%',
})
