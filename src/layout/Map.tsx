import {Box,HStack,Center,Text} from '@chakra-ui/react'

const Map = () => (
    <Box p="4">
        <HStack direction="row" justify="space-evenly">
            <Center>
                <Text>
                    Manchester Arndale, located in the heart of the city centre, is home to over 200 stores ranging from high-street fashion to popular lifestyle brands. With direct access to Market Street and Exchange Square, it’s a one-stop destination for everything from wardrobe staples to statement pieces
                </Text>
            </Center>
            <Box>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d151986.85005209554!2d-2.3882682393487875!3d53.47213208322671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester!5e0!3m2!1sen!2suk!4v1746848753662!5m2!1sen!2suk" width="600" height="450" loading="lazy"></iframe>
            </Box>
            </HStack>
    </Box>
    
);

export default Map; 