// Profile.tsx
import { Avatar, VStack, Field, Card, HStack, Badge, Input, Textarea, Box, Button, Center, Stack} from '@chakra-ui/react';
import { Toaster, toaster } from "@/components/ui/toaster"
import {PasswordInput } from "@/components/ui/password-input"


const Shop = () => (

  <Box flex={1} w="100vw" textAlign={"left"} pb={8}>
    <Center>
      <Card.Root flexDirection="row" w="60vw" overflow="hidden" border={"1px solid #444"}>

        <Box w="100%">
          <Card.Body p={4}>
            <Center>
              <VStack>
            <Avatar.Root size="2xl" shape="rounded">
          <Avatar.Fallback name="B K" />
        </Avatar.Root>
            <Card.Title mb="2">Profile Details</Card.Title>
            </VStack>
            </Center>

            <Stack gap="4" w="full">
              <Field.Root>
                <Field.Label>First Name</Field.Label>
                <Input value="Bernard" />
              </Field.Root>
              <Field.Root>
                <Field.Label>Last Name</Field.Label>
                <Input value="Kyaluzi" />
              </Field.Root>

              <Field.Root>
            <Field.Label>Email</Field.Label>
            <Input value="bk@gmail.com" />
            </Field.Root>

              <Field.Root>
                <Field.Label>Bio</Field.Label>
                <Textarea autoresize value="Love this stuff"></Textarea>
              </Field.Root>
            
             <Field.Root>
            <Field.Label>Password</Field.Label>
            <PasswordInput
        defaultValue="secret"
        visible={false}
             />
           
            </Field.Root>

            <Field.Root>
            <Field.Label>User Tags</Field.Label>
            </Field.Root>
            <HStack>
              <Badge size="lg">New User</Badge>
              <Badge size="lg">Beginner Shopper</Badge>
            </HStack>
            
          </Stack>
          </Card.Body>
          <Card.Footer justifyContent="right">
            <Button 
              variant="outline"
              size="lg"
              
              onClick={() =>
                toaster.success({
                  title: "Save successful",
                  description: "Profile saved successfully to the server",
                  action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                  },
                })
              }
            >
              Save
            </Button>
          </Card.Footer>
        </Box>
      </Card.Root>
    </Center>
    <Toaster></Toaster>
  </Box >


);

export default Shop;