import React, { useState } from "react";
import { VStack, Button, Box, Center, Image, Heading } from "@chakra-ui/react";
import { FaTshirt, FaPaintBrush, FaUpload } from "react-icons/fa";

const Index = () => {
  const [product, setProduct] = useState("tshirt");
  return (
    <Box>
      <Center h="100vh">
        <VStack spacing={4} align="stretch" position="absolute" left={10}>
          <Button leftIcon={<FaTshirt />} colorScheme="teal" variant="solid">
            Product
          </Button>
          <Button leftIcon={<FaPaintBrush />} colorScheme="teal" variant="solid">
            Design
          </Button>
          <Button leftIcon={<FaUpload />} colorScheme="teal" variant="solid">
            Upload
          </Button>
        </VStack>
        <Box boxSize="sm">
          <Heading mb={4}>T-Shirt Preview</Heading>
          <Image src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibGFuayUyMHQtc2hpcnR8ZW58MHx8fHwxNzA5MjI2Nzc0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="T-Shirt Preview" boxSize="300px" objectFit="cover" />
        </Box>
      </Center>
    </Box>
  );
};

export default Index;
