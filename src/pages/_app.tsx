import type { AppProps } from 'next/app'
import { TaskProvider } from '@/contexts/TaskContext'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import '@/styles/global.css'
import { vars } from '@/styles/theme.css'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'radial-gradient(circle, #1C1C1E 10%, transparent 11%)',
        bgSize: '2em 2em',
        bgColor: '#111111',
        color: vars.color.white,
      },
    },
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <TaskProvider>
        <Component {...pageProps} />
      </TaskProvider>
    </ChakraProvider>
  )
}
