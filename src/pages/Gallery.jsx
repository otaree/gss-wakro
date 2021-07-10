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

// const pictures = [
//     {
//         img: "https://ghss-wakro.s3.ap-south-1.amazonaws.com/classroom.jpeg",
//         title: "Classroom"
//     },
//     {
//         img: "https://ghss-wakro.s3.ap-south-1.amazonaws.com/assembly.jpeg",
//         title: "Morning Assembly"
//     },
//     {
//         img: "https://ghss-wakro.s3.ap-south-1.amazonaws.com/prize-distribution.jpeg",
//         title: "Prize Distribution"
//     },
//     {
//         img: "https://ghss-wakro.s3.ap-south-1.amazonaws.com/yoga.jpeg",
//         title: "Student Doing Yoga"
//     },
//     {
//         img: "https://ghss-wakro.s3.ap-south-1.amazonaws.com/morning-assemly.jpeg",
//         title: "Faculty during Morning Assembly"
//     },
//     {
//         img: "https://ghss-wakro.s3.ap-south-1.amazonaws.com/back-assembly.jpeg",
//         title: "Student during Morning Assembly"
//     },
//     {
//         img: "https://ghss-wakro.s3.ap-south-1.amazonaws.com/culture-event.jpeg",
//         title: "Student and teachers during culture event"
//     },
//     {
//         img: "https://ghss-wakro.s3.ap-south-1.amazonaws.com/indepandence-day.jpeg",
//         title: "Independence day"
//     },
//     {
//         img: "https://ghss-wakro.s3.ap-south-1.amazonaws.com/shark-suracksha.jpeg",
//         title: `Sadak Suraksha Jeevan Raksha`
//     },
//     {
//         img: "https://ghss-wakro.s3.ap-south-1.amazonaws.com/teacher-day.jpeg",
//         title: `Teacher Day`
//     },
//     {
//         img: "https://ghss-wakro.s3.ap-south-1.amazonaws.com/soap.jpeg",
//         title: `Following SOP during COVID-19`
//     },
// ];

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