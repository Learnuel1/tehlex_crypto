import { Box, Button, Grid, GridItem, Heading, HStack, PinInput, PinInputField, Stack, Text } from '@chakra-ui/react';

const VerifyEmail = () => {
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
                    Enter 4 digit code sent to <span style={{color:'blue'}}>tgggreatuche@gmail.com</span>
                </Text>
                </Stack>
            </GridItem>
            
            <GridItem colSpan={[2,2,1,1]}>
                <Stack spacing={'4rem'}>
                    <HStack spacing={'1rem'}>
                        <PinInput >
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                        </PinInput>
                    </HStack>

                <Button w='fit-content' colorScheme={'blue'}>
                    Confirm
                </Button>
                </Stack>
            </GridItem>

        </Grid>
    </Box>
</section>
  )
}

export default VerifyEmail
