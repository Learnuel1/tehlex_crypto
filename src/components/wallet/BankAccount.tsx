import { Box, HStack, Stack, Text, Image, Button, VStack, Heading } from '@chakra-ui/react'
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import pay from '../../assets/images/pay.png';


const BankAccount = () => {
    const navigate = useNavigate();

  return (
   <Box maxW={'100vw'} minH='40vh' p='2rem'>
        
        <Stack mb='2rem'>
            <Text >
                <IoIosArrowRoundBack size={'2rem'} color='blue' 
                onClick={() =>navigate(-1) }
                /> 
            </Text>
            <Heading size={'md'}>Bank Account</Heading>
        </Stack>

        <HStack justify={'space-between'} mb='1rem'>
            <Box>
                <Text color={'gray.400'}>Default</Text>
                <Image alt='bank_logo' src={pay} w='50px' />
            </Box>

            <Box>
                <Text>Uche ThankGod</Text>
                <Text>322222222</Text>
            </Box>

            <Text>Edit</Text>
            <Text color={'red'}>Delete</Text>
        </HStack>

        <VStack mt={'3rem'}>
            <Button colorScheme={'blue'}
            onClick={() => navigate("/dashboard/setup/addbank")}
            >
                 Add Account
            </Button>
        </VStack>
   </Box>
  )
}

export default BankAccount
