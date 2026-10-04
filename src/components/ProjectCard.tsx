import { Badge, Card, Group, Stack, Text, Title } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";
import type { ProjectClassDef } from "../data/projects";

const STATUS_COLOR: Record<ProjectClassDef["status"], string> = {
  Current: "teal",
  Live: "teal",
  "In progress": "yellow",
  Past: "gray",
};

/** YouTube play mark, drawn in the site accent rather than YouTube red. */
function YoutubeMark() {
  return (
    <svg
      viewBox="0 0 576 512"
      role="img"
      aria-label="YouTube"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.1 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.1 337.6V175.2l142.7 81.2-142.7 81.2z"
      />
    </svg>
  );
}

export default function ProjectCard({ project }: { project: ProjectClassDef }) {
  const isLink = Boolean(project.link);

  return (
    <Card
      className="jw-card"
      component={isLink ? "a" : "div"}
      href={project.link}
      target={isLink ? "_blank" : undefined}
      rel={isLink ? "noreferrer" : undefined}
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      h="100%"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {project.logoImg ? (
        <Card.Section>
          <div
            className={
              project.fit === "contain"
                ? `jw-card-media jw-card-media--logo${
                    project.plate === "light"
                      ? " jw-card-media--logo-light"
                      : ""
                  }`
                : "jw-card-media"
            }
          >
            <img
              src={project.logoImg}
              srcSet={project.logoSrcSet}
              sizes="(max-width: 48em) 100vw, 33vw"
              alt={project.name}
              loading="lazy"
            />
          </div>
        </Card.Section>
      ) : (
        <Card.Section>
          {project.icon === "youtube" ? (
            <div className="jw-card-media jw-card-media--logo jw-card-media--icon">
              <YoutubeMark />
            </div>
          ) : (
            <div className="jw-card-media">
              <div className="jw-placeholder" />
            </div>
          )}
        </Card.Section>
      )}

      <Stack gap="xs" mt="md" style={{ flex: 1 }}>
        <Group justify="space-between" align="center" wrap="nowrap">
          <Badge
            color={STATUS_COLOR[project.status]}
            variant="light"
            radius="sm"
          >
            {project.status}
          </Badge>
          <Text
            size="xs"
            c="dimmed"
            fw={700}
            style={{ letterSpacing: "0.1em" }}
          >
            {project.year}
          </Text>
        </Group>

        <Group gap={6} wrap="nowrap" align="center">
          <Title order={3} size="h4">
            {project.name}
          </Title>
          {isLink && <IconArrowUpRight size={16} color="var(--jw-accent)" />}
        </Group>

        <Text size="sm" c="dimmed" style={{ flex: 1 }}>
          {project.description}
        </Text>
      </Stack>
    </Card>
  );
}
