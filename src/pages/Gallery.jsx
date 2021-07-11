import { useEffect, useState, useCallback } from "react";
import {
    Flex,
    Box,
    Heading,
    Spinner,
    Center
} from '@chakra-ui/react';

import Pagination from "../components/Pagination";
import GalleryImage from '../components/GalleryImage';
import { baseURL } from "../constants";

export default function Gallery() {
    const [pictures, setPictures] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [query, setQuery] = useState({
        limit: 18,
        page: 0
    });
    const [isLoading, setIsLoading] = useState(true);

    const fetchGallery = useCallback(async () => {
        try {
            setIsLoading(true);
            const queryString = Object.keys(query)
                .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
                .join('&');
            const res = await fetch(`${baseURL}/gallery/all?${queryString}`);
            const data = await res.json();
            if (data) {
                setPictures(data.photos || []);
                setTotalCount(data.count);
            }
        } catch (error) {

        } finally {
            setIsLoading(false);
        }
    }, [query])

    useEffect(() => {
        fetchGallery();
    }, [fetchGallery]);

    return (
        <Box p={4}>
            <Heading textAlign="center" textTransform="uppercase" color="blue.400" textDecor="underline">Gallery</Heading>
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
                    (
                        <Flex columns={[1, 3]} p={4} spacing={2} justifyContent="center" flexWrap="wrap">
                            {
                                pictures.map((picture, i) => (
                                    <GalleryImage key={i} image={picture.link} title={picture.title} />
                                ))
                            }
                        </Flex>
                    )
            }
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
    );
}