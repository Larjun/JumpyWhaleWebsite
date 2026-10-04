import { Anchor, Box, Container, Group, Stack, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const LINKS = [
  { label: "Liveries", href: "https://design.jumpywhale.com", external: true },
  { label: "Youtube", href: "https://www.youtube.com/@jumpywhale45", external: true },
  { label: "Resume", href: "https://docs.google.com/document/d/1mgu7oLRhmiBkjJYGCaykEE_BttQIcyAWD0ngxJAhehA/edit?usp=sharing", external: true },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      py="xl"
      style={{
        borderTop: "1px solid var(--card-border)",
        backgroundColor: "var(--card-bg)",
      }}
    >
      <Container size="lg">
        <Stack gap="md" align="center">
          <Group gap="lg" justify="center">
            {LINKS.map((link) =>
              link.external ? (
                <Anchor
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  size="sm"
                  c="dimmed"
                  underline="hover"
                >
                  {link.label}
                </Anchor>
              ) : (
                <Anchor
                  key={link.label}
                  component={Link}
                  to={link.href}
                  size="sm"
                  c="dimmed"
                  underline="hover"
                >
                  {link.label}
                </Anchor>
              ),
            )}
          </Group>
          <Text ta="center" size="sm" c="dimmed">
            &copy; {new Date().getFullYear()} Jumpy Whale. All rights reserved.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
