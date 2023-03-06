import { Box, Button, Grid, GridItem, Heading, HStack, PinInput, PinInputField, Stack, Text, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { thelex } from '../endpoint/thelex';
import { USER_REGISTRATION_ENDPOINT } from '../endpoint/route';

const VerifyPhone = () => {
    const location = useLocation();
    const [otp, setOtp] = useState();
    const toast = useToast();
    const navigate = useNavigate();

 

    // handle confirm otp
    const handleConfirm = (e:React.FormEvent) => {
        e.preventDefault();
        thelex
        .post( USER_REGISTRATION_ENDPOINT.VERIFY_OTP , {'otp': otp})
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
                description: "Confirm Otp",
                status: 'error',
                duration: 4000,
                isClosable: true,
              })
          });
    };
        // handle resendOtp
    const OtpResend = () => {
        thelex
        .post( USER_REGISTRATION_ENDPOINT.VERIFY_OTP , {'otp': otp})
    };

    // protecting route
    useEffect(() => {
        if(!location.state){
            navigate('/register')
        }
    },[]);

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
                            <PinInput otp type='number' 
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

export default VerifyPhone
