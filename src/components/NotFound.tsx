import { Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <VStack bg={'black'} w='100vw' color={'white'} p='3rem' minH={'100vh'}>
        <Stack gap={'1rem'}>
            <Heading>
                Page Not Found
            </Heading>
            <Text >
                You have entered a url that does not exist on this page
            </Text>
            <Text color={'blue'}>
                <Link to={'/'}>Go Back Home</Link>
            </Text>
        </Stack>
    </VStack>
  )
}

export default NotFound
