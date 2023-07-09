import { Box, Button, Flex, Heading, HStack, VStack, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import CarouselDashboard from './CarouselDashboard'
import notification from '../../assets/images/notification_bell.png';
import { IoMdNotifications } from 'react-icons/io';
const DashNav = () => {
    const navigate = useNavigate();
    return (
        <Box bg={'blue'} p='2rem' mb={'1rem'} borderBottomLeftRadius={{ base: '24px', md: 'base' }} borderBottomRightRadius={{ base: '24px', md: 'base' }} >
            <Flex justify={'space-between'} alignItems='center'>
                <Heading size={'sm'} color='white'>
                    Dgreat UC
                </Heading>

                <HStack gap={'1rem'}>
                    <Button onClick={() => navigate('/dashboard/tradepoint')}>0 points</Button>

                    <Button rounded={'full'} bg='white' p='.5rem'
                        onClick={() => navigate('/dashboard/notification')} display={{ base: 'flex' }} justifyContent={{ base: 'center' }} alignItems={{ base: 'center' }}
                    >

                        <IoMdNotifications color='blue' size={'1.7rem'} />
                    </Button>
                </HStack>
            </Flex>

            {/* dashboard carousel */}
            <Box my={'1rem'}>
                <CarouselDashboard />
            </Box>
            <VStack color={'white'} mt='2rem'>
                <Text bg={'orange'} py='.5rem' px='1rem' rounded='base' >
                    NAIRA
                </Text>
                <Text>Available Balance</Text>
                <Heading size={'lg'}>
                    N40000.00
                </Heading>
                <Box>
                    <Button color={'black'} mt='3rem'
                        onClick={() => navigate("/dashboard/withdrawal")
                        }
                    >
                        Withdraw
                    </Button>
                </Box>
            </VStack>
        </Box>
    )
}

export default DashNav
