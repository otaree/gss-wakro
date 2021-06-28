import {
    Box,
    HStack,
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Text,
    Icon
} from '@chakra-ui/react';
import { FaStarOfLife } from 'react-icons/fa';

import LinksTable from '../LinksTable';

const CBSEUpgradationDoc = "https://ghss-wakro.s3.ap-south-1.amazonaws.com/affiliation_application.pdf"
const HealthSanitationDoc = "https://ghss-wakro.s3.ap-south-1.amazonaws.com/water-health-sanitation-certificate.pdf";
const BuildingSafetyDoc = "https://ghss-wakro.s3.ap-south-1.amazonaws.com/building-safety-certificate.pdf";
const FireSafetyDoc = "#";
const DSEDoc = "#";
const TrustsDoc = "#";
const NOCDoc = "#";
const RTEActDoc = "#";
const FeeStructureDoc = "https://ghss-wakro.s3.ap-south-1.amazonaws.com/Fee-structure.pdf";
const AcademicCalendarDoc = "https://ghss-wakro.s3.ap-south-1.amazonaws.com/calander-activities-2020-21.pdf";
const PTADoc = "https://ghss-wakro.s3.ap-south-1.amazonaws.com/PTA.pdf";
const RESULTS = "https://ghss-wakro.s3.ap-south-1.amazonaws.com/class-x-result-2018-2020.pdf";
const TransportSafetyCertificate = "https://ghss-wakro.s3.ap-south-1.amazonaws.com/transport-safety-certificate.pdf";
const ListOfTeachersAndStaffs = "https://ghss-wakro.s3.ap-south-1.amazonaws.com/list-of-teaching-staff.pdf";
const SMCDoc = "https://ghss-wakro.s3.ap-south-1.amazonaws.com/smc.pdf";

