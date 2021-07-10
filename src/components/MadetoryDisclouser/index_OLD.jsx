// import {
//     Box,
//     HStack,
//     Heading,
//     Table,
//     Thead,
//     Tbody,
//     Tr,
//     Th,
//     Td,
//     Text,
//     Icon
// } from '@chakra-ui/react';
// import { FaStarOfLife } from 'react-icons/fa';

// import LinksTable from '../LinksTable';
// import DetailsTable from '../DetailsTable';


// export default function MandatoryPublicDisclosure() {
//     return (
//         <Box py={[4, 8]} px={[4, 16]}>
//             <HStack mb={4}>
//                 <Heading
//                     fontSize={["xl", "3xl"]}
//                 >
//                     Mandatory Public Disclosure
//                 </Heading>
//                 <Icon
//                     as={FaStarOfLife}
//                     w={4}
//                     h={4}
//                     color="blue.400"
//                 />
//             </HStack>

//             <Heading fontSize={["lg", "2xl"]}>
//                 A. General Information
//             </Heading>
//             <LinksTable
//                 title="Information"
//                 links={documentsInfosLinks}
//             />
//             <Heading fontSize={["lg", "2xl"]}>
//                 B. Documents And Information
//             </Heading>
//             <LinksTable
//                 title="Information"
//                 links={documentsInfosLinks}
//             />


//             <Heading fontSize={["lg", "2xl"]}>
//                 C. Result And Academics
//             </Heading>
//             <LinksTable
//                 title="Information"
//                 links={resultAndAcademicsLinks}
//             />

//             <Heading fontSize={["md", "xl"]}>
//                 Result Class: X
//             </Heading>
//             {/* <Box borderRadius="md" shadow="md" overflow="hidden" my={2} mb={4} display={["none", "block"]}>
//                 <Table variant="simple" size="sm" >
//                     <Thead bgColor="blue.200">
//                         <Tr>
//                             <Th w={40}>Year</Th>
//                             <Th textAlign="center" >No. of Student registered</Th>
//                             <Th textAlign="center" >No. of Student Passed</Th>
//                             <Th textAlign="center" w={120} >Passed %</Th>
//                             <Th textAlign="center" w={100}>Remarks</Th>
//                         </Tr>
//                     </Thead>
//                     <Tbody>
//                         <Tr>
//                             <Td>2019</Td>
//                             <Td textAlign="center">91</Td>
//                             <Td textAlign="center">43</Td>
//                             <Td textAlign="center">51.80</Td>
//                             <Td textAlign="center"></Td>
//                         </Tr>
//                         <Tr>
//                             <Td>2020</Td>
//                             <Td textAlign="center">86</Td>
//                             <Td textAlign="center">34</Td>
//                             <Td textAlign="center">41.97</Td>
//                             <Td textAlign="center"></Td>
//                         </Tr>
//                     </Tbody>
//                 </Table>
//             </Box>
//             <Box borderRadius="md" shadow="md" overflow="hidden" my={2} mb={4} display={["block", "none"]}>
//                 <HStack borderBottomWidth={.75} borderBottomColor="gray.200">
//                     <Text fontWeight="bold" p={2} w="40vw" bgColor="blue.200">
//                         Year
//                     </Text>
//                     <Text p={2} w="20vw" textAlign="center">2019</Text>
//                     <Text p={2} w="20vw" textAlign="center">2020</Text>
//                 </HStack>
//                 <HStack borderBottomWidth={.75} borderBottomColor="gray.200">
//                     <Text fontWeight="bold" p={2} w="40vw" bgColor="blue.200">
//                         No. of Student registered
//                     </Text>
//                     <Text p={2} w="20vw" textAlign="center">91</Text>
//                     <Text p={2} w="20vw" textAlign="center">86</Text>
//                 </HStack>
//                 <HStack borderBottomWidth={.75} borderBottomColor="gray.200">
//                     <Text fontWeight="bold" p={2} w="40vw" bgColor="blue.200">
//                         No. of Student Passed
//                     </Text>
//                     <Text p={2} w="20vw" textAlign="center">43</Text>
//                     <Text p={2} w="20vw" textAlign="center">34</Text>
//                 </HStack>
//                 <HStack borderBottomWidth={.75} borderBottomColor="gray.200">
//                     <Text fontWeight="bold" p={2} w="40vw" bgColor="blue.200">
//                         Passed %
//                     </Text>
//                     <Text p={2} w="20vw" textAlign="center">51.80</Text>
//                     <Text p={2} w="20vw" textAlign="center">41.97</Text>
//                 </HStack>
//                 <HStack>
//                     <Text fontWeight="bold" p={2} w="40vw" bgColor="blue.200">
//                         Remarks
//                     </Text>
//                     <Text p={2} w="20vw" textAlign="center"></Text>
//                     <Text p={2} w="20vw" textAlign="center"></Text>
//                 </HStack>
//             </Box> */}
//         </Box>
//     )
// }
