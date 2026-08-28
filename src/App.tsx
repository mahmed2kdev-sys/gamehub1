import { useState } from "react";
import { Grid, GridItem } from '@chakra-ui/react'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'
import type { Genre } from './entities/Genre'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

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
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App
