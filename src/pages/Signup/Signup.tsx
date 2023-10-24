import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Center, Group, Stack, Text, TextInput } from "@mantine/core";
import useAuth from "../../hooks/useAuth";

function Signup() {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp } = useAuth();

  const handleSignup = () => {
    try {
      signUp(name, email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError("Algo deu errado!");
    }
  };

  return (
    <Center h="100vh">
      <Stack w="30%" align="center">
        <Text size="32px">Retronatus cadastro</Text>
        <Stack w="100%" gap="32px">
          <TextInput
            label="Nome:"
            placeholder="Seu nome"
            onChange={(e) => setName(e.target.value)}
          />
          <TextInput
            type="email"
            label="E-mail:"
            placeholder="Seu email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            type="password"
            label="Senha:"
            placeholder="Sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Group w="100%" justify="space-between">
            <Button w="33%" variant="outline" onClick={() => navigate("/")}>
              Ir para login
            </Button>
            <Button w="33%" onClick={handleSignup}>
              Registrar-se
            </Button>
          </Group>
          <p>{error}</p>
        </Stack>
      </Stack>
    </Center>
  );
}

export default Signup;
