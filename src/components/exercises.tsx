import { MinusCircledIcon } from '@radix-ui/react-icons';
import { Flex, Heading, IconButton, Text } from '@radix-ui/themes';

export type Exercise = `${string} ${string}`;

interface ExercisesProps {
  exercises: Exercise[];
  showIncreaseCount?: boolean;
}

export function Exercises({ exercises, showIncreaseCount }: ExercisesProps) {
  return (
    <Flex direction="column" gap="4">
      <Flex justify="between">
        <Heading as="h3" size="3">Exercício</Heading>
        <Text weight="bold">Repetições</Text>
      </Flex>

      <ul className={showIncreaseCount ? 'space-y-2' : ''}>
        {exercises.map((e) => {
          const [exercise, repetitionsCount] = e.split(' ');

          return (
            <li className="flex justify-between" key={exercise}>
              <Text>{exercise}</Text>
              {!showIncreaseCount
                ? (
                    <Text>{repetitionsCount}</Text>
                  )
                : (
                    <Flex align="center" gap="3">
                      <Text>{repetitionsCount}</Text>
                      <IconButton
                        variant="ghost"
                        size="2"
                        color="green"
                        onClick={() => { console.log('TODO'); }}
                      >

                        <MinusCircledIcon width="24" height="24" />
                      </IconButton>
                    </Flex>
                  )}
            </li>
          );
        })}
      </ul>
    </Flex>
  );
}
