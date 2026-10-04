import { Box, Container, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { PROJECTS } from "../data/projects";

export default function Projects() {
  return (
    <Box
      className="jw-banner"
      pt={{ base: 48, sm: 72 }}
      pb={{ base: 64, sm: 96 }}
    >
      <Box className="jw-grid-texture" aria-hidden />
      <Box className="jw-slash" aria-hidden />

      <Container size="lg" style={{ position: "relative", zIndex: 2 }}>
        <Reveal>
          <Stack gap="sm" mb={{ base: 40, sm: 56 }} maw={680}>
            <Title
              order={1}
              className="jw-display"
              fz={{ base: "1.75rem", sm: "2.75rem" }}
              lh={1.18}
            >
              My Work
            </Title>
            <Text size="lg" c="dimmed">
              The people I race with, the cars I&apos;ve painted for them, and a
              few things I built along the way.
            </Text>
          </Stack>
        </Reveal>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
          {PROJECTS.map((project, i) => (
            <Reveal
              key={project.name}
              delay={(i % 3) * 0.08}
              style={{ height: "100%" }}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
