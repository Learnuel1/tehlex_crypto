import { Box, Button, Heading,  Stack,  VStack } from '@chakra-ui/react'
import React from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom'

const NairaPaymentMethod = () => {
    const navigate = useNavigate();

  return (
   <Box maxW={'100vw'} minH={'40vh'} p='3rem'>

    <IoIosArrowRoundBack size={'2.5rem'} color='blue' 
                onClick={() =>navigate(-1) }
    />  
        <VStack gap={'2rem'}>
            <Heading size={'md'}>
                Select preferred mode of withdrawal
            </Heading>

           <Stack gap={'4rem'}>
                <Button colorScheme={'blue'}
                onClick={() => navigate("/dashboard/nairaconfrimPayment")}
                >
                    Pay to Saved Bank Account
                </Button>

                <Button
                    onClick={() => navigate("/dashboard/setup/addbank")}
                >
                    Add New Bank Account
                </Button>
           </Stack>
        </VStack>
   </Box>
  )
}

export default NairaPaymentMethod
