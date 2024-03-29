import { Box, Button, FormControl, FormLabel, Grid, GridItem, Heading,   Input,  InputGroup,  InputRightElement,  Stack, Text, useToast } from '@chakra-ui/react';

import React, { useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { thelex } from '../endpoint/thelex';
import { PASSWORD_RECOVERY } from '../endpoint/route';
import { LOCALSTORAGE } from '../endpoint/localstorage';

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [show, setShow] = useState(false)
  const [submitting, setSubmitting] = useState(false);
    
    
    const navigate = useNavigate();
    
    const handleClick = () => setShow(!show);
    const toast = useToast();

    const id = LOCALSTORAGE.id()?.toString();
  
    const handlePasswordReset = (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitting(true)

      if(newPassword !== confirmPassword){
        toast({
          title: 'Check Password',
          description: "Password Does Not Match",
          status: 'error',
          duration: 4000,
          isClosable: true,
        })
        setSubmitting(false)
      }else {
        thelex.patch(PASSWORD_RECOVERY.RESET_PASSWORD, {id, newPassword})
      
          .then(res => {                       
            localStorage.clear()
            toast({
                title: res.statusText,
                description: res.data.msg,
                status: 'success',
                duration: 4000,
                isClosable: true,
              })
              setSubmitting(false); 
              navigate("/login")  
        })
        .catch(function (error) {          
            toast({
                title:error.response.statusText,
                description: error.response.data.error,
                status: 'error',
                duration: 4000,
                isClosable: true,
              })
              setSubmitting(false);
          })  
      }
      
    }


  return (
    <section>
    <Box maxW={'100vw'} p='5rem' >

        <Stack>
          <IoIosArrowRoundBack size={'1.5rem'} color='blue' 
                      onClick={() =>navigate(-1) }
          /> 
          <Text my='1rem'>Create account</Text>    
        </Stack>          
         
        <Grid templateColumns='repeat(2, 1fr)' gap={'2rem'} >
            <GridItem colSpan={[2,2,1,1]}>
                <Stack spacing={'2rem'}>
                <Heading size={['lg']}>
                    Enter Password
                </Heading>

                <Text color={'red'}>
                    Generate a strong password for your account
                </Text>
                </Stack>
            </GridItem>
            
            <GridItem colSpan={[2,2,1,1]}>
                <Stack spacing={'2rem'}>
                    
                    <form onSubmit={handlePasswordReset} >
                        <Stack spacing={'1rem'}>
                            <FormControl isRequired isDisabled={submitting}>
                                <FormLabel>New Password</FormLabel>
                                <Input type={show ? 'text' : 'password'}
                                  value={newPassword}
                                  placeholder='New Password' 
                                  onChange={e => setNewPassword(e.target.value)}
                                  />
                            </FormControl>

                            <FormControl isRequired isDisabled={submitting}>
                                <FormLabel>Confirm New Password</FormLabel>
                                <InputGroup size='md' >
                                    <Input
                                        pr='4.5rem'
                                        type={show ? 'text' : 'password'}
                                        placeholder='Enter password'
                                        name='password'
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    <InputRightElement>
                                        <Text cursor={'pointer'} onClick={handleClick} >
                                            {show ? <AiOutlineEye size={'1.2rem'} /> : <AiOutlineEyeInvisible size={'1.2rem'} />}
                                        </Text>                                   
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                        </Stack>
                        
                        <Box my={'2rem'}>
                            <Button w='fit-content' 
                              colorScheme={'blue'} type='submit'
                              isDisabled={submitting}
                              >
                                Reset Password
                            </Button>
                        </Box>
                    </form>                
                </Stack>
            </GridItem>

        </Grid>
    </Box>
</section>
  )
}

export default NewPassword
