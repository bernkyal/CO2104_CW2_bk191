// Shops.tsx
import { Box, Button, Center, Grid, Image, Stack, Text, Separator, AvatarIcon, Field, Input, Avatar, Fieldset  } from '@chakra-ui/react';
import { HiHeart } from "react-icons/hi"
import { RatingGroup, Tabs, Card, HStack, Badge, GridItem, Textarea } from "@chakra-ui/react"
import { useState } from "react"
import hnmImage from '../assets/hnm-manchester.jpg'
import React from 'react';

interface Review {
  id: number
  name: string
  age: number
  rating: number
  likes: number
  comment: string
}

const reviews: Review[] = [
  { id: 1, name: 'Martin Dough', age: 42, rating: 5, likes: 99, comment: 'Lorem ipsum dolor siacear neautin set recaushandine nisi possimus' },
  { id: 2, name: 'Avylin Wala', age: 23, rating: 2, likes: 32, comment: 'Lorem ipsum dolor siacear neautin set recaushandine nisi possimus' },
  { id: 3, name: 'Mogo Bala', age: 18, rating: 1, likes: 1, comment: 'Lorem ipsum dolor siacear neautin set recaushandine nisi possimus' },
  { id: 4, name: 'Mandela Montia', age: 88, rating: 4, likes: 168, comment: 'Lorem ipsum dolor siacear neautin set recaushandine nisi possimus' },
  { id: 5, name: 'Walgo Dowie', age: 23, rating: 3, likes: 12, comment: 'Lorem ipsum dolor siacear neautin set recaushandine nisi possimus' },
  { id: 6, name: 'Sarah Amaze', age: 28, rating: 5, likes: 294, comment: 'Lorem ipsum dolor siacear neautin set recaushandine nisi possimus' },
]


