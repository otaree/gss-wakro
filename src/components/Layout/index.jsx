import { Flex, Box } from '@chakra-ui/react'

import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Layout({ children }) {
    return (
        <Flex flexDirection="column" minHeight="100vh">
            <Navbar />
            <Box  flexGrow={2} bgColor="whibluepha.400">
                {children}
            </Box>
            <Footer />
        </Flex>
    );
}