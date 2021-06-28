import {
    Box,
    Image,
    Center,
    Heading,
    Text
} from '@chakra-ui/react'

export default function Cover() {
    return (
        <Box pos="relative" overflow="hidden">
            <Image
                src="https://ghss-wakro.s3.ap-south-1.amazonaws.com/gate.jpeg"
                height="90vh"
                width="100%"
                objectFit="cover"
                filter="blur(1.5px)"
            />

            <Box
                pos="absolute"
                top={0}
                bottom={0}
                left={0}
                right={0}
            >
                <Center height="100%">
                    <Box
                        bgColor="blackAlpha.400"
                        p={[4, 8]}
                        borderRadius="md"
                        shadow="md"
                        overflow="hidden"
                    >
                        <Heading fontSize={["3xl", "5xl"]} color="white" textAlign="center">
                            Welcome to<br />
                            <Text as="span" textTransform="capitalize">Govt. Secondary School, Wakro</Text>
                        </Heading>
                    </Box>

                </Center>
            </Box>
        </Box>
    );
}