const ShopHnM = () => {

  const [value, setValue] = useState<string | null>("first")
  const popularReviews = React.useMemo(() => [...reviews].sort((a, b) => b.likes - a.likes), [])
  const [recentReviews, setRecReviews] = useState<Review[]>(reviews);
  const [isWritingReview, setIsWritingReview] = useState<boolean>(false)
  

   const handleLikeRev = (id: number) => {
    setRecReviews((rs) =>
      rs.map((r) =>
        r.id === id ? { ...r, likes: r.likes + 1 } : r
      )
    );
  };

  return (

    <Box flex={1} w="100vw" p={8} textAlign={"left"}>      
     {/* View Reviews */}
      <Grid templateColumns={isWritingReview ? "1fr" : "repeat(2, 1fr)"} rounded="md" border={"1px solid #333"} p={6} gap="6">
        <GridItem>
          {isWritingReview ? (
          <Box bg={'#111'} p={4} rounded="md">
        <Fieldset.Root size="lg" maxW="md">
                  <Stack>
                    <Fieldset.Legend>Write a Review</Fieldset.Legend>
                    <Fieldset.HelperText>
                      Please provide review information.
                    </Fieldset.HelperText>
                  </Stack>
        
                   <Fieldset.Content>
                    <Field.Root>
                      <Field.Label>Name</Field.Label>
                      <Input name="name" />
                    </Field.Root>
        
                    <Field.Root>
                      <Field.Label>Age</Field.Label>
                      <Input name="age" type="age=" />
                    </Field.Root>
        
                    <Field.Root>
                      <Field.Label>Rating</Field.Label>
                      <RatingGroup.Root count={5} defaultValue={5} size="lg" pt={4}>
                                  <RatingGroup.HiddenInput />
                                  <RatingGroup.Control />
                                </RatingGroup.Root>
                    </Field.Root>
                 
                      
                    <Field.Root>
                      <Field.Label>Comment</Field.Label>
                      <Textarea autoresize />
                    </Field.Root>
                    
                   
                  </Fieldset.Content>
                 
                 <Stack direction="row" spaceX={4} mt={4}>
                        <Button
                          colorScheme="blue"
                          onClick={() => {
                            /* TODO: submit logic */
                            setIsWritingReview(false)
                          }}
                        >
                          Submit
                        </Button>
                        <Button onClick={() => setIsWritingReview(false)}>
                          Cancel
                        </Button>
                      </Stack>
                </Fieldset.Root>
      </Box>
          ) : ( 


          <Card.Root h="100vh" flexDirection="row" overflow="hidden">
            <Image
              objectFit="cover"
              maxW="20vw"
              src={hnmImage}
              alt="HnM"
            />
            <Box>
              <Card.Body>
                <Card.Title mb="2">H&M</Card.Title>
                <Card.Description>
                  H&M Manchester (Market Street) is located at 68–70 Market Street in the heart of Manchester city centre, just a stone’s throw from St Peter’s Square. It spans multiple floors and stocks H&M’s full range—Young Divided, H&M Beauty, H&M Home, Men’s (Street, Casual, Smart, Move), Kids and Ladies collections—all under one roof.
                </Card.Description>
                <HStack mt="4">
                  <Badge>Budget</Badge>
                  <Badge>Children</Badge>
                </HStack>
              </Card.Body>
              <Card.Footer>
                <Button onClick={() => setIsWritingReview(true)} >Write a Review</Button>
              </Card.Footer>
            </Box>
          </Card.Root>
          )}
        </GridItem> 

        {!isWritingReview && (
        <GridItem>
          
          <Separator orientation="vertical" h="4" />
          <Tabs.Root value={value} onValueChange={(e) => setValue(e.value)}>
            <Tabs.List w="100%"            // make the list span the full container
              display="flex"      // ensure it’s a flex container
              justifyContent="flex-end">
              <Tabs.Trigger value="first">Recent</Tabs.Trigger>
              <Tabs.Trigger value="second">Popular</Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="first">

              <Box
                maxH="80vh"
                overflow="auto"
                pr={4}
                shadow={"inner"}>

                {recentReviews.map((r) => (
                  <Card.Root border="1px solid #333" bg="#222" p={4} m={4} gap={4}>
                    <Box display="flex" alignItems="center">
                      <Box onClick={() => handleLikeRev(r.id)}
                          cursor="pointer">
                        <Center>
                          <Avatar.Root bg={"red"}>
                            <HiHeart></HiHeart>
                          </Avatar.Root>
                          <Text p="2" fontWeight="bold">{r.likes}</Text>
                        </Center>
                      </Box>
                      <Box w="10vw">

                        <Center>
                          <Avatar.Root>
                            <AvatarIcon></AvatarIcon>
                          </Avatar.Root>
                        </Center>
                      </Box>

                      <Box w="20vw">
                        <Text><b>Name:</b> {r.name}</Text>
                        <Text><b>Age:</b> {r.age}</Text>
                        <RatingGroup.Root count={5} defaultValue={r.rating} size="lg" pt={4}>
                          <RatingGroup.HiddenInput />
                          <RatingGroup.Control />
                        </RatingGroup.Root>

                      </Box>
                    </Box>

                    <Separator></Separator>
                    <Text>Comment:</Text>
                    <Text>{r.comment}</Text>
                  </Card.Root>


                ))}

              </Box>
                         </Tabs.Content>
            

            <Tabs.Content value="second">

              <Box
                maxH="80vh"
                overflow="auto"
                pr={4}
                shadow={"inner"}>

                {popularReviews.map((r) => (
                  <Card.Root border="1px solid #333" bg={"#222"} p={4} m={4} gap={4}>
                    <Box display="flex" alignItems="center">
                      <Box onClick={() => handleLikeRev(r.id)}
                          cursor="pointer">
                        <Center>
                          <Avatar.Root bg={"red"}>
                            <HiHeart></HiHeart>
                          </Avatar.Root>
                          <Text p="2" fontWeight="bold">{r.likes}</Text>
                        </Center>
                      </Box>
                      <Box w="10vw">

                        <Center>
                          <Avatar.Root>
                            <AvatarIcon></AvatarIcon>
                          </Avatar.Root>
                        </Center>
                      </Box>

                      <Box w="20vw">
                        <Text><b>Name:</b> {r.name}</Text>
                        <Text><b>Age:</b> {r.age}</Text>
                        <RatingGroup.Root count={5} defaultValue={r.rating} size="lg" pt={4}>
                          <RatingGroup.HiddenInput />
                          <RatingGroup.Control />
                        </RatingGroup.Root>

                      </Box>
                    </Box>

                    <Separator></Separator>
                    <Text>Comment:</Text>
                    <Text>{r.comment}</Text>
                  </Card.Root>


                ))}

              </Box>

            </Tabs.Content>

          </Tabs.Root>
        
          
        </GridItem>
        )}
      </Grid>
    </Box >


  )
};

export default ShopHnM;