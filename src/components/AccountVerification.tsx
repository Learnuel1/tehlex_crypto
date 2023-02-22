import { Box, Button, Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { verifyViaEmailAuth, verifyViaPhoneAuth } from './Api';

export default function AccountVerification() {
    const location = useLocation();
    const navigate = useNavigate();

    const mail = location.state.email;
    const phone = location.state.phone;

    // handle verify
    const handleVerify = (type:string) => {
        if(type ==='email'){           
            // post to email endpoint
            axios
            .post(verifyViaEmailAuth, {email: mail})
            .then(response => {
            alert(response.data)
            navigate('/verifyEmail', {state: mail})
            })
            .catch(function (error) {
                alert(error)
            });
        } else if(type === 'phone'){
            // post to phone number
            axios
            .post(verifyViaPhoneAuth, {phone: phone} )
            .then(response => {
            alert(response.data)
            navigate('/verifyPhone', {state: phone})
            })
            .catch(function (error) {
                alert(error)
            });
        }
        // testing
        navigate('/verifyEmail', {state: mail})
    };
    
    // protecting route
    useEffect(() => {
        if(!location.state){
            navigate('/register')
        }
    },[]);

    
    console.log(location.state)
  return (
    <section>
        <Box maxW={'100vw'} p='5rem' >
            <Text my='1rem'>Create account</Text>            

            <Grid templateColumns='repeat(2, 1fr)' gap={'2rem'} >
                <GridItem colSpan={[2,2,1,1]}>
                    <Stack spacing={'2rem'}>
                    <Heading size={['lg']}>
                        Account Verification
                    </Heading>

                    <Text>
                        Choose how you would like to verify <br/> your account
                    </Text>
                    </Stack>
                </GridItem>
                
                <GridItem colSpan={[2,2,1,1]}>
                    <Stack spacing={'2rem'} >
                        <Button
                       onClick={() => handleVerify('email')}
                        >
                            Via Email Address
                        </Button>

                        <Button disabled
                        // onClick={() => handleVerify('phone')}
                        >
                            Via Phone Number
                        </Button>
                    </Stack>
                </GridItem>

            </Grid>
        </Box>
    </section>
  )
}
