import { Box, Heading, Stack, VStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import emoji from '../../assets/images/emoji.png'


const ProfileTerms = () => {
    const navigate = useNavigate();
    return (
      <Box maxW={'100vw'} minH='40vh' p='2rem'>
          <Stack my={'2rem'} gap='2rem'>
              <Heading textAlign={'center'} size='md'>Terms</Heading>
  
              <IoIosArrowRoundBack size={'2.5rem'} color='blue' 
                  onClick={() =>navigate(-1) }
              />    
         </Stack>
  
         <VStack gap={'2rem'}>
              <Image alt='img' src={emoji} w='150px' />
  
              <Text fontWeight={'bold'}>Terms and Privacy</Text>
  
              <Text>
                  How do i sign up on tehlex accountHow do i sign up on tehlex accountHow do i sign up on tehlex accountHow do i sign up on tehlex accountHow do i sign up on tehlex accountHow do i sign up on tehlex account How do i sign up on tehlex accountHow do i sign up on tehlex accountHow do i sign up on tehlex accountHow do i sign up on
  
                  Tehlex accountHow do i sign up on tehlex accountHow do i sign up on tehlex account How do i sign up on tehlex accountHow do i sign up on tehlex accountHow do i sign up on tehlex accountHow do i sign up on tehlex accountHow do i sign up on tehlex accountHow do i sign up on tehlex account How do i sign up on tehlex accountHow do i sign up on tehlex accountHow do i sign up on tehlex accountHow do i sign up on tehlex accountHow do i sign up on tehlex accountHow do i sign up on tehlex account
              </Text>
         </VStack>
      </Box>
    )
  }

export default ProfileTerms
