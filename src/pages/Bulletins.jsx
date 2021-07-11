import { useEffect, useState, useCallback, Fragment } from "react";
import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    Spinner,
    Center,
    Divider,
    Icon
} from '@chakra-ui/react';
import { FaFileDownload } from "react-icons/fa";

import Pagination from "../components/Pagination";
import { localFormattedDate } from "../utils";
import { baseURL } from "../constants";

export default function Bulletins() {
    const [bulletins, setBulletins] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [query, setQuery] = useState({
        limit: 10,
        page: 0
    });
    const [isLoading, setIsLoading] = useState(true);

    const fetchNewsAndEvents = useCallback(async () => {
        try {
            setIsLoading(true);
            const queryString = Object.keys(query)
                .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
                .join('&');
            const res = await fetch(`${baseURL}/newsAndEvents/all?${queryString}`);
            const data = await res.json();
            if (data) {
                setBulletins(data.newsAndEvents);
                setTotalCount(data.count);
            }
        } catch (error) {

        } finally {
            setIsLoading(false);
        }
    }, [query])


    useEffect(() => {
        fetchNewsAndEvents();
    }, [fetchNewsAndEvents]);

    return (
        <Flex justifyContent="center" py={4}>
            <Box width={["86%", "70%"]} >
                <Heading mt={2} mb={4} size="lg" color="blue.500" textAlign="center" textDecor="underline" fontFamily="heading">Bulletins</Heading>
                <Box pos="relative" mb={8} minH={16}>
                    {
                        bulletins.length > 0 &&
                        (
                            <Box bgColor="white" borderRadius="md" shadow="md" p={4} overflow="hidden">
                                {
                                    bulletins.map((bulletin, i) => (
                                        <Fragment key={bulletin._id}>
                                            {
                                                i > 0 &&
                                                (
                                                    <Divider my={4} />
                                                )
                                            }
                                            <Heading fontSize="2xl">{bulletin.title}</Heading>
                                            <Text fontFamily="body" mt={2}>{bulletin.body}</Text>
                                            {
                                                Array.isArray(bulletin.attachments) &&
                                                bulletin.attachments.length > 0 &&
                                                (
                                                    <Button
                                                        rightIcon={<Icon as={FaFileDownload} />}
                                                        colorScheme="blue"
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => window.open(bulletin.attachments[0].link, "__blank")}
                                                        my={4}
                                                    >
                                                        Download
                                                    </Button>
                                                )
                                            }
                                            <Text
                                                fontFamily="cursive"
                                                fontSize={["xs", "sm"]}
                                                fontWeight="medium"
                                                color="gray.500"
                                                textAlign="right"
                                                mt={2}
                                            >
                                                Created on: {localFormattedDate(new Date(bulletin.createdDate))}
                                            </Text>
                                        </Fragment>
                                    ))
                                }
                            </Box>
                        )
                    }
                    {
                        isLoading &&
                        (
                            <Center pos="absolute" top={0} left={0} right={0} bottom={0} zIndex="docked" bgColor="blackAlpha.100" min="10vh">
                                <Spinner
                                    thickness="4px"
                                    speed="0.65s"
                                    emptyColor="gray.200"
                                    color="blue.500"
                                    size="xl"
                                />
                            </Center>
                        )
                    }
                </Box>
                {
                    totalCount > query.limit &&
                    (
                        <Center my={2}>
                            <Pagination
                                goTo={(page) => setQuery({ ...query, page })}
                                limit={query.limit}
                                skip={query.page}
                                totalCount={totalCount}
                            />
                        </Center>
                    )
                }
            </Box>
        </Flex>
    )
}

