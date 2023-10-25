import React, { useCallback, useEffect, useState } from "react";
import { Button, Center, Stack, Text } from "@mantine/core";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface IUser {
  name: string;
  email: string;
}

function Home() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<IUser[]>([]);
  const { logout, getUsers } = useAuth();

  const loadUsers = useCallback(async () => {
    const req = await getUsers();
    setUsers(req);
  }, [getUsers]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <Center h="100vh">
      <Stack w="30%" align="center">
        <Text size="32px">Retronatus - HOME</Text>
        <Text size="24px">Usuários cadastrados no sistema:</Text>
        <ul>
          {users.map((user) => (
            <li>
              <Text>{user.email}</Text>
            </li>
          ))}
        </ul>

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
