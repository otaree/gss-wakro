import { useEffect, useState } from "react";
import {
    Flex,
    Box,
    Heading,
    Spinner,
    Center
} from '@chakra-ui/react';

import GalleryImage from '../components/GalleryImage';
import { baseURL } from "../constants";

export default function Gallery() {
    const [pictures, setPictures] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(`${baseURL}/gallery/all?limit=26&page=0`)
            .then(res => res.json())
            .then(data => setPictures(data.photos || []))
            .finally(() => {
                setIsLoading(false);
            })
    }, [])

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

        </Box>
    );
}