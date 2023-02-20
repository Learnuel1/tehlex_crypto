import { Box, Button, FormControl, Heading, HStack, Input, PinInput, PinInputField, Stack, Text, VStack } from '@chakra-ui/react'
import waitlist from '../assets/images/waitlist.jpg'

const Waitlist = () => {
  return (
    <section>
        <Box maxW={'100vw'} minH='100vh' p='5rem'  bgRepeat='no-repeat'
        bgImg={waitlist} bgPos='center' bgClip={'border-box'}  bgSize={'cover'}>
          
          <VStack spacing={'2.5rem'} >
            <Heading size={['md','lg']} textAlign='center'>
                Experience freedom while trading <br/> like a King in...
            </Heading>

            <HStack spacing={'2rem'} p='1rem' >
               <Stack>
                <Text p='.5rem' border={'solid 1px blue'} rounded='base' >100</Text>
                <Text p='.3rem'>DAYS</Text>
               </Stack>

               <Stack>
                <Text p='.5rem' border={'solid 1px blue'} rounded='base' >50</Text>
                <Text p='.3rem'>HOURS</Text>
               </Stack>

               <Stack>
                <Text p='.5rem' border={'solid 1px blue'} rounded='base' >06</Text>
                <Text p='.3rem'>MINS</Text>
               </Stack>

               <Stack>
                <Text p='.5rem' border={'solid 1px blue'} rounded='base' >00</Text>
                <Text p='.3rem'>SECS</Text>
               </Stack>
            </HStack>

            <FormControl w={['fit-content', '50%']}>
                <Input type={'email'} placeholder='email' border={'1px'} />
            </FormControl>

            <Button w={['fit-content', '50%']} colorScheme={'blue'} p='.5rem'>
                 Subscribe to waiting list
            </Button>
          </VStack>


        </Box>
    </section>
  )
}

export default Waitlist
