import { Box, Button, Flex, FormControl, FormLabel, Heading, HStack, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

const WithdrawFunds = () => {
    const [withdraw, setWithdraw] = useState('0.00')
    const navigate = useNavigate();

    // handle withdraw
    const handlwWithdraw = (e:React.FormEvent) => {
        e.preventDefault()
        navigate("/dashboard/confirmpayment")
    }
  return (
    <Box maxW={'100vw'} minH='30vw' p='2rem'>
        <Stack px={'2rem'} justify='space-evenly' mb={'4rem'}>
        <IoIosArrowRoundBack size={'2.5rem'} color='blue' 
            onClick={() =>navigate(-1) }
        />            
        <Heading size={'md'} textAlign={'center'}>Withdraw Funds In USDT</Heading>
        </Stack>

       <VStack gap={'2rem'}>
        <Heading>$ {withdraw}</Heading>
        
            <HStack  fontWeight={'bold'} p='1rem' bg={'gray.100'}>
                <Text color={'blue'}>Available Balance:</Text>
                <Text>$12000.00</Text>
            </HStack>

            <form onSubmit={handlwWithdraw}>
               <Stack gap={'1rem'}>
                    <FormControl  isRequired> 
                        <FormLabel>Amount</FormLabel>
                                <Input type={'number'} placeholder='$0.00' size={'lg'}
                                    name='withdrawal'
                                    value={withdraw}
                                    onChange={(e) => setWithdraw(e.target.value)}
                                />
                        </FormControl>

                    <Button colorScheme={'blue'} type='submit'
                    >
                        Withdraw
                    </Button>
               </Stack>
            </form>
       </VStack>
    </Box>
  )
}

export default WithdrawFunds
