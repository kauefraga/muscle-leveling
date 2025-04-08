import { ClockIcon, Cross1Icon } from '@radix-ui/react-icons';
import { Box, Button, Flex, Heading, IconButton, Text } from '@radix-ui/themes';
import { Link } from 'react-router';
import { getGreeting } from '../utils/greeting';

const exercises = ['Flexões 100', 'Agachamentos 100', 'Abdominais 100', 'Corrida 10km'];

export function App() {
  const greeting = getGreeting(new Date().getHours());

  function handleShenanigan() {
    // show a modal with rick roll
  }

  return (
    <Flex align="center" gap="5" direction="column">
      <header className="mt-10">
        <Heading align="center">
          {greeting}
          , Jogador!
        </Heading>
      </header>

      <Flex direction="column" gap="5" width={{ xs: '420px' }}>
        <Flex
          direction="column"
          gap="6"
          className="p-8 text-white shadow-lg bg-[radial-gradient(circle_at_center,#254668,#20334a,#171e27)]"
        >
          <Flex justify="end">
            <IconButton
              variant="ghost"
              size="2"

              color="red"
              onClick={handleShenanigan}
            >
              <Cross1Icon width="24" height="24" color="white" />
            </IconButton>
          </Flex>

          <Flex direction="column" gap="2">
            <Heading as="h2" align="center" size="7">Tarefa diária</Heading>

            <Box width={{ xs: '220px' }} mx="auto">
              <Text as="p" align="center" wrap="pretty">Treine para seu sua versão mais formidável!</Text>
            </Box>
          </Flex>

          <Flex direction="column" gap="1">
            <Flex justify="between">
              <Heading as="h3" size="3">Exercício</Heading>
              <Text weight="bold">Repetições</Text>
            </Flex>

            <ul>
              {exercises.map((e) => {
                const [exercise, repetitionsCount] = e.split(' ');

                return (
                  <li className="flex justify-between gap-2" key={exercise}>
                    <p>{exercise}</p>
                    <p>{repetitionsCount}</p>
                  </li>
                );
              })}
            </ul>
          </Flex>

          <Flex align="center" gap="3" justify="center">
            <ClockIcon width="24" height="24" />
            {' '}
            <Text align="center">
              2 horas
            </Text>
          </Flex>

          <Text align="center">
            <Text className="text-red-600" weight="bold">Atenção!</Text>
            {' '}
            Se a tarefa diária não for concluída, penalidades serão aplicadas de acordo.
          </Text>
        </Flex>

        <Button size="3" asChild>
          <Link to="/training">Começar</Link>
        </Button>
      </Flex>
    </Flex>
  );
}
