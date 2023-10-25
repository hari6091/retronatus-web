import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Center, Group, Stack, Text, TextInput } from "@mantine/core";
import useAuth from "../../hooks/useAuth";

function Signin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signIn } = useAuth();

  const handleLogin = async () => {
    try {
      await signIn(email, password);
      navigate("/home");
    } catch (err) {
      setError("Algo deu errado!");
    }
  };

  return (
    <Center h="100vh">
      <Stack w="30%" align="center">
        <Text size="32px">Retronatus login</Text>
        <Stack w="100%" gap="32px">
          <TextInput
            type="email"
            label="E-mail:"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            type="password"
            label="Senha:"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Group w="100%" justify="space-between">
            <Button
              w="33%"
              variant="outline"
              onClick={() => navigate("/signup")}
            >
              Cadastre-se
            </Button>
            <Button w="33%" onClick={handleLogin}>
              Login
            </Button>
          </Group>
          <p>{error}</p>
        </Stack>
      </Stack>
    </Center>
  );
}

export default Signin;
