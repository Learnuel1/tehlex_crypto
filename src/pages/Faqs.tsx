import { Heading, Text, VStack, Box, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Faqs = () => {
  return (
   <section>
        <Box maxW={'100vw'} h='100vh' p='2rem' >
            <VStack m={'2rem'}>
                <Text color={'blue'}>
                    FREQUENTLY ASKED QUESTIONS
                </Text>
                <Heading size={['sm', 'md']} textAlign='center'>
                Curious about what’ and How’ your user <br/> experience works
                </Heading>
            </VStack>
                {/* accordion */}
             <Accordion allowToggle w={['90%','90%','70%','70%']} mx='auto' mt='1rem'  gap={'2rem'}>
                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                        How long do payouts take?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} color='blue'>
                    <Text color={'black'}>
                    Once you’re set up, payouts arrive in your bank account on a 2-day rolling basis. Or you can opt to receive payouts weekly or monthly.
                    </Text>
                    <Link to={'/'} >Read more</Link>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                        How do refunds work?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} color='blue'>
                    <Text color={'black'}>
                    You can issue either partial or full refunds. There are no fees to refund a charge, but the fees from the original charge are not returned.
                    </Text>
                    <Link to='/'>Read more</Link>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                        How much do disputes cost?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} color='blue'>
                    <Text color={'black'}>
                    Disputed payments (also known as chargebacks) incur a $15.00 fee. If the customer’s bank resolves the dispute in your favor, the fee is fully refunded.
                    </Text>
                    <Link to='/'>Read more</Link>                   
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                        Is there a fee to use Apple Pay or Google Pay?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} color='blue'>
                    <Text color={'black'}>
                    There are no additional fees for using our mobile SDKs or to accept payments using consumer wallets like Apple Pay or Google Pay.
                    </Text>
                    <Link to='/'>Read more</Link>                    
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                        How much do disputes cost?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} color='blue'>
                    <Text color={'black'}>
                    Disputed payments (also known as chargebacks) incur a $15.00 fee. If the customer’s bank resolves the dispute in your favor, the fee is fully refunded.
                    </Text>
                    <Link to='/'>Read more</Link>                       
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                        Is there a fee to use Apple Pay or Google Pay?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} color='blue'>
                    <Text color={'black'}>
                    There are no additional fees for using our mobile SDKs or to accept payments using consumer wallets like Apple Pay or Google Pay.
                    </Text>
                    <Link to='/'>Read more</Link>                    
                    </AccordionPanel>
                </AccordionItem>

            </Accordion>
        </Box>
   </section>
  )
}

export default Faqs
