import React from "react";
import { Button, Center, Stack, Text } from "@mantine/core";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <Center h="100vh">
      <Stack w="30%" align="center">
        <Text size="32px">Retronatus - HOME</Text>
        <Button
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          Sair
        </Button>
      </Stack>
    </Center>
  );
}

export default Home;
