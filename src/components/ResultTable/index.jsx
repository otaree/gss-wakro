import { Fragment } from "react";
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
} from '@chakra-ui/react';

export default function ResultsTable({ results }) {
    const classResults = results.reduce((acc, curr) => ({
        ...acc,
        [curr.classNo]: acc[curr.classNo] ? [...acc[curr.classNo], curr] : [curr]
    }), {});

    const renderMobileTable = (results) => {
        const resultObject = results.reduce((acc, curr) => ({
            noOfStudent: acc["noOfStudent"] ? [...acc["noOfStudent"], curr.noOfStudent] : [curr.noOfStudent],
            noOfStudentPassed: acc["noOfStudentPassed"] ? [...acc["noOfStudentPassed"], curr.noOfStudentPassed] : [curr.noOfStudentPassed],
            passPercentage: acc["passPercentage"] ? [...acc["passPercentage"], curr.passPercentage] : [curr.passPercentage],
            remarks: acc["remarks"] ? [...acc["remarks"], curr.remarks] : [curr.remarks],
            year: acc["year"] ? [...acc["year"], curr.year] : [curr.year],
        }), {});
        return (
            <Box borderRadius="md" shadow="md" overflow="hidden" my={2} mb={4} display={["block", "none"]}>
                <HStack borderBottomWidth={.75} borderBottomColor="gray.200">
                    <Text fontWeight="bold" p={2} w="40vw" bgColor="blue.200">
                        Year
                    </Text>
                    {
                        resultObject["year"].map((year, i) => (
                            <Text key={i} p={2} w="20vw" textAlign="center">{year}</Text>
                        ))
                    }
                </HStack>
                <HStack borderBottomWidth={.75} borderBottomColor="gray.200">
                    <Text fontWeight="bold" p={2} w="40vw" bgColor="blue.200">
                        No. of Student registered
                    </Text>
                    {
                        resultObject["noOfStudent"].map((noOfStudent, i) => (
                            <Text key={i} p={2} w="20vw" textAlign="center">{noOfStudent}</Text>
                        ))
                    }
                </HStack>
                <HStack borderBottomWidth={.75} borderBottomColor="gray.200">
                    <Text fontWeight="bold" p={2} w="40vw" bgColor="blue.200">
                        No. of Student Passed
                    </Text>
                    {
                        resultObject["noOfStudentPassed"].map((noOfStudentPassed, i) => (
                            <Text key={i} p={2} w="20vw" textAlign="center">{noOfStudentPassed}</Text>
                        ))
                    }
                </HStack>
                <HStack borderBottomWidth={.75} borderBottomColor="gray.200">
                    <Text fontWeight="bold" p={2} w="40vw" bgColor="blue.200">
                        Passed %
                    </Text>
                    {
                        resultObject["passPercentage"].map((passPercentage, i) => (
                            <Text key={i} p={2} w="20vw" textAlign="center">{passPercentage}</Text>
                        ))
                    }
                </HStack>
                <HStack>
                    <Text fontWeight="bold" p={2} w="40vw" bgColor="blue.200">
                        Remarks
                    </Text>
                    {
                        resultObject["remarks"].map((remarks, i) => (
                            <Text key={i} p={2} w="20vw" textAlign="center">{remarks}</Text>
                        ))
                    }
                </HStack>
            </Box>
        )
    }

    const classes = Object.keys(classResults);

    return classes.map((classNo, i) => (
        <Fragment key={i}>
            <Heading fontSize={["md", "xl"]}>
                Result Class: {classNo}
            </Heading>
            <Box borderRadius="md" shadow="md" overflow="hidden" my={2} mb={4} display={["none", "block"]}>
                <Table variant="simple" size="sm" width="100%">
                    <Thead bgColor="blue.200" >
                        <Tr>
                            <Th w={40}>Year</Th>
                            <Th textAlign="center" >No. of Student registered</Th>
                            <Th textAlign="center" >No. of Student Passed</Th>
                            <Th textAlign="center" w={120} >Passed %</Th>
                            <Th textAlign="center" w={100}>Remarks</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            classResults[classNo].map((classInfo, i) => (
                                <Tr key={i}>
                                    <Td>{classInfo.year}</Td>
                                    <Td textAlign="center">{classInfo.noOfStudent}</Td>
                                    <Td textAlign="center">{classInfo.noOfStudentPassed}</Td>
                                    <Td textAlign="center">{classInfo.passPercentage}</Td>
                                    <Td textAlign="center">{classInfo.remarks}</Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </Box>
            {renderMobileTable(classResults[classNo])}
        </Fragment>
    ))
}
