import React from 'react';
import {
    Flex,
    Box,
    Text,
    Image,
    HStack,
    Icon,
    CloseButton,
    VStack,
    Divider
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { useHistory } from "react-router-dom";

import Logo from '../../assets/images/logo.png';

const MotionBox = motion(Box);

const menuVariants = {
    opened: {
        right: 0,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.25,
            duration: 0.25
        }
    },
    closed: {
        right: "-100vw",
        transition: {
            duration: 0.25,
            when: 'afterChildren',
            staggerChildren: 0.25,
        }
    }
}


const LinkButton = ({ children, onClick, isActive = false }) => (
    <Box
        as="button"
        color={isActive ? "gray.900" : "gray.600"}
        fontWeight="bold"
        _hover={{
            color: "gray.800"
        }}
        fontSize="md"
        textTransform="uppercase"
        onClick={onClick}
    >
        {children}
    </Box>
)


export default function Navbar() {
    const [showMenu, setShowMenu] = React.useState(false);

    const history = useHistory();

    const onClick = (route) => {
        setShowMenu(false)
        history.push(route);
    }

    return (
        <>
            <Flex
                shadow="md"
                px={[2, 16]}
                justifyContent="space-between"
                alignItems="center"
            >
                <HStack p={2} spacing={4} alignItems="center">
                    <Image
                        boxSize="50px"
                        alt="Logo"
                        src={Logo}
                    />
                    <Box>
                        <Text
                            fontSize="lg"
                            fontFamily="heading"
                            color="blue.600"
                            m={0}
                            lineHeight={1.1}
                            letterSpacing={0.75}
                            fontStyle="xl"
                            textAlign="center"
                            display={["hidden", "block"]}
                        >
                            GOVT. SECONDARY SCHOOL<br />
                            <Text as="span">WAKRO</Text>
                        </Text>
                    </Box>
                </HStack>
                <HStack spacing={8} display={["none", "none", "none", "flex"]}>
                    <LinkButton onClick={() => history.push('/')}>
                        Home
                    </LinkButton>
                    <LinkButton onClick={() => history.push('/about')}>
                        About
                    </LinkButton>
                    <LinkButton onClick={() => history.push('/tc-issued')}>
                        TC Issued
                    </LinkButton>
                    <LinkButton onClick={() => history.push('/bulletins')}>
                        Bulletins
                    </LinkButton>
                    <LinkButton onClick={() => history.push('/gallery')}>
                        Gallery
                    </LinkButton>
                    <LinkButton onClick={() => history.push('/contact')}>
                        Contact
                    </LinkButton>
                </HStack>
                <Icon
                    display={["block", "none"]}
                    as={GiHamburgerMenu}
                    w={5}
                    h={5}
                    onClick={() => setShowMenu(true)}
                />
            </Flex>
            <MotionBox
                backgroundColor="white"
                pos="fixed"
                top={0}
                width="100vw"
                height="100vh"
                zIndex={10000}
                variants={menuVariants}
                animate={showMenu ? "opened" : "closed"}
                p={4}
            >
                <Flex justifyContent="flex-end">
                    <CloseButton onClick={() => setShowMenu(false)} />
                </Flex>
                <VStack spacing={2}>
                    <Text textTransform="uppercase" color="blue.400" fontWeight="bold" fontSize="xl" onClick={() => onClick('/')}>Home</Text>
                    <Divider />
                    <Text textTransform="uppercase" color="blue.400" fontWeight="bold" fontSize="xl" onClick={() => onClick('/about')}>About</Text>
                    <Divider />
                    <Text textTransform="uppercase" color="blue.400" fontWeight="bold" fontSize="xl" onClick={() => onClick('/tc-issued')}>TC Issued</Text>
                    <Divider />
                    <Text textTransform="uppercase" color="blue.400" fontWeight="bold" fontSize="xl" onClick={() => onClick('/bulletins')}>Bulletins</Text>
                    <Divider />
                    <Text textTransform="uppercase" color="blue.400" fontWeight="bold" fontSize="xl" onClick={() => onClick('/gallery')}>Gallery</Text>
                    <Divider />
                    <Text textTransform="uppercase" color="blue.400" fontWeight="bold" fontSize="xl" onClick={() => onClick('/contact')}>Contact</Text>
                </VStack>
            </MotionBox>
        </>
    )
}