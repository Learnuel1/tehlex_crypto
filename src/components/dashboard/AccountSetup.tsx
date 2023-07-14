import { Box, Button, Heading, Stack, Text, Image, Flex } from '@chakra-ui/react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { useLocation, useNavigate } from 'react-router-dom';
import left_arrow from '../../assets/images/arrowleft.png'
import ring from '../../assets/images/ring.png'
import small_arrow from '../../assets/images/smallrightarrow.png'
const AccountSetup = () => {
    const navigate = useNavigate();

    return (
        <Box maxW={'100vw'} p='2rem' fontFamily='Mulish'>
            <Text mb='.5rem' display={{ base: 'none', md: 'block' }}>
                <IoIosArrowRoundBack size={'2.5rem'} color='blue'
                    onClick={() => navigate(-1)}
                />
            </Text>
            <Heading my={'1rem'} textAlign={'center'} size={'lg'} display={{ base: 'none', md: 'block' }}>Account Setup</Heading>
            <Flex align={{ md: 'center', base: 'center' }} justify={{ md: 'center', base: 'start' }} gap={{ base: '60px', md: '0' }}>
                <Image alt='left-arrow' src={left_arrow} w='40px' display={{ md: 'none', base: 'block' }} onClick={() => navigate(-1)} />
                <Text fontWeight={{ base: 'bold', md: 'medium' }} color={{ md: '#000', base: '#303030' }} fontSize={{ base: '20px', md: '15px' }} >Account Setup</Text>
            </Flex>

            <Stack my={'2rem'} w={{ md: '50%', base: '95%' }} mx={'auto'} gap='2rem'>
                <Button size={'lg'} onClick={() => navigate('/dashboard/setup/setuppin')} mt={{ base: '40px', md: '0px' }} display={{ md: 'block', base: 'flex' }} justifyContent={{ base: 'space-between', md: 'center' }}>
                    <Flex align={{ md: 'center', base: 'center' }} justify={{ md: 'center', base: 'start' }} gap={{ base: '20px', md: '0' }} >
                        <Image alt='ring' src={ring} w='30px' display={{ md: 'none', base: 'block' }} />
                        <Text>Transaction Pin</Text>
                    </Flex>
                    <Image alt='small_arrow' src={small_arrow} w='10px' display={{ md: 'none', base: 'block' }} />

                </Button>

                <Button size={'lg'} onClick={() => navigate("/dashboard/setup/addbank")} mt={{ base: '40px', md: '0px' }} display={{ md: 'block', base: 'flex' }} justifyContent={{ base: 'space-between', md: 'center' }}>
                    <Flex align={{ md: 'center', base: 'center' }} justify={{ md: 'center', base: 'start' }} gap={{ base: '20px', md: '0' }} >
                        <Image alt='ring' src={ring} w='30px' display={{ md: 'none', base: 'block' }} />
                        <Text> Add Bank Account</Text>
                    </Flex>
                    <Image alt='small_arrow' src={small_arrow} w='10px' display={{ md: 'none', base: 'block' }} />

                </Button>

                <Button size={'lg'} onClick={() => navigate("/dashboard/setup/addusdwallet")} mt={{ base: '40px', md: '0px' }} display={{ md: 'block', base: 'flex' }} justifyContent={{ base: 'space-between', md: 'center' }}>
                    <Flex align={{ md: 'center', base: 'center' }} justify={{ md: 'center', base: 'start' }} gap={{ base: '20px', md: '0' }} >
                        <Image alt='ring' src={ring} w='30px' display={{ md: 'none', base: 'block' }} />
                        <Text>Add USD Wallet</Text>
                    </Flex>
                    <Image alt='small_arrow' src={small_arrow} w='10px' display={{ md: 'none', base: 'block' }} />

                </Button>
            </Stack>

            <Box my={{ md: '4rem', base: '7rem' }} color='white' w={{ md: '50%', base: '95%' }} mx={'auto'}  >
                <Button w={'full'} colorScheme='blue' size={'lg'} bg={{ md: 'blue.500', base: '#0F37F6' }} borderRadius={{ base: '20px', md: 'auto' }}
                    onClick={() => navigate('/dashboard')}
                >
                    I’ll do this later
                </Button>
            </Box>
        </Box>
    )
}

export default AccountSetup
