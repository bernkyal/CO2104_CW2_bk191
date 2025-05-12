import { Box, Stack, StackSeparator, HStack, Avatar } from '@chakra-ui/react'
import { Button, Popover, Portal, AvatarGroup, Card, Badge } from '@chakra-ui/react'

const NavBar = () => (

    <Box shadow="md" zIndex={1}>
        <Stack direction="row" align="center" w="100vw" p="2" separator={<StackSeparator />}>
            <Box color="white" fontWeight={'bold'} w="30vw">The Manchester Shopper</Box>
            <HStack flex={1} justify="space-evenly">
                <Button variant="ghost" color="yellow" asChild><a href="/" color="#eee">Home</a></Button>
                <Button variant="ghost">Map</Button>
                <Button variant="ghost">Events</Button>
                <Button variant="ghost" color="yellow" asChild><a href="./review" color="#eee">Reviews</a></Button>
                <Button variant="ghost">Wishlist</Button>


                <Popover.Root positioning={{ placement: "bottom-end" }}>
                    <Popover.Trigger asChild>
                        <AvatarGroup>
                            <Avatar.Root>
                                <Avatar.Fallback />
                                <Avatar.Image />
                            </Avatar.Root>
                        </AvatarGroup>

                    </Popover.Trigger>
                    <Portal>
                        <Popover.Positioner>
                            <Popover.Content>
                                <Popover.Arrow />
                                <Popover.Body>
                                    <Card.Root>
                                    <Card.Body gap="2">
                                        <Avatar.Root size="lg" shape="rounded">
                                            <Avatar.Fallback name="B K" />
                                        </Avatar.Root>
                                        <Card.Title mt="2">Bernard Kyaluzi</Card.Title>
                                        <Card.Description>
                                            You can edit your personal details here. Just to enter the settings to do so.
                                            <HStack pt={2}>
                                                          <Badge size="lg">New User</Badge>
                                                          <Badge size="lg">Beginner Shopper</Badge>
                                                        </HStack>
                                        </Card.Description>
                                    </Card.Body>
                                    <Card.Footer justifyContent="flex-end">
                                        <Button asChild color="white" variant="outline"><a href="./userprofile">Settings</a></Button>
                                         <Button asChild color="white" variant="subtle"><a href="./userprofile">Sign Out</a></Button>
                                    </Card.Footer>
                                </Card.Root></Popover.Body>
                            </Popover.Content>
                        </Popover.Positioner>
                    </Portal>
                </Popover.Root>
            </HStack>
        </Stack>
    </Box>

);

export default NavBar;