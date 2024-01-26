import { AspectRatio, Link as ChakraLink, Image, Flex, Heading, HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <Flex p={5} bg={'orange.300'}>
            <ChakraLink as={RouterLink} to={'/'}>
                <HStack gap={3}>
                    <AspectRatio minW={'40px'} minH={'40px'} ratio={1}>
                        <Image src={logo} rounded={'full'} />
                    </AspectRatio>
                    <Heading as={'h1'} size={'lg'}>Movie Database</Heading>
                </HStack>
            </ChakraLink>
        </Flex>
    );
};

export default Header;
