import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td
} from '@chakra-ui/react';

export default function DetailsTable({ values }) {
    return (
        <Box borderRadius="md" shadow="md" overflow="hidden" mt={2} mb={4}>
            <Table variant="simple" display={["table", "none"]} size="sm">
                <Thead bgColor="blue.200" h="40px">
                    <Tr >
                        <Th color="gray.800">Documents</Th>
                        <Th color="gray.800">Details</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        values.map(({ title, value }, i) => (
                            <Tr key={i}>
                                <Td>{title}</Td>
                                <Td>{value}</Td>
                            </Tr>
                        ))
                    }
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
                    {
                        values.map(({ title, value }, i) => (
                            <Tr key={i}>
                                <Td>{title}</Td>
                                <Td>{value}</Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </Box>
    )
}