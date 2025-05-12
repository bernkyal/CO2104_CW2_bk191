// Header.tsx
import { Box, Button,  Heading, Stack, Text,  Separator } from '@chakra-ui/react';
import bg from '../assets/header_background_edit.jpg'

const Header = () => (

<Box flex={1} w="100vw">
  <Box p={4} color="white" backgroundImage={`url(${bg})`} backgroundSize="cover" flex={1}  h="90vh">
<Stack direction="row">
    <Box p={8} pt={"10vh"} textAlign={"left"}>
    <Text fontSize="xl" fontWeight={"bold"}>The best in town</Text>
    <Heading pb={4} size="7xl" fontWeight={"100"} fontFamily={"'Oi', serif"}>Manchester <br/> Shopping Guide</Heading>
    <Text pb={8} fontSize="xl" fontWeight={"bolder"} color="yellow">Find your outfit by planning your next shopping trip!</Text>
    <Button bg="#222" border="1px solid" color="white" fontWeight={"bold"}>Learn More</Button>
    </Box>    
    </Stack>
  </Box>
  <Separator></Separator>
  </Box>
);

export default Header;