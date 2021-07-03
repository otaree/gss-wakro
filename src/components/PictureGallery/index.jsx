import {
    Flex,
} from '@chakra-ui/react';

import GalleryImage from '../GalleryImage';

export default function PictureGallery() {
    const pictures = [
        {
            img: "https://ghss-wakro.s3.ap-south-1.amazonaws.com/classroom.jpeg",
            title: "Classroom"
        },
        {
            img: "https://ghss-wakro.s3.ap-south-1.amazonaws.com/assembly.jpeg",
            title: "Morning Assembly"
        },
        {
            img: "https://ghss-wakro.s3.ap-south-1.amazonaws.com/prize-distribution.jpeg",
            title: "Prize Distribution"
        },
        {
            img: "https://ghss-wakro.s3.ap-south-1.amazonaws.com/culture-event.jpeg",
            title: "Student and teachers during culture event"
        },
        {
            img: "https://ghss-wakro.s3.ap-south-1.amazonaws.com/indepandence-day.jpeg",
            title: "Independence day"
        },

    ]
    return (
        <>
            <Flex columns={[1, 3]} p={4} bgColor="blue.500" spacing={2} justifyContent="center" flexWrap="wrap">
                {
                    pictures.map((picture, i) => (
                        <GalleryImage key={i} image={picture.img} title={picture.title} />
                    ))
                }
            </Flex>
        </>
    );
}