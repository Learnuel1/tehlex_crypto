import { Box, Button, Grid, GridItem, Heading, HStack, PinInput, PinInputField, Stack, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { REGISTRATION_ENDPOINT } from '../endpoint/route';
import { thelex } from '../endpoint/thelex';



const VerifyEmail = () => {
    const location = useLocation();
    const [otp, setOtp] = useState();
    // console.log(otp);
    const toast = useToast();
    const navigate = useNavigate();

    // handle confirm otp
    const handleConfirm = (e:React.FormEvent) => {
        e.preventDefault();
        thelex
        .post( REGISTRATION_ENDPOINT.VERIFY_OTP , {'otp': otp})
        .then((res) => {
            toast({
                title: res.statusText,
                description: "Registration Completed Successfully",
                status: 'success',
                duration: 4000,
                isClosable: true,
              });
            navigate('/feedback');
          })
          .catch((error) => {
            toast({
                title: 'wrong otp',
                description: "Registration Not Completed Successfully",
                status: 'error',
                duration: 4000,
                isClosable: true,
              })
          });
    };

  return (
    <section>
    <Box maxW={'100vw'} p='5rem' >
        <Text my='1rem'>Create account</Text>            

        <Grid templateColumns='repeat(2, 1fr)' gap={'2rem'} >
            <GridItem colSpan={[2,2,1,1]}>
                <Stack spacing={'2rem'}>
                <Heading size={['lg']}>
                 Verify Email Address
                </Heading>

                <Text>
                    Enter 4 digit code sent to <span style={{color:'blue'}}>{location.state}</span>
                </Text>
                </Stack>
            </GridItem>
            
            <GridItem colSpan={[2,2,1,1]}>
               <form onSubmit={handleConfirm}>
                <Stack spacing={'4rem'}>
                        <HStack spacing={'1rem'}> 
                            <PinInput  otp type='number' 
                            onChange={(e:any) => setOtp(e) }
                            >
                                <PinInputField required />
                                <PinInputField required />
                                <PinInputField required />
                                <PinInputField required />
                            </PinInput>
                        </HStack>

                    <Button w='fit-content' colorScheme={'blue'} type='submit'>
                        Confirm
                    </Button>
                    </Stack>
               </form>
            </GridItem>

        </Grid>
    </Box>
</section>
  )
}

export default VerifyEmail
