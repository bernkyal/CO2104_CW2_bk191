import { Flex } from '@chakra-ui/react';
import Footer from './Footer';
import NavBar from './NavBar';
import {Outlet} from 'react-router-dom'
//import type { ReactNode } from 'react';

// interface LayoutProps {
//   children: ReactNode;
// }

const Layout = () => (
  <Flex direction="column" w="100vw" minHeight="100vh">
    <NavBar/>
    
    <Flex flex="1">
      <Flex as="main" flex="1" >
        <Outlet />
      </Flex>
      
    </Flex>
    <Footer /> 
  </Flex>
);

export default Layout;
