import { Box, Button, Heading, Input, Stack } from '@chakra-ui/react'

const NewsLetter = () => {
  return (
    <Box p='.5rem'>
        <Heading color={'white'} size={'md'} m='.7rem'>
            Subscribe Newsletter
        </Heading>
        <form>
           <Stack>
            <Input type={'email'} placeholder='Enter  email' />
                <Button colorScheme={'blue'} w='fit-content'>
                    Subscribe
                </Button >
           </Stack>
        </form>
    </Box>
  )
}

export default NewsLetter
