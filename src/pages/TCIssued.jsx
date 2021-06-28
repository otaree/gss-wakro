import {
    Box,
    Flex,
    Heading,
} from '@chakra-ui/react';

export default function TCIssued() {
    return (
        <Flex justifyContent="center" py={4}>
            <Box width={["86%", "70%"]} >
                <Heading mt={2} mb={4} size="lg" color="blue.500" textAlign="center" textDecor="underline" fontFamily="heading">Transfer Certificates Issued</Heading>
            </Box>
        </Flex>
    )
}

