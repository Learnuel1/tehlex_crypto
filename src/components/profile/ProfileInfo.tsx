import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import profile from '../../assets/images/signin.png'

const ProfileInfo = () => {
    const navigate = useNavigate();
  return (
    <Box maxW={'100vw'} minH='40vw' p={'2rem'}>
       <Stack my={'2rem'} gap='2rem'>
            <Heading textAlign={'center'} size='md'>Profile</Heading>

            <IoIosArrowRoundBack size={'2.5rem'} color='blue' 
                onClick={() =>navigate(-1) }
            />    
       </Stack>
       
       <Flex justify={'center'} my='3rem'>
        <Image alt='profile_img' src={profile} w='180px' h='200px' rounded={'full'} />
       </Flex>

       <Stack gap={'2rem'} mb='2rem' fontWeight={'bold'} textAlign='center'>
            <Text bg={'gray.100'} p='1rem'>ThankGod</Text>

            <Text bg={'gray.100'} p='1rem'>Uche</Text>

            <Text bg={'gray.100'} p='1rem'>dgreatuc%gmail.com</Text>

            <Text bg={'gray.100'} p='1rem'>07069790950</Text>
       </Stack>
    </Box>
  )
}

export default ProfileInfo
