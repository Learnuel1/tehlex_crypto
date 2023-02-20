import { Box, Button, FormControl, FormLabel, Grid, GridItem, Heading, HStack,  Input,  Stack, Text } from '@chakra-ui/react';

const NewPassword = () => {
  return (
    <section>
    <Box maxW={'100vw'} p='5rem' >
        <Text my='1rem'>Create account</Text>            

        <Grid templateColumns='repeat(2, 1fr)' gap={'2rem'} >
            <GridItem colSpan={[2,2,1,1]}>
                <Stack spacing={'2rem'}>
                <Heading size={['lg']}>
                    Enter Password
                </Heading>

                <Text>
                    Generate a strong password for your account
                </Text>
                </Stack>
            </GridItem>
            
            <GridItem colSpan={[2,2,1,1]}>
                <Stack spacing={'2rem'}>
                    
                    <form>
                        <Stack spacing={'1rem'}>
                            <FormControl>
                                <FormLabel>New Password</FormLabel>
                                <Input type={'passowrd'} placeholder='New Password' />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Confirm New Password</FormLabel>
                                <Input type={'password'} placeholder='Confirm New Password' />
                            </FormControl>
                        </Stack>
                    </form>

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

export default NewPassword
