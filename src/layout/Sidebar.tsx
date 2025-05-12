import { Box, Center, Flex, VStack, Link, Timeline, Separator} from '@chakra-ui/react';

const Sidebar = () => (
  <Box>
  <Box p="4" w="30vw">
    <Center>
  <VStack  justify="space-evenly" align="stretch">
    <Timeline.Root size="xl" variant="outline">
  <Timeline.Item>
    <Timeline.Connector>
      <Timeline.Separator />
      <Timeline.Indicator>1</Timeline.Indicator>
    </Timeline.Connector>
    <Timeline.Content>
    <Timeline.Title><Link href="/review" color="#eee">Reviews</Link></Timeline.Title>
      <Timeline.Description />
    </Timeline.Content>
  </Timeline.Item>
  <Timeline.Item>
    <Timeline.Connector>
      <Timeline.Separator />
      <Timeline.Indicator>2</Timeline.Indicator>
    </Timeline.Connector>
    <Timeline.Content>
    <Timeline.Title><Link href="/" color="#eee">About Us</Link></Timeline.Title>
      <Timeline.Description />
    </Timeline.Content>
  </Timeline.Item>
  <Timeline.Item>
    <Timeline.Connector>
      <Timeline.Separator/>
      <Timeline.Indicator>3</Timeline.Indicator>
    </Timeline.Connector>
    <Timeline.Content>
      <Timeline.Title><Link href="#" color="#eee">More Info</Link></Timeline.Title>
      <Timeline.Description />
    </Timeline.Content>
  </Timeline.Item>
</Timeline.Root>

    </VStack>
    </Center>
    
    </Box>
    
    </Box>
);

export default Sidebar;


      