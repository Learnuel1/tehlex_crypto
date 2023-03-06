import { Box, Button, FormControl, Heading,  Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router';
const ResetViaPhone = () => {
    const [phone, setphone] = useState<string>('+234');
    const navigate = useNavigate();

    // handle continue
    const handleContinue = (e:React.FormEvent) => {
        e.preventDefault();
        navigate('/resetemailpin', {state: phone})
    }
  return (
    <Stack p='2rem' maxW={'100vw'} h='100vh' >
        <Stack  my='2rem' gap={'1rem'}>
            <IoIosArrowRoundBack size={'2.5rem'} color='blue' 
                onClick={() =>navigate(-1) }
            />
            <Heading textAlign={'center'}>Forget Password</Heading>
        </Stack>

        <VStack gap={'4rem'} >

            <form onSubmit={handleContinue} >
            <Heading size={'md'}>
                Enter Phone Number:
            </Heading>
           

            <FormControl isRequired>
                <Text color={'red'} p='.5rem'>
                   valid phone number you used to register
                </Text>
                <Input type={'tel'} placeholder='valid phone number' name='phone'
                    value={phone}
                    onChange={e => setphone(e.target.value)}
                />
            </FormControl>

            <Box mt='4rem'>
                <Button colorScheme={'blue'} type='submit' >
                    Continue
                </Button>
            </Box>
        </form>
        
    </VStack>
    </Stack>
  )
}

export default ResetViaPhone
