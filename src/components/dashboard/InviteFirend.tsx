import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const InviteFirend = () => {
  return (
   <VStack maxW={'100vw'} p='2rem'>
        <Box my={'2rem'} bg={'blue.100'} w='3px' h='30px' rounded={'full'}></Box>

        <Heading>
            Invite your friends, <br/> Earn points
        </Heading>

        <Text>
            The more friends you invite, The more points <br/> you acquire to do more
        </Text>

        <Button bg={'blue'} color='white'>
            Share Invite
        </Button>
   </VStack>
  )
}

export default InviteFirend
