import { Heading, Text, VStack, Box, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Faqs = () => {
  return (
   <section>
        <Box maxW={'100vw'} p='3rem' >
            <VStack m={'2rem'}>
                <Text color={'blue'} size={['sm', 'md', 'md']}>
                    FREQUENTLY ASKED QUESTIONS
                </Text>
                <Heading size={['sm', 'md']} textAlign='center'>
                Curious about what and How your user <br/> experience works
                </Heading>
            </VStack>

                {/* accordion */}
                <Accordion allowToggle >
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                How long do payouts take?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Once you’re set up, payouts arrive in your bank account on a 2-day rolling basis. Or you can opt to receive payouts weekly or monthly.
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
                        <AccordionPanel pb={4}>
                        You can issue either partial or full refunds. There are no fees to refund a charge, but the fees from the original charge are not returned.
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
                        <AccordionPanel pb={4}>
                        Disputed payments (also known as chargebacks) incur a $15.00 fee. If the customer’s bank resolves the dispute in your favor, the fee is fully refunded.
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
                        <AccordionPanel pb={4}>
                        There are no additional fees for using our mobile SDKs or to accept payments using consumer wallets like Apple Pay or Google Pay.
                        </AccordionPanel>
                    </AccordionItem>

                    
                    {/* <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            Section 2 title
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem> */}

                </Accordion>
        </Box>
   </section>
  )
}

export default Faqs
