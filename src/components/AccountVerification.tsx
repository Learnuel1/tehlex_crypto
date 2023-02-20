import { Box, Button, Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react';


export default function AccountVerification() {
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
                        <Button>
                            Via Email Address
                        </Button>

                        <Button>
                            Via Phone Number
                        </Button>
                    </Stack>
                </GridItem>

            </Grid>
        </Box>
    </section>
  )
}
