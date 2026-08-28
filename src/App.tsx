import { useState } from "react";
import { Grid, GridItem, HStack } from '@chakra-ui/react'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'
import PlatformSelector from './components/PlatformSelector'
import type { Genre } from './entities/Genre'
import type { Platform } from './entities/Platform'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

  return (
    <Grid
      h="100dvh"
      templateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav" "aside main"',
      }}
      gridTemplateRows={{ base: 'auto 1fr auto', lg: 'auto 1fr' }}
      gridTemplateColumns={{ base: '1fr', lg: '300px 1fr' }}
    >
      <GridItem gridArea="nav" bg={{ _light: 'gray.50', _dark: 'gray.800' }} p="4">
        <NavBar />
      </GridItem>
      <GridItem gridArea="aside" bg={{ _light: 'gray.50', _dark: 'gray.800' }} color="fg" p="4" hideBelow="lg">
        <GenreList selectedGenre={selectedGenre} onSelectGenre={setSelectedGenre} />
      </GridItem>
      <GridItem gridArea="main" bg={{ _light: 'gray.50', _dark: 'gray.800' }} color="fg" p="4" overflowY="auto">
        <HStack mb={4}>
          <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={setSelectedPlatform} />
        </HStack>
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
      </GridItem>
    </Grid>
  )
}

export default App
