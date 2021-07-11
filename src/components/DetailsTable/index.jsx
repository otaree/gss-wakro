import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Link,
    Button
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { BiLinkExternal } from 'react-icons/bi';

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
                        values.map(({ title, value, isLink }, i) => (
                            <Tr key={i}>
                                <Td>{title}</Td>
                                <Td>
                                    {
                                        isLink ?
                                            (
                                                <Link href={value} isExternal color="blue.400">
                                                    Link <ExternalLinkIcon mx="2px" />
                                                </Link>
                                            ) :
                                            value
                                    }
                                </Td>
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
                        values.map(({ title, value, isLink }, i) => (
                            <Tr key={i}>
                                <Td>{title}</Td>
                                <Td>
                                    {
                                        !isLink ?
                                            value :
                                            (
                                                <Button
                                                    colorScheme="blue"
                                                    variant="solid"
                                                    rightIcon={<BiLinkExternal />}
                                                    size="sm"
                                                    onClick={() => window.open(value, "__blank")}
                                                >
                                                    View
                                                </Button>
                                            )

                                    }
                                </Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </Box>
    )
}