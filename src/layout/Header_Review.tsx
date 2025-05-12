// Header_Review.tsx
import { Box, Heading, IconButton, Stack, Text,  Separator } from '@chakra-ui/react';
import { Field, Input } from "@chakra-ui/react"
import { LuSearch } from 'react-icons/lu';

const Header = () => (

<Box flex={1} w="100vw">
  <Box p={4} color="white" flex={1} bg={"#1e1e1e"} h="40vh">
<Stack direction="row">
    <Box p={8} pt={"8vh"} textAlign={"left"} fontWeight={"bold"} w={"30vw"}>
    <Heading  size="6xl" fontWeight={"bolder"} fontFamily={"Oi"}>Reviews</Heading>
    <Text fontSize="xl">Find public opinion</Text>
    </Box>    
    <Box  pt={"8vh"} flex={1}>
      
    <Field.Root>
      <Field.Label>Search</Field.Label>
      
      <Box display="flex" w="90%" gap={2}>
      <Input placeholder="Primark" />
      <IconButton aria-label="Search database">
        <LuSearch></LuSearch>
      </IconButton>
      </Box>
    
      <Field.HelperText>Search for a store</Field.HelperText>
    </Field.Root>
    </Box>
    </Stack>
  </Box>
  <Separator></Separator>
  </Box>
);

export default Header;