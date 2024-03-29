import { Button, Flex, HStack, Image } from '@chakra-ui/react'
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import MobileNav from './MobileNav';

const Navigation = () => {
    const navigate = useNavigate()
    return (
        <HStack justify={'space-between'} maxW='100vw' position='sticky' p='1rem' bg='white' top={0} zIndex={9999}
            px='1rem' boxShadow={'base'} >
            <Flex w='100%' alignItems={'center'} justify='left' >
                <NavLink to={'/'} style={({ isActive }) => isActive ? { color: 'blue' } : { color: 'black' }} >
                    <Image alt='logo' src={logo} w={'150px'} />
                </NavLink>
            </Flex>

            <Flex w={'100%'} gap='2rem' alignItems={'center'} justify='center'
                display={['none', 'none', 'flex', 'flex']}
            >
                <NavLink to={'/about'} style={({ isActive }) => isActive ? { color: 'blue' } : { color: 'black' }} >
                    About Us
                </NavLink>

                <NavLink to={'/support'} style={({ isActive }) => isActive ? { color: 'blue' } : { color: 'black' }}>
                    Support
                </NavLink>

                <NavLink to={'/faqs'} style={({ isActive }) => isActive ? { color: 'blue' } : { color: 'black' }}>
                    FAQs
                </NavLink>
            </Flex>

            <Flex w={'100%'} gap='2rem' alignItems={'center'}
                justify='right'>
                <Button color={'blue'} colorScheme='none'
                    border={'1px'} rounded='2xl' size={['sm', 'sm', 'md', 'md']}
                    onClick={() => navigate('/waitlist')}
                >
                    launch
                </Button>

                <Flex display={['flex', 'flex', 'none', 'none']}>
                    <MobileNav />
                </Flex>

            </Flex>
        </HStack>
    )
}

export default Navigation
