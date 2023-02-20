import { Box, Flex, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react';
import testimonial from '../../assets/images/testimonial.png'

const Testimonial = () => {
  return (
   <Box maxW='100vw' p='2rem' m='1rem' bg={'gray.50'}>
        <VStack>
            <Text color={'blue'}>TESTIMONIALS</Text>
            <Heading size={['sm','lg']}>
                Hear the awesome things people  said about Us            
            </Heading>
        </VStack>
        <Flex w='80vw' mt={'3rem'} p='1rem' justify={'space-evenly'} wrap='wrap' gap={'1rem'}> 
            <Stack w={['100%', '100%','25%','25%']} p='1rem' boxShadow={'base'}>
                <HStack>
                <Image alt='testimonial' src={testimonial} w='40px' rounded={'full'} loading='lazy' />
                <Stack>
                    <Text fontWeight={'bold'}>John Doe</Text>
                    <Text>Ceo Million design</Text>
                </Stack>
                </HStack>
                <Text>
                know it is a state of mind in which there is absolutely no fear and you act and react instinctively. You 
                don't weigh alternatives or consider consequences or second-guess yourself. 
                </Text>
            </Stack>

            <Stack w={['100%', '100%','25%','25%']} p='1rem' boxShadow={'base'}>
                <HStack>
                <Image alt='testimonial' src={testimonial} w='40px' rounded={'full'} />
                <Stack>
                    <Text fontWeight={'bold'}>John Doe</Text>
                    <Text>Ceo Million design</Text>
                </Stack>
                </HStack>
                <Text>
                know it is a state of mind in which there is absolutely no fear and you act and react instinctively. You 
                don't weigh alternatives or consider consequences or second-guess yourself. 
                </Text>
            </Stack>

            <Stack w={['100%', '100%','25%','25%']} p='1rem' boxShadow={'base'}>
                <HStack>
                <Image alt='testimonial' src={testimonial} w='40px' rounded={'full'} />
                <Stack>
                    <Text fontWeight={'bold'}>John Doe</Text>
                    <Text>Ceo Million design</Text>
                </Stack>
                </HStack>
                <Text>
                know it is a state of mind in which there is absolutely no fear and you act and react instinctively. You 
                don't weigh alternatives or consider consequences or second-guess yourself. 
                </Text>
            </Stack>

            
        </Flex>
   </Box>
  )
}

export default Testimonial
