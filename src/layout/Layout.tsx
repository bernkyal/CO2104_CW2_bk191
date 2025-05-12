import { Flex } from '@chakra-ui/react';
import Footer from './Footer';
import NavBar from './NavBar';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <Flex direction="column" w="100vw" minHeight="100vh">
    <NavBar/>
    
    <Flex flex="1">
      <Flex as="main" flex="1" >
        {children}
      </Flex>
      
    </Flex>
    <Footer /> 
  </Flex>
);

export default Layout;