export default function MandatoryPublicDisclosure() {
    const documentsInfosLinks = [
        {
            title: "Copies of Affiliation/Upgradation Letter",
            link: CBSEUpgradationDoc
        },
        {
            title: "Copies of Societies/Trust/Company Registration/Renewal Certificate",
            link: TrustsDoc
        },
        {
            title: "Copies of No Objection Certificate(NOC) issued",
            link: NOCDoc
        },
        {
            title: "Copies of recognition certificate under RTE Act, 2009, And it's renewal",
            link: RTEActDoc
        },
        {
            title: "Copy of Valid Building Safety Certificate as per the National Building Code",
            link: BuildingSafetyDoc
        },
        {
            title: "Copy of Valid Fire safety certificate issued by the competent authority",
            link: FireSafetyDoc
        },
        {
            title: "Copy of the DEO certificate submitted by the school for Affiliation/Upgradation/extension of the Affiliation or self certification by school",
            link: DSEDoc
        },
        {
            title: "Copies of valid water, health and sanitation certificates",
            link: HealthSanitationDoc
        },
        {
            title: "Copy of the Transport Safety Certificate",
            link: TransportSafetyCertificate
        },
        {
            title: "List of teachers and staffs",
            link: ListOfTeachersAndStaffs
        },
    ];
    const resultAndAcademicsLinks = [
        {
            title: "Fee Structure of the school",
            link: FeeStructureDoc
        },
        {
            title: "Annual Academic Calender",
            link: AcademicCalendarDoc
        },
        {
            title: "List of School Management Committee(SMC)",
            link: SMCDoc
        },
        {
            title: "List of Parents Teachers Association (PTA) Members",
            link: PTADoc
        },
        {
            title: "Last Three-year result of the board Examination",
            link: RESULTS
        },
    ];


    return (
        <Box py={[4, 8]} px={[4, 16]}>
            <HStack mb={4}>
                <Heading
                    fontSize={["xl", "3xl"]}
                >
                    Mandatory Public Disclosure
                </Heading>
                <Icon
                    as={FaStarOfLife}
                    w={4}
                    h={4}
                    color="blue.400"
                />
            </HStack>

            <Heading fontSize={["lg", "2xl"]}>
                A. General Information
            </Heading>
            <Box borderRadius="md" shadow="md" overflow="hidden" mt={2} mb={4}>
                <Table variant="simple" display={["table", "none"]} size="sm">
                    <Thead bgColor="blue.200" h="40px">
                        <Tr >
                            <Th color="gray.800">Documents</Th>
                            <Th color="gray.800">Details</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Name of School</Td>
                            <Td>Govt. Secondary School, Wakro</Td>
                        </Tr>
                        <Tr>
                            <Td>Affiliation No.</Td>
                            <Td>2220076</Td>
                        </Tr>
                        <Tr>
                            <Td>School code</Td>
                            <Td>37078</Td>
                        </Tr>
                        <Tr>
                            <Td>Address</Td>
                            <Td>Govt. Secondary School, Wakro</Td>
                        </Tr>
                        <Tr>
                            <Td>Email</Td>
                            <Td>hmgsswakro@gmail.com</Td>
                        </Tr>
                        <Tr>
                            <Td>Mobile No.</Td>
                            <Td></Td>
                        </Tr>
                    </Tbody>
                </Table>
                <Table variant="simple" display={["none", "table"]} size="md">
                    <Thead bgColor="blue.200">
                        <Tr>
                            <Th>Documents</Th>
                            <Th>Details</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Name of School</Td>
                            <Td>Govt. Secondary School, Wakro</Td>
                        </Tr>
                        <Tr>
                            <Td>Affiliation No.</Td>
                            <Td>2220076</Td>
                        </Tr>
                        <Tr>
                            <Td>School code</Td>
                            <Td>37078</Td>
                        </Tr>
                        <Tr>
                            <Td>Address</Td>
                            <Td>Govt. Secondary School, Wakro</Td>
                        </Tr>
                        <Tr>
                            <Td>Email</Td>
                            <Td>hmgsswakro@gmail.com</Td>
                        </Tr>
                        <Tr>
                            <Td>Mobile No.</Td>
                            <Td></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>

            <Heading fontSize={["lg", "2xl"]}>
                B. Documents And Information
            </Heading>
            <LinksTable
                title="Information"
                links={documentsInfosLinks}
            />


            <Heading fontSize={["lg", "2xl"]}>
                C. Result And Academics
            </Heading>
            <LinksTable
                title="Information"
                links={resultAndAcademicsLinks}
            />

            <Heading fontSize={["md", "xl"]}>
                Result Class: X
            </Heading>
            <Box borderRadius="md" shadow="md" overflow="hidden" my={2} mb={4} display={["none", "block"]}>
                <Table variant="simple" size="sm" >
                    <Thead bgColor="blue.200">
                        <Tr>
                            <Th w={40}>Year</Th>
                            <Th textAlign="center" >No. of Student registered</Th>
                            <Th textAlign="center" >No. of Student Passed</Th>
                            <Th textAlign="center" w={120} >Passed %</Th>
                            <Th textAlign="center" w={100}>Remarks</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>2019</Td>
                            <Td textAlign="center">91</Td>
                            <Td textAlign="center">43</Td>
                            <Td textAlign="center">51.80</Td>
                            <Td textAlign="center"></Td>
                        </Tr>
                        <Tr>
                            <Td>2020</Td>
                            <Td textAlign="center">86</Td>
                            <Td textAlign="center">34</Td>
                            <Td textAlign="center">41.97</Td>
                            <Td textAlign="center"></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
            <Box borderRadius="md" shadow="md" overflow="hidden" my={2} mb={4} display={["block", "none"]}>
                <HStack borderBottomWidth={.75} borderBottomColor="gray.200">
                    <Text fontWeight="bold" p={2} w="40vw" bgColor="blue.200">
                        Year
                    </Text>
                    <Text p={2} w="20vw" textAlign="center">2019</Text>
                    <Text p={2} w="20vw" textAlign="center">2020</Text>
                </HStack>
                <HStack borderBottomWidth={.75} borderBottomColor="gray.200">
                    <Text fontWeight="bold" p={2} w="40vw" bgColor="blue.200">
                        No. of Student registered
                    </Text>
                    <Text p={2} w="20vw" textAlign="center">91</Text>
                    <Text p={2} w="20vw" textAlign="center">86</Text>
                </HStack>
                <HStack borderBottomWidth={.75} borderBottomColor="gray.200">
                    <Text fontWeight="bold" p={2} w="40vw" bgColor="blue.200">
                        No. of Student Passed
                    </Text>
                    <Text p={2} w="20vw" textAlign="center">43</Text>
                    <Text p={2} w="20vw" textAlign="center">34</Text>
                </HStack>
                <HStack borderBottomWidth={.75} borderBottomColor="gray.200">
                    <Text fontWeight="bold" p={2} w="40vw" bgColor="blue.200">
                        Passed %
                    </Text>
                    <Text p={2} w="20vw" textAlign="center">51.80</Text>
                    <Text p={2} w="20vw" textAlign="center">41.97</Text>
                </HStack>
                <HStack>
                    <Text fontWeight="bold" p={2} w="40vw" bgColor="blue.200">
                        Remarks
                    </Text>
                    <Text p={2} w="20vw" textAlign="center"></Text>
                    <Text p={2} w="20vw" textAlign="center"></Text>
                </HStack>
            </Box>
        </Box>
    )
}
