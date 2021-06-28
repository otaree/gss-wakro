import {
    Box,
    Center,
    Text,
    VStack,
    Image,
    Flex,
    Heading
} from '@chakra-ui/react';

const SchoolFrontImg = "https://ghss-wakro.s3.ap-south-1.amazonaws.com/gate.jpeg";

export default function About() {
    return (
        <Flex justifyContent="center" py={4}>
            <Box width={["86%", "70%"]} >
                <Heading mt={2} mb={4} size="lg" color="blue.500" textAlign="center" textDecor="underline" fontFamily="heading">HISTORY AND ABOUT</Heading>
                <VStack spacing={4}>
                    <Text fontFamily="body" fontSize="xl" w="100%">
                        Government Secondary School, Wakro is one of the premier institution for secondary education
                        in the state of Arunachal Pradesh. It is located at Wakro, 75 kilometre away from Namsai, the District Headquarter of Namsai District, on the way to historical legendary place <Text as="em" color="blue.500">Parsuramkund</Text>.
                    </Text>

                    <Center w="100%">
                        <Box>
                            <Image
                                w={["100%", "60vw"]}
                                h="60vh"
                                objectFit="cover"
                                name="School Front"
                                src={SchoolFrontImg}
                            />
                            <Text textAlign="center" color="blue.400" mt={2} fontWeight="semibold">Front View of School</Text>
                        </Box>
                    </Center>

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        Wakro is a small hill station inhabited by <Text as="em" color="blue.500">MISHMI TRIBE</Text>. At Wakro, the enchanting beauty of the plain and mountain mesmerizes one of being so close to nature.
                    </Text>

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        The School was established as a primary school on 01st October,1958 and upgraded to middle school On1stJuly’1975.Again, it was upgraded to Secondary level on 08thAugust’ 1988. It has the system of co- education with the provision for Day Scholars and Boarders. The School has classes from class-I (ONE) to class X (TEN). The school is affiliated to the Central Board of Secondary Education, New Delhi with affiliation no. 2220076.
                    </Text>

                    <Text fontFamily="body" fontSize="xl" w="100%">
                        The school has been striving to maintain high standards in both teaching and learning in order to achieve excellence. It has concentrated its effort to produce good results since its inception. As yet the school has produced a number of laureate personalities in various fields such as Doctors, Engineers, APCS officers, Teachers, Political leaders, players etc.
                    </Text>

                </VStack>
            </Box>
        </Flex>
    );
}