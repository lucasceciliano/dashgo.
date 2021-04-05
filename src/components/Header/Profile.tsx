import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean
}

export function Profile({showProfileData = true}: ProfileProps) {
    return(
        <Flex
        align="center"
        >
           { showProfileData && (
                <Box>
                <Text>Lucas Ceciliano</Text>
                <Text
                color="gray.300"
                fontSize="small"
                >usr12345@gmail.com
                </Text>

            </Box>
           ) }

            <Avatar 
            size="md"
            name="Lucas Ceciliano"
            src="https://github.com/lucasceciliano.png"
            />

        </Flex>
        
    )
}