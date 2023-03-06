import { Box, Button, Flex, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import cust from '../../assets/images/testimonial.png'

const ProfileHome = () => {
  return (
    <Box maxW={'100vw'} minH='50vh' p='2rem'>
        <Heading textAlign={'center'} size='md' mb='4rem'>Account Settings</Heading>

        <HStack p={'.7rem'} bg='gray.200' w={['full','full','70%','50%']} mx={'auto'} justify={'space-evenly'} rounded='2xl'>
            <Image alt='cust_img' src={cust} w='100px' rounded={'full'} loading='lazy'  />
            <Stack>
                <Text fontWeight={'bold'} >Uche ThankGod</Text>
                <Text>tggreatuche@gmail.com</Text>
                <Text>20 POINTS</Text>
            </Stack>
        </HStack>

        <Box my={'6rem'}>
            {/* profile */}
            <Link to={"/profile/info"} >
                <HStack w={['ful','full','90%','70%',]} mx={'auto'} justify={'space-between'} bg='gray.50' p='.5rem'>
                    <Flex gap={'2rem'} alignItems='center'>
                    <Text bg={'gray.50'}  rounded='full' >
                        Icon
                    </Text>

                    <Stack>
                        <Text fontWeight={'bold'}>Profile</Text>
                        <Text fontSize={['12px','12px','14px']}>
                            Questions you need an answer to
                        </Text>
                    </Stack>
                    </Flex>

                    <Text>icon</Text>
                </HStack>
            </Link>

            {/* security */}
            <Link to={"/profile/security"} >
                <HStack w={['ful','full','90%','70%',]} mx={'auto'} justify={'space-between'} 
                bg='gray.50' p='.5rem' my={'2rem'}>
                    <Flex gap={'2rem'} alignItems='center'>
                    <Text bg={'gray.50'}  rounded='full' >
                        Icon
                    </Text>

                    <Stack>
                        <Text fontWeight={'bold'}>Security</Text>
                        <Text fontSize={['12px','12px','14px']}>
                            Questions you need an answer to
                        </Text>
                    </Stack>
                    </Flex>

                    <Text>icon</Text>
                </HStack>
            </Link>

            {/* Refer and Earn */}
            <Link to={"/profile/referal"} >
                <HStack w={['ful','full','90%','70%',]} mx={'auto'} justify={'space-between'} 
                bg='gray.50' p='.5rem' my={'2rem'}>
                    <Flex gap={'2rem'} alignItems='center'>
                    <Text bg={'gray.50'}  rounded='full' >
                        Icon
                    </Text>

                    <Stack>
                        <Text fontWeight={'bold'}>Refer and Earn</Text>
                        <Text fontSize={['12px','12px','14px']}>
                            Questions you need an answer to
                        </Text>
                    </Stack>
                    </Flex>

                    <Text>icon</Text>
                </HStack>
            </Link>

                {/* Point Earnings */}
            {/* <Link to={''} >
                <HStack w={['ful','full','90%','70%',]} mx={'auto'} justify={'space-between'} 
                bg='gray.50' p='.5rem' my={'2rem'}>
                    <Flex gap={'2rem'} alignItems='center'>
                    <Text bg={'gray.50'}  rounded='full' >
                        Icon
                    </Text>

                    <Stack>
                        <Text fontWeight={'bold'}>Point Earnings</Text>
                        <Text fontSize={['12px','12px','14px']}>
                            Questions you need an answer to
                        </Text>
                    </Stack>
                    </Flex>

                    <Text>icon</Text>
                </HStack>
            </Link> */}

            {/* FAQ */}
            <Link to={"/profile/faqs"} >
                <HStack w={['ful','full','90%','70%',]} mx={'auto'} justify={'space-between'} 
                bg='gray.50' p='.5rem' my={'2rem'}>
                    <Flex gap={'2rem'} alignItems='center'>
                    <Text bg={'gray.50'}  rounded='full' >
                        Icon
                    </Text>

                    <Stack>
                        <Text fontWeight={'bold'}>FAQ</Text>
                        <Text fontSize={['12px','12px','14px']}>
                            Questions you need an answer to
                        </Text>
                    </Stack>
                    </Flex>

                    <Text>icon</Text>
                </HStack>
            </Link>

            
            {/* Support */}
            <Link to={"/profile/support"} >
                <HStack w={['ful','full','90%','70%',]} mx={'auto'} justify={'space-between'} 
                bg='gray.50' p='.5rem' my={'2rem'}>
                    <Flex gap={'2rem'} alignItems='center'>
                    <Text bg={'gray.50'}  rounded='full' >
                        Icon
                    </Text>

                    <Stack>
                        <Text fontWeight={'bold'}>Support</Text>
                        <Text fontSize={['12px','12px','14px']}>
                            Questions you need an answer to
                        </Text>
                    </Stack>
                    </Flex>

                    <Text>icon</Text>
                </HStack>
            </Link>

            
            {/* About */}
            <Link to={"/profile/about"} >
                <HStack w={['ful','full','90%','70%',]} mx={'auto'} justify={'space-between'} 
                bg='gray.50' p='.5rem' my={'2rem'}>
                    <Flex gap={'2rem'} alignItems='center'>
                    <Text bg={'gray.50'}  rounded='full' >
                        Icon
                    </Text>

                    <Stack>
                        <Text fontWeight={'bold'}>About</Text>
                        <Text fontSize={['12px','12px','14px']}>
                            Questions you need an answer to
                        </Text>
                    </Stack>
                    </Flex>

                    <Text>icon</Text>
                </HStack>
            </Link>

             {/* Terms */}
             <Link to={"/profile/terms"} >
                <HStack w={['ful','full','90%','70%',]} mx={'auto'} justify={'space-between'} 
                bg='gray.50' p='.5rem' my={'2rem'}>
                    <Flex gap={'2rem'} alignItems='center'>
                    <Text bg={'gray.50'}  rounded='full' >
                        Icon
                    </Text>

                    <Stack>
                        <Text fontWeight={'bold'}>Terms</Text>
                        <Text fontSize={['12px','12px','14px']}>
                            Questions you need an answer to
                        </Text>
                    </Stack>
                    </Flex>

                    <Text>icon</Text>
                </HStack>
            </Link>
        </Box>

       <Flex justify={'center'}>
            <Button size={'lg'} w='50%' color={'red'}>Logout</Button>
       </Flex>
    </Box>
  )
}

export default ProfileHome
