import { Box, Button, Grid, GridItem, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import earn from '../../assets/images/earnpoint.png'

const EarnPoint = () => {
  return (
    <Box w={'75vw'} mx='auto' p='1rem' bg={'blue'} my='3rem' rounded={'2xl'}>
        <Grid templateColumns='repeat(2, 1fr)' gap={'1rem'}>
            <GridItem colSpan={[2,2,1,1]} mt='2rem'>
                <Stack color={'white'} gap='1rem'>
                    <Heading size={'lg'}>Get free 100 points on Sign up</Heading>
                    <Text>Trade up to $100 and above to earn more points</Text>
                    <Button w='fit-content' color={'black'}>
                        Learn More
                    </Button>
                </Stack>
            </GridItem>

            <GridItem colSpan={[2,2,1,1]}>
                <VStack>
                    <Image alt='earn_point' src={earn} w='250px' loading='lazy' />
                </VStack>
            </GridItem>
        </Grid>
    </Box>
  )
}

export default EarnPoint
