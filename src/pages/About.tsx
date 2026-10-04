import {
  Box,
  Container,
  Divider,
  Grid,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Reveal from "../components/Reveal";
import { ABOUT_INTRO, ABOUT_PARAGRAPHS, COCKPIT_SPECS } from "../data/about";
import { ikPortrait } from "../lib/imagekit";

// Framed on the driver rather than the whole kart: a 2080x2600 window of the
// 6000x4000 original, centred on the helmet. Lower x moves the frame left.
const portrait = ikPortrait("jumpy_whale_assets/mekarting.jpg", {
  region: { x: 1528, y: 400, width: 2080, height: 2600 },
});

export default function About() {
  return (
    <Box
      className="jw-banner"
      pt={{ base: 48, sm: 72 }}
      pb={{ base: 64, sm: 96 }}
    >
      <Container size="lg" style={{ position: "relative", zIndex: 2 }}>
        <Grid gap={{ base: 40, md: 64 }} align="flex-start">
          {/* Photo first on mobile, sticky alongside the copy on desktop. */}
          <Grid.Col span={{ base: 12, md: 5 }} order={{ base: 1, md: 2 }}>
            <Box
              style={{
                position: "sticky",
                top: "calc(var(--jw-nav-h) + 24px)",
              }}
            >
              <Reveal>
                <Box className="jw-portrait">
                  <img
                    src={portrait.src}
                    srcSet={portrait.srcSet}
                    sizes="(max-width: 62em) 100vw, 40vw"
                    alt="Arjun at the wheel of a kart, number 74, coming through a corner"
                    loading="eager"
                  />
                </Box>
                <Text size="xs" c="dimmed" mt="sm" ta="center">
                  Arjun — Jumpy Whale
                </Text>
              </Reveal>
            </Box>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 7 }} order={{ base: 2, md: 1 }}>
            <Stack gap="xl">
              <Reveal>
                <Stack gap="sm">
                  <Title
                    order={1}
                    className="jw-display"
                    fz={{ base: "1.65rem", sm: "2.5rem" }}
                    lh={1.18}
                  >
                    About Me
                  </Title>
                  <Text size="xl">{ABOUT_INTRO}</Text>
                </Stack>
              </Reveal>

              <Reveal>
                <Stack gap="md">
                  {ABOUT_PARAGRAPHS.map((paragraph) => (
                    <Text key={paragraph} size="md" c="dimmed">
                      {paragraph}
                    </Text>
                  ))}
                </Stack>
              </Reveal>

              <Reveal>
                <Stack gap="md">
                  <Stack gap={0}>
                    {COCKPIT_SPECS.map((spec) => (
                      <Box key={spec.label}>
                        <Group
                          justify="space-between"
                          align="flex-start"
                          wrap="wrap"
                          gap="xs"
                          py="sm"
                        >
                          <Text
                            size="sm"
                            fw={700}
                            tt="uppercase"
                            style={{ letterSpacing: "0.12em" }}
                          >
                            {spec.label}
                          </Text>
                          <Text
                            size="sm"
                            c="dimmed"
                            ta="right"
                            style={{ flex: "1 1 260px" }}
                          >
                            {spec.value}
                          </Text>
                        </Group>
                        <Divider />
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </Reveal>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
