import { Box, Button,  Heading, HStack, PinInput, PinInputField, Stack,  VStack} from '@chakra-ui/react'
import { useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const WithdrawTransactionPin = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState();

     // const handle verify otp
     const handleVerifyOtp = (e:React.FormEvent) => {
        e.preventDefault();
        alert('Withdrawal is being processed')
       
     };

  return (
    <Box maxW={'100vw'} p='2rem' minH={'40vw'}>
       
       <Stack mb={'5rem'}>
            <IoIosArrowRoundBack size={'2.5rem'} color='blue' 
                    onClick={() =>navigate(-1) }
                />    

        <Heading textAlign={'center'} size={'md'}>Transaction Pin</Heading>
       </Stack>

        <VStack gap={'2rem'}>
            <Heading size={'sm'}>Enter your 4 digit transaction pin</Heading>

            <form onSubmit={handleVerifyOtp}>
                    <Stack spacing={'4rem'}>
                        <HStack spacing={'1rem'}>
                            <PinInput otp type='number' size={'lg'}
                                onChange={(e:any) => setOtp(e)} 
                                value={otp}                      
                            >
                                <PinInputField value={otp} required />
                                <PinInputField value={otp} required />
                                <PinInputField value={otp} required />
                                <PinInputField value={otp} required />
                            </PinInput>                           
                        </HStack>

                    <Button w='full' colorScheme={'blue'}
                        type={'submit'}
                    >
                        Confirm
                    </Button>
                    </Stack>
                </form>
        </VStack>
    </Box>
  )
}

export default WithdrawTransactionPin
