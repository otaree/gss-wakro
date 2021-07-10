import {
    Box,
    Image,
    Modal,
    ModalContent,
    ModalOverlay,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Text,
    Center,
    useDisclosure
} from "@chakra-ui/react";

export default function GalleryImage({ image, title }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box
                p={2}
                bgColor="white"
                borderRadius="md"
                shadow="md"
                m={2}
                cursor="pointer"
                _hover={{
                    transform: "scale(1.025)"
                }}
                onClick={onOpen}

            >
                <Image
                    w={380}
                    h={240}
                    objectFit="cover"
                    src={image}
                />
                <Center>
                    <Text maxW={["70vw", "24vw"]} isTruncated fontSize="md" fontWeight="semibold" textAlign="center" my={1}>{title}</Text>
                </Center>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose} size={["4xl", "full"]}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Image
                            w={[380, "100%"]}
                            h={[240, "86vh"]}
                            objectFit="cover"
                            src={image}
                        />
                        <Text fontSize="md" fontWeight="semibold" textAlign="center" my={1}>{title}</Text>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
