import {
    Box,
    Center,
    Text,
    HStack,
    Image,
    Flex,
    Heading,
    Icon,
    SimpleGrid,
    Divider
} from '@chakra-ui/react';
import { FaPhoneAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const PrincipalImg = "https://ghss-wakro.s3.ap-south-1.amazonaws.com/headmaster.jpg";

const PrincipalCard = () => (
    <Center my={4}>
        <Box borderRadius="md" shadow="md" overflow="hidden" p={4} px={8}>
            <Center>
                <Image boxSize="200px" name="Sd/Chau Enseng Singkai" src={PrincipalImg} />
            </Center>
            <Text mt={2} textAlign="center" color="blue.600" fontWeight="bold" textDecoration="underline">Sd/Chau Enseng Singkai</Text>
            <Text textAlign="center" color="blue.600" fontWeight="bold">Head Master</Text>
            <Text textAlign="center" mt={2} fontWeight="semibold" color="gray.600">Contact</Text>
            <HStack spacing={2}>
                <Icon
                    as={FaPhoneAlt}
                    color="blue.400"
                />
                <Text></Text>
            </HStack>
            <HStack spacing={2}>
                <Icon
                    as={GrMail}
                    color="blue.400"
                />
                <Text>hmgsswakro@gmail.com</Text>
            </HStack>
        </Box>
    </Center>
)

const TeacherCard = ({ name, position, qualification, phone, email }) => (
    <Box borderRadius="md" shadow="md" overflow="hidden" p={4}>
        <Text mt={2} color="gray.800" fontWeight="bold" textDecoration="underline">{name}</Text>
        <Text color="gray.800" fontWeight="bold">{position}</Text>
        <Divider colorScheme="blue" size="md" />
        <Text my={2} color="blue.600" fontWeight="semibold">{qualification}</Text>
        <Divider colorScheme="blue" size="md" />
        <HStack spacing={2}>
            <Icon
                as={FaPhoneAlt}
                color="blue.400"
            />
            <Text>{phone}</Text>
        </HStack>
        <HStack spacing={2}>
            <Icon
                as={GrMail}
                color="blue.400"
            />
            <Text>{email}</Text>
        </HStack>
    </Box>
)


export default function Contact() {

    const teachers = [
        {
            name: "Sri Mohammad Ahmed",
            position: "TGT",
            qualification: "M.Sc. (Maths)",
            phone: "",
            email: ""
        },
        {
            name: "Sri Ashok Kumar Srivastava",
            position: "TGT",
            qualification: "M.A.(Psychology & Hindi) B.Ed.",
            phone: "",
            email: ""
        },
        {
            name: "Smt. G.S. Mathew",
            position: "TGT",
            qualification: "B.Sc.,M.A. (Hindi) B.Ed",
            phone: "",
            email: ""
        },
        {
            name: "Sri Mathukutty Philip",
            position: "TGT",
            qualification: "B.A. B.T.",
            phone: "",
            email: ""
        },
        {
            name: "Smt. Swapna Dey",
            position: "TGT",
            qualification: "B.Sc B.Ed.",
            phone: "",
            email: ""
        },
        {
            name: "Sri Abramso Mam",
            position: "TGT",
            qualification: "B.Com D.L.Ed",
            phone: "",
            email: ""
        },
        {
            name: "Sri P.D. Washi",
            position: "TGT",
            qualification: "B.A. D.L.ed",
            phone: "",
            email: ""
        },
        {
            name: "Smt. Monika Washi",
            position: "TGT",
            qualification: "B.A. D.L.Ed",
            phone: "",
            email: ""
        },
        {
            name: "Sri Elisa Siram",
            position: "TGT",
            qualification: "M.A. (History) B.Ed",
            phone: "",
            email: ""
        },
        {
            name: "Sri Mangal Chandra Mitra",
            position: "TGT",
            qualification: "B.Com. B.P.Ed",
            phone: "",
            email: ""
        },
        {
            name: "Smt. Bakhemlu Tindia",
            position: "PRT",
            qualification: "B. A",
            phone: "",
            email: ""
        },
    ]

    return (
        <Flex justifyContent="center" py={4}>
            <Box width={["86%", "70%"]} >
                <Heading mt={2} mb={4} size="lg" color="blue.500" textAlign="center" textDecor="underline" fontFamily="heading">CONTACTS</Heading>
                <PrincipalCard />

                <Center>
                    <SimpleGrid columns={[1, 2]} spacing={4}>
                        {
                            teachers.map((teacher, i) => (<TeacherCard key={i} {...teacher} />))
                        }
                    </SimpleGrid>
                </Center>
            </Box>
        </Flex>
    );
}