import { Box, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import naira from '../../assets/images/naira.jpg';
import usdt from '../../assets/images/usdt.jpg';
import left_arrow from '../../assets/images/arrowleft.png'
const Withdrawal = () => {
    const navigate = useNavigate();
    return (
        <Box maxW={'100vw'} p='2rem' minH={'40vw'}>
            <HStack px={'2rem'} mb={'3rem'} justify={{ md: 'space-evenly', base: 'start' }} gap={{ base: '20px' }}>
                <Image alt='left-arrow' src={left_arrow} w='30px' display={{ md: 'none', base: 'block' }} onClick={() => navigate(-1)} />
                <Text display={{ md: 'block', base: 'none' }}>
                    <IoIosArrowRoundBack size={'2.5rem'} color='blue'
                        onClick={() => navigate(-1)}
                    />
                </Text>

                <Heading>Withdrawal</Heading>
            </HStack>

            <VStack gap={'3rem'}>
                <Text fontWeight={'semibold'}>
                    Which of your assets do you want to withdraw
                </Text>

                <Flex justifyContent={{ base: 'start' }} w={{ base: 'full', md: 'auto' }} display={{ base: 'flex', md: 'block' }}>
                    <Link to="/dashboard/nairawithdrawfunds" >
                        <HStack spacing={'.6rem'} >
                            <Image alt='naira_withdraw' src={naira} w='60px' />
                            <Text>Nigerian Naira</Text>
                        </HStack>
                    </Link>
                </Flex>

                <Flex justifyContent={{ base: 'start' }} w={{ base: 'full', md: 'auto' }} display={{ base: 'flex', md: 'block' }}>
                    <Link to="/dashboard/withdrawfunds">
                        <HStack spacing={'3rem'} >
                            <Image alt='usdt_withdraw' src={usdt} w='60px' />
                            <Text>USDT</Text>
                        </HStack>
                    </Link>
                </Flex>
            </VStack>
        </Box>
    )
}

export default Withdrawal
