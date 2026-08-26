import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
import { ThemeProvider, useTheme } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes'
import * as React from 'react'

/* eslint-disable react-refresh/only-export-components -- hooks and components intentionally share the file */

const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: '{colors.orange.500}' },
          contrast: { value: 'white' },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)

export type ColorModeProviderProps = ThemeProviderProps

export function ColorModeProvider(props: ColorModeProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      disableTransitionOnChange
      defaultTheme="dark"
      {...props}
    />
  )
}

export type ColorMode = 'light' | 'dark'

export function useColorMode(): {
  colorMode: ColorMode
  setColorMode: (colorMode: ColorMode) => void
  toggleColorMode: () => void
} {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const toggleColorMode = React.useCallback(() => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }, [resolvedTheme, setTheme])
  return {
    colorMode: theme as ColorMode,
    setColorMode: setTheme,
    toggleColorMode,
  }
}

export function useColorModeValue<T>(light: T, dark: T): T {
  const { colorMode } = useColorMode()
  return colorMode === 'dark' ? dark : light
}
