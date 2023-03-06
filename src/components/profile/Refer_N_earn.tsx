import { Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import emoji from '../../assets/images/emoji.png'


const Refer_N_earn = () => {
    const [refCode, setRefCode] = useState('')
    const navigate = useNavigate();
  return (
    <Box maxW={'100vw'} minH='50vw' p='2rem'>
         <Stack my={'2rem'} gap='2rem'>
            <Heading textAlign={'center'} size='md'>Refer And Earn</Heading>

            <IoIosArrowRoundBack size={'2.5rem'} color='blue' 
                onClick={() =>navigate(-1) }
            />    
       </Stack>

       <VStack gap={'2rem'}>
            <Text p='.5rem' bg={'gray.100'}>O POINTS</Text>

            <Image alt='img' src={emoji} w='150px' />

            <Heading size={'md'}>Invite your friends and Earn points</Heading>

            <Text>
                The average value of a trade is converted to <br/> a
                point based bonus system. Trade $100 and above
            </Text>

            <FormControl w={['90%', '90%', '70%', '50%']}>
                <FormLabel>Referral code</FormLabel>
                <Input size={'lg'} type={'number'} placeholder='6474873'
                name='ref_code'
                value={refCode}
                onChange={(e) => setRefCode(e.target.value)}
                />
            </FormControl>        
       </VStack>

       <Flex justify={'center'} my='6rem'>
            <Button w='50%' size={'lg'} colorScheme={'blue'}>
                Share Invite
            </Button>
       </Flex >
    </Box>
  )
}

export default Refer_N_earn
