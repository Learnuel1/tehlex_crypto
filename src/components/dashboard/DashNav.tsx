import { Box, Button, Flex, Heading, HStack, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import CarouselDashboard from './CarouselDashboard'
import {AiFillBell} from 'react-icons/ai'

const DashNav = () => {
    const navigate = useNavigate();
  return (
    <Box  bg={'blue'} p='2rem' mb={'1rem'} rounded='base'>
                <Flex  justify={'space-between'} alignItems='center'>
                    <Heading size={'sm'} color='white'>
                        Dgreat UC
                    </Heading>

                    <HStack gap={'1rem'}>
                        <Button onClick={() => navigate('/dashboard/tradepoint')}>0 POINT</Button>

                        <Button rounded={'full'} bg='white' p='.5rem'
                         onClick={() => navigate('/dashboard/notification')}
                        > 
                            <AiFillBell size={'1.3rem'} color='blue' />
                        </Button>
                    </HStack>
                </Flex>
                
                {/* dashboard carousel */}
                <Box my={'1rem'}>
                    <CarouselDashboard />
                </Box>
                <VStack color={'white'} mt='2rem'>
                    <Text bg={'orange'} py='.5rem' px='1rem'  rounded='base' >
                        NAIRA
                    </Text>
                    <Text>Available Balance</Text>
                    <Heading size={'lg'}>
                        N40000.00
                    </Heading>
                   <Box>
                        <Button  color={'black'} mt='3rem' 
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
