import { HStack, Image, Text, Spacer } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import { ColorSwitchButton } from './ColorSwitchButton'

const NavBar = () => (
  <HStack>
    <Image src={logo} alt="logo" boxSize="60px" />
    <Text>
      My App
    </Text>
    <Spacer />
    <ColorSwitchButton />
  </HStack>
)

export default NavBar
