import { Box, Button, Grid, GridItem, Heading, HStack,  PinInput, PinInputField, Stack, Text, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useLocation, useNavigate } from 'react-router-dom';
import { PASSWORD_RECOVERY } from '../endpoint/route';
import { thelex } from '../endpoint/thelex';


const ResetEmailPin = () => {
    const [otp, setOtp] = useState()
    const navigate = useNavigate();
    const location = useLocation();
    const toast = useToast();

    // const handle verify otp
    const handleVerifyOtp = (e:React.FormEvent) => {
        e.preventDefault();
         thelex.get(PASSWORD_RECOVERY.VERIFY_PASSWORD_RESET )
        .then(res => {
            toast({
                title: 'Success',
                description: "Otp verification successfull",
                status: 'success',
                duration: 4000,
                isClosable: true,
              })
              navigate("/newpassword")  
        })
        .catch(function (error) {
            toast({
                title:'Error!!!, Check again',
                description: "invalid Otp",
                status: 'error',
                duration: 4000,
                isClosable: true,
              })
            //   navigate("/newpassword") 
          });
    };



    //protecting route
    useEffect(() => {
        if(!location.state){
            navigate(-1)
        }
    },[]);

  return (
    <section>
    <Box maxW={'100vw'} p='5rem' >

        <Text my='1rem'>
        <IoIosArrowRoundBack size={'2.5rem'} color='blue' 
                onClick={() =>navigate(-1) }
            />
        </Text>            

        <Grid templateColumns='repeat(2, 1fr)' gap={'2rem'} >
            <GridItem colSpan={[2,2,1,1]}>
                <Stack spacing={'2rem'}>
                <Heading size={['lg']}>
                    Reset your Password
                </Heading>

                <Text>
                    Enter 4 digit code sent to <span style={{color:'blue'}}>{location.state}</span>
                </Text>
                </Stack>
            </GridItem>
            
            <GridItem colSpan={[2,2,1,1]}>
                <form onSubmit={handleVerifyOtp}>
                    <Stack spacing={'4rem'}>
                        <HStack spacing={'1rem'}>
                            <PinInput otp type='number'
                                onChange={(e:any) => setOtp(e)} 
                                value={otp}                      
                            >
                                <PinInputField value={otp} required />
                                <PinInputField value={otp} required />
                                <PinInputField value={otp} required />
                                <PinInputField value={otp} required />
                            </PinInput>                           
                        </HStack>

                    <Button w='fit-content' colorScheme={'blue'}
                        type={'submit'}
                    >
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

export default ResetEmailPin;
