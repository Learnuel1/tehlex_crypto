import { Box, Flex, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import testimonial from '../../assets/images/testimonial.png';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 6 },
  };


  const items = [
    <div className="item" data-value="1">
        <Stack  p='1rem' boxShadow={'base'}>
                <HStack>
                <Image alt='testimonial' src={testimonial} w='40px' rounded={'full'} loading='lazy' />
                <Stack>
                    <Text fontWeight={'bold'}>John Doe</Text>
                    <Text>Ceo Million design</Text>
                </Stack>
                </HStack>
                <Text>
                know it is a state of mind in which there is absolutely no fear and you act and react instinctively. You 
                don't weigh alternatives or consider consequences or second-guess yourself. 
                </Text>
            </Stack>
    </div>,
    <div className="item" data-value="2">
        <Stack  p='1rem' boxShadow={'base'}>
                <HStack>
                <Image alt='testimonial' src={testimonial} w='40px' rounded={'full'} />
                <Stack>
                    <Text fontWeight={'bold'}>John Doe</Text>
                    <Text>Ceo Million design</Text>
                </Stack>
                </HStack>
                <Text>
                know it is a state of mind in which there is absolutely no fear and you act and react instinctively. You 
                don't weigh alternatives or consider consequences or second-guess yourself. 
                </Text>
        </Stack>
    </div>,
    <div className="item" data-value="3">
        <Stack p='1rem' boxShadow={'base'}>
                <HStack>
                <Image alt='testimonial' src={testimonial} w='40px' rounded={'full'} />
                <Stack>
                    <Text fontWeight={'bold'}>John Doe</Text>
                    <Text>Ceo Million design</Text>
                </Stack>
                </HStack>
                <Text>
                know it is a state of mind in which there is absolutely no fear and you act and react instinctively. You 
                don't weigh alternatives or consider consequences or second-guess yourself. 
                </Text>
            </Stack>
    </div>,
    <div className="item" data-value="4">
        <Stack p='1rem' boxShadow={'base'}>
                <HStack>
                <Image alt='testimonial' src={testimonial} w='40px' rounded={'full'} />
                <Stack>
                    <Text fontWeight={'bold'}>John Doe</Text>
                    <Text>Ceo Million design</Text>
                </Stack>
                </HStack>
                <Text>
                know it is a state of mind in which there is absolutely no fear and you act and react instinctively. You 
                don't weigh alternatives or consider consequences or second-guess yourself. 
                </Text>
            </Stack>
    </div>,
];

const Testimonial = () => {
  return (
   <Box maxW='100vw' p='2rem' m='1rem' bg={'gray.50'}>
        <VStack>
            <Heading color={'black'}>TESTIMONIALS</Heading>
            <Heading size={['sm','lg']} style={{ fontSize: '24px' }}>
                Hear the awesome things people  said about Us            
            </Heading>
        </VStack>
        <Flex w='80vw' mt={'3rem'} p='1rem' justify={'space-evenly'} wrap='wrap' gap={'1rem'}>
        </Flex>
        
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          autoPlay 
          autoPlayInterval={1000}
          animationDuration={1000}
          animationType="fadeout"
          infinite
          disableButtonsControls
        />
   </Box>
  )
}

export default Testimonial
