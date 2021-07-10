import { useState } from "react";
import {
    Box,
    Flex,
    Heading,
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    Text,
    VStack,
    Center,
    Button,
    Divider,
    Icon,
    useToast
} from '@chakra-ui/react';
import { VscFilePdf } from "react-icons/vsc";

import DatePicker from "../components/DatePicker";
import { isoFormattedDate } from "../utils";
import { baseURL } from "../constants";

export default function TCIssued() {
    const [name, setName] = useState("");
    const [isNameError, setIsNameError] = useState(false);
    const [dob, setDob] = useState(null);
    const [isDobError, setIsDobError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [tcDetails, setTcDetails] = useState();

    const toast = useToast();

    const onSubmit = async () => {
        if (name.trim().length === 0) return setIsNameError(true);
        if (!(dob instanceof Date)) return setIsDobError(true);
        try {
            setIsSubmitting(true);
            const query = {
                name,
                dob: isoFormattedDate(dob)
            };
            const queryString = Object.keys(query)
                .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
                .join('&');
            console.log(`${baseURL}/TC/search?${queryString}`)
            const res = await fetch(`${baseURL}/TC/search?${queryString}`);
            if (res.status !== 200) throw new Error("Server Error");
            try {
                const data = await res.json();
                setTcDetails(data);
            } catch (error) {
                toast({
                    title: "TC not found",
                    description: "TC not found for the student particulars",
                    status: "info",
                    duration: 3000,
                    isClosable: true,
                });
            }
        } catch (error) {
            toast({
                title: "Server Error",
                description: "Something went wrong. Please try again",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Flex justifyContent="center" py={4}>
            <Box width={["86%", "70%"]} >
                <Heading mt={2} mb={4} size="lg" color="blue.500" textAlign="center" textDecor="underline" fontFamily="heading">Transfer Certificates Issued</Heading>
                <Center>
                    <VStack w={["100%", "50%"]} spacing={4} p={[2, 4]}>
                        <FormControl isInvalid={isNameError} width={["80vw", 500]}>
                            <FormLabel>
                                <Text>
                                    Student name{" "}
                                    <Text as="span" color="red.600">*</Text>
                                </Text>
                            </FormLabel>
                            <Input
                                type="text"
                                placeholder="Student name"
                                value={name}
                                onChange={e => {
                                    setName(e.target.value)
                                    setIsNameError(false);
                                }}
                            />
                            <FormErrorMessage>
                                {isNameError && "Pease enter Student's name"}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={isDobError} width={["80vw", 500]}>
                            <FormLabel>
                                <Text>
                                    Student Date of Birth{" "}
                                    <Text as="span" color="red.600">*</Text>
                                </Text>
                            </FormLabel>
                            <DatePicker
                                placeholder="Student Date of Birth"
                                width={["80vw", 500]}
                                value={dob}
                                onChange={(date) => {
                                    setDob(date);
                                    setIsDobError(false);
                                }}
                                popperPosition="bottom"
                            />
                            <FormErrorMessage>
                                {isDobError && "Pease pick Student Date of Birth"}
                            </FormErrorMessage>
                        </FormControl>
                        <Center>
                            <Button
                                colorScheme="blue"
                                onClick={onSubmit}
                                isDisabled={isSubmitting}
                                isLoading={isSubmitting}
                            >
                                Submit
                            </Button>
                        </Center>
                    </VStack>
                </Center>
                {
                    tcDetails &&
                    (
                        <>
                            <Divider my={4} />
                            <Center>
                                {
                                    tcDetails?.link &&
                                    (
                                        <Box
                                            as="iframe"
                                            src={tcDetails.link}
                                            width="100%"
                                            height="80vh"
                                        />
                                    )
                                }
                            </Center>
                            <Center my={4}>
                                <Button
                                    colorScheme="blue"
                                    leftIcon={<Icon as={VscFilePdf} />}
                                    onClick={() => window.open(tcDetails.link, "__blank")}
                                >
                                    Download Transfer Certificate
                                </Button>
                            </Center>
                        </>
                    )
                }
            </Box>
        </Flex>
    )
}

