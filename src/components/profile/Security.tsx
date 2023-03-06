import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const Security = () => {
    const [oldPassord, setOldPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');


    const navigate = useNavigate();

    // onsubmit
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
    }
  return (
    <Box maxW={'100vw'} minH='40vh' p='2rem'>
        <Stack my={'2rem'} gap='2rem'>
            <Heading textAlign={'center'} size='md'>Security</Heading>

            <IoIosArrowRoundBack size={'2.5rem'} color='blue' 
                onClick={() =>navigate(-1) }
            />    
       </Stack>
       
       <form onSubmit={handleSubmit}>
            <VStack gap={'2rem'}>    
                <Text fontWeight={'semibold'} >Change Password</Text>            
                <FormControl isRequired w={['90%','90%','50%']}>
                    <FormLabel>Old password</FormLabel>
                    <Input type={'password'} placeholder='Old' size={'lg'}
                    name='old'
                    value={oldPassord}
                    onChange={(e) => setOldPassword(e.target.value)}
                    />
                </FormControl>

                <FormControl isRequired w={['90%','90%','50%']}>
                    <FormLabel>New password</FormLabel>
                    <Input type={'password'} placeholder='new' size={'lg'}
                    name='new'
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    />
                </FormControl>

                <FormControl isRequired w={['90%','90%','50%']}>
                    <FormLabel>Confirm password</FormLabel>
                    <Input type={'password'} placeholder='confirm' size={'lg'}
                    name='confirm'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </FormControl>
            </VStack>

            <Flex justify={'center'}  my={'8rem'}>
                <Button w='50%' colorScheme={'blue'} type='submit'>
                    Update
                </Button>
            </Flex >
       </form>
    </Box>
  )
}

export default Security
