import {
    Box,
    Text,
    Link,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { BiLinkExternal } from 'react-icons/bi';

export default function LinksTable({
    title,
    links = []
}) {
    return (
        <>
            <Box borderRadius="md" shadow="md" overflow="hidden" my={2} mb={4} display={["none", "block"]}>
                <Table variant="simple">
                    <Thead bgColor="blue.200">
                        <Tr>
                            <Th>{title}</Th>
                            <Th w={40}>Link</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            links.map(({ title, link }, i) => (
                                <Tr key={i}>
                                    <Td>{title}</Td>
                                    <Td>
                                        <Button
                                            colorScheme="blue"
                                            variant="solid"
                                            rightIcon={<BiLinkExternal />}
                                            size="sm"
                                            onClick={() => window.open(link, "__blank")}
                                        >
                                            View
                                        </Button>
                                    </Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </Box>
            <Box borderRadius="md" shadow="md" overflow="hidden" my={2} mb={4} display={["block", "none"]}>
                <Text p={2} fontSize="lg" fontWeight="semibold" bgColor="blue.200">
                    {title}
                </Text>
                {
                    links.map(({ title, link }, i) => {
                        const isLast = (links.length - 1) === i;
                        return (
                            <Text key={i} p={2} fontSize="md" borderBottomWidth={isLast ? 0 : 0.75} borderBottomColor="gray.200">
                                <Link href={link} isExternal color="blue.400">
                                    {title} <ExternalLinkIcon mx="2px" />
                                </Link>
                            </Text>
                        )
                    })
                }
            </Box>
        </>
    )
}

