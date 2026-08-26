import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/NavBar'

function App() {
  return (
    <Grid
      h="100dvh"
      templateAreas={{
        base: '"nav" "main" "aside"',
        lg: '"nav nav" "aside main"',
      }}
      gridTemplateRows={{ base: 'auto 1fr auto', lg: 'auto 1fr' }}
      gridTemplateColumns={{ base: '1fr', lg: '250px 1fr' }}
    >
      <GridItem gridArea="nav" p="4">
        <NavBar />
      </GridItem>
      <GridItem gridArea="aside" bg="orange.300" p="4" hideBelow="lg">
        aside
      </GridItem>
      <GridItem gridArea="main" bg="gray.50" p="4" overflowY="auto">
        main
      </GridItem>
    </Grid>
  )
}

export default App
