import { useState, useEffect, Fragment } from "react";
import {
    Box,
    HStack,
    Heading,
    Text,
    Icon,
    Center,
    Spinner
} from '@chakra-ui/react';
import { FaStarOfLife } from 'react-icons/fa';

import LinksTable from '../LinksTable';
import DetailsTable from '../DetailsTable';
import ResultsTable from "../ResultTable";
import { baseURL } from "../../constants";

export default function MandatoryPublicDisclosure() {
    const [information, setInformation] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`${baseURL}/information/all`)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setInformation(data);
                }
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, []);

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

            {
                isLoading ?
                    (
                        <Center h="50vh">
                            <Spinner
                                thickness="4px"
                                speed="0.65s"
                                emptyColor="gray.200"
                                color="blue.500"
                                size="xl"
                            />
                        </Center>
                    ) :
                    information.map((info, i) => (
                        <Fragment key={info.id}>
                            <Heading fontSize={["lg", "2xl"]}>
                                <Text as="span" textTransform="uppercase">{(10 + i).toString(36)}</Text>. {info.title}
                            </Heading>
                            {
                                info.items.every(({ isLink }) => isLink) ?
                                    (
                                        <LinksTable
                                            title="Information"
                                            links={info.items}
                                        />
                                    ) :
                                    (
                                        <DetailsTable
                                            values={info.items}
                                        />
                                    )
                            }
                            {
                                Array.isArray(info.results) &&
                                (
                                    <ResultsTable
                                        results={info.results}
                                    />
                                )
                            }
                        </Fragment>
                    ))
            }
        </Box>
    )
}


