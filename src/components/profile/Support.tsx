import { Box, Button, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'

const ProfileSupport = () => {
    const navigate = useNavigate();
  return (
    <Box maxW={'100vw'} minH='50vh' p='2rem'>
        <Stack my={'2rem'} gap='2rem'>
            <Heading textAlign={'center'} size='md'>Support</Heading>

            <IoIosArrowRoundBack size={'2.5rem'} color='blue' 
                onClick={() =>navigate(-1) }
            />    
       </Stack>
       
       <Box fontWeight={'bold'} ml={['1rem','2rem','4rem','12rem']}>
            <Text>Contact us</Text>
       </Box>

       <Stack>

        {/* Live Chat */}
            <Link to={''} >
                <HStack w={['ful','full','95%','70%',]} mx={'auto'} justify={'space-between'} 
                    bg='gray.200' p='1rem' my={'1.5rem'}>
                        <Flex gap={'2rem'} alignItems='center'>
                            <Text bg={'gray.100'}  rounded='full' >
                                Icon
                            </Text>

                            <Text fontWeight={'bold'}>Live Chat</Text>                        
                        </Flex>

                        <Text>icon</Text>
                    </HStack>
            </Link >

            {/* Send us a Mail */}
            <Link to={''} >
                <HStack w={['ful','full','95%','70%',]} mx={'auto'} justify={'space-between'} 
                    bg='gray.200' p='1rem' my={'1.5rem'}>
                        <Flex gap={'2rem'} alignItems='center'>
                            <Text bg={'gray.100'}  rounded='full' >
                                Icon
                            </Text>

                            <Text fontWeight={'bold'}>Send us a Mail</Text>                        
                        </Flex>

                        <Text>icon</Text>
                    </HStack>
            </Link >

            {/* Hotline */}
            <Link to={''} >
                <HStack w={['ful','full','95%','70%',]} mx={'auto'} justify={'space-between'} 
                    bg='gray.200' p='1rem' my={'1.5rem'}>
                        <Flex gap={'2rem'} alignItems='center'>
                            <Text bg={'gray.100'}  rounded='full' >
                                Icon
                            </Text>

                            <Text fontWeight={'bold'}>Hotline</Text>                        
                        </Flex>

                        <Text>icon</Text>
                    </HStack>
            </Link >
       </Stack>

       {/* Follow us */}

       <Box fontWeight={'bold'} ml={['1rem','2rem','4rem','12rem']} mt={'4rem'}>
            <Text>Follow us</Text>
       </Box>

       <Stack>

        {/* Instagram */}
            <Link to={''} >
                <HStack w={['ful','full','95%','70%',]} mx={'auto'} justify={'space-between'} 
                    bg='gray.200' p='1rem' my={'1.5rem'}>
                        <Flex gap={'2rem'} alignItems='center'>
                            <Text bg={'gray.100'}  rounded='full' >
                                Icon
                            </Text>

                            <Text fontWeight={'bold'}>Instagram</Text>                        
                        </Flex>

                        <Text>icon</Text>
                    </HStack>
            </Link >

            {/* Twitter */}
            <Link to={''} >
                <HStack w={['ful','full','95%','70%',]} mx={'auto'} justify={'space-between'} 
                    bg='gray.200' p='1rem' my={'1.5rem'}>
                        <Flex gap={'2rem'} alignItems='center'>
                            <Text bg={'gray.100'}  rounded='full' >
                                Icon
                            </Text>

                            <Text fontWeight={'bold'}>Twitter</Text>                        
                        </Flex>

                        <Text>icon</Text>
                    </HStack>
            </Link >

            {/* Facebook */}
            <Link to={''} >
                <HStack w={['ful','full','95%','70%',]} mx={'auto'} justify={'space-between'} 
                    bg='gray.200' p='1rem' my={'1.5rem'}>
                        <Flex gap={'2rem'} alignItems='center'>
                            <Text bg={'gray.100'}  rounded='full' >
                                Icon
                            </Text>

                            <Text fontWeight={'bold'}>Facebook</Text>                        
                        </Flex>

                        <Text>icon</Text>
                    </HStack>
            </Link >
       </Stack>
    </Box>
  )
}

export default ProfileSupport
