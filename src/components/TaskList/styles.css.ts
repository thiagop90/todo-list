import { vars } from '@/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const tabsContainer = style({})

export const tabList = style({
  borderBottom: `1px solid ${vars.gray.primary}`,
  overflow: 'auto',
})

export const textArea = style({
  whiteSpace: 'nowrap',
})

export const taskNumber = style({
  padding: '0 0.25rem',
  background: vars.color.blue,
  color: vars.color.white,
  borderRadius: 4,

  fontSize: '0.75rem',
  fontWeight: '500',
  lineHeight: '1.25',
})

export const tabTask = style({
  display: 'flex',
  gap: '0.5rem',
})

export const tabPanel = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
})
