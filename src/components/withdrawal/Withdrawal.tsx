import { Box, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import naira from '../../assets/images/naira.jpg';
import usdt from '../../assets/images/usdt.jpg';

const Withdrawal = () => {
    const navigate = useNavigate();
  return (
    <Box maxW={'100vw'} p='2rem' minH={'40vw'}>
        <HStack px={'2rem'} justify='space-evenly' mb={'3rem'}>
        <IoIosArrowRoundBack size={'2.5rem'} color='blue' 
            onClick={() =>navigate(-1) }
        />            
        <Heading>Withdrawal</Heading>
        </HStack>

        <VStack gap={'3rem'}>
            <Text fontWeight={'semibold'}>
                Which of your assets do you want to withdraw
            </Text>

            <Link to="/dashboard/nairawithdrawfunds">
                <HStack spacing={'.6rem'}>
                    <Image  alt='naira_withdraw' src={naira} w='60px' />
                    <Text>Nigerian Naira</Text>
                </HStack>
            </Link>

            <Link to="/dashboard/withdrawfunds">
                <HStack spacing={'3rem'} >
                    <Image  alt='usdt_withdraw' src={usdt} w='60px' />
                    <Text>USDT</Text>
                </HStack>
            </Link>
        </VStack>
    </Box>
  )
}

export default Withdrawal
