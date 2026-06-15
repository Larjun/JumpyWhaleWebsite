import {
  Anchor,
  Card,
  Container,
  Image,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { PROJECTS } from "./projects";
import "./App.css";

function App() {
  return (
    <Container size="md" py="xl" my="xl">
      <Title
        order={1}
        ta="center"
        fz={{ base: "3.5rem", sm: "5rem" }}
        ff="'Tele Marines', system-ui, sans-serif"
        c="teal"
        fs="italic"
        mb="md"
      >
        jumPy whAle
      </Title>
      <Text ta="center" size="lg" mb="xl">
        Hi, I am Arjun, here are some of the stuff I built.
      </Text>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg" py="xl">
        {PROJECTS.map((project) => (
          <Anchor
            key={project.name}
            href={project.link}
            target="_blank"
            underline="never"
          >
            <Card
              className="projectCard"
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              h="100%"
            >
              {project.logoImg && (
                <Card.Section>
                  <div className="projectCardImage">
                    <Image src={project.logoImg} alt={project.name} />
                  </div>
                </Card.Section>
              )}
              <Title order={3} mt="md" mb="xs" size="h4">
                {project.name}
              </Title>
              <Text size="sm" c="dimmed">
                {project.description}
              </Text>
            </Card>
          </Anchor>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default App;
