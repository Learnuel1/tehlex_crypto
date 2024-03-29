import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const MobileNav = () => {
  return (
    <nav>
        <Menu isLazy>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<AiOutlineMenu />}
                variant='outline'
            />
            <MenuList w={'50vw'} h='30vh' gap={'2rem'}>
                <MenuItem >
                    <NavLink to={'/about'} style={({isActive}) => isActive? {color:'blue'}: {color:'black'}} >
                        About Us
                    </NavLink>
                </MenuItem>

                <MenuItem >
                    <NavLink to={'/support'} style={({isActive}) => isActive? {color:'blue'}: {color:'black'}}>
                        Support
                    </NavLink>
                </MenuItem>

                <MenuItem >
                    <NavLink to={'/faqs'} style={({isActive}) => isActive? {color:'blue'}: {color:'black'}}>
                        FAQs
                    </NavLink>
                </MenuItem>
                
            </MenuList>
        </Menu>
    </nav>
  )
}

export default MobileNav
