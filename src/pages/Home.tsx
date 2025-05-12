import { Heading } from '@chakra-ui/react';
import Header from '../layout/Header'
import Map from '../layout/Map'


const Home = () => (<div>
    <Header /> 
    <Heading size="4xl" p="5">What's On</Heading>
    <Map />
    </div>);

export default Home;