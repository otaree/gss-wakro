import {
    Box,
    Center,
    Flex,
    Image,
    Text,
    Icon
} from '@chakra-ui/react';
import { FaQuoteLeft } from 'react-icons/fa';

const PrincipalImg = "https://ghss-wakro.s3.ap-south-1.amazonaws.com/headmaster.jpg";

export default function PrincipleMessage() {

    return (
        <>
            <Box p={[8, 16]} bgColor="blue.50">
                <Flex flexDirection={["column", "row"]} width="100%">
                    <Box>
                        <Box display={["block", "none"]}>
                            <Center mb={2}>
                                <Box p={2} borderRadius="md" shadow="md" bgColor="white">
                                    <Image boxSize="150px" name="Sd/Chau Enseng Singkai" src={PrincipalImg} />
                                </Box>
                            </Center>
                            <Text textAlign="center" color="blue.600" fontWeight="bold" textDecor="underline">Sd/Chau Enseng Singkai</Text>
                            <Text textAlign="center" color="blue.600" fontWeight="bold">Head Master</Text>
                        </Box>
                        <Box display={["none", "block"]} width={180} >
                            <Center mb={2}>
                                <Box p={2} borderRadius="md" shadow="md" bgColor="white">
                                    <Image boxSize="150px" name="Sd/Chau Enseng Singkai" src={PrincipalImg} />
                                </Box>
                            </Center>
                            <Text textAlign="center" color="blue.600" fontWeight="bold" textDecor="underline">Sd/Chau Enseng Singkai</Text>
                            <Text textAlign="center" color="blue.600" fontWeight="bold">Head Master</Text>
                        </Box>
                    </Box>
                    <Box p={2} ml={4}>
                        <Flex flexWrap="wrap" p={2}>
                            <Icon as={FaQuoteLeft} color="blue.500" w={6} h={6} />
                            <Box width="100%">
                                <Text fontSize={["lg", "2xl"]} color="blue.700">
                                    Govt. Sec. School, Wakro is striving to make a better place to work for the teaching community and thus, they would be taking care of all learners as of their own sons and daughters. We as a team are providing whatever are available in the school and its surrounding for the better future of our children".<br />
                                </Text >
                                <Text fontSize={["lg", "2xl"]} color="blue.700" as="em" fontWeight="semibold" mt={2}>Sd/Chau Enseng Singkai, HM, GSS, Wakro.</Text>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </>
    );
}

