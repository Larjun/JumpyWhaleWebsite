import {
  Box,
  Button,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconArrowUpRight, IconMail } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import type { BannerDef } from "../data/banners";

const isMailto = (href: string) => href.startsWith("mailto:");

type BannerProps = {
  banner: BannerDef;
};

/**
 * One full-bleed home-page banner. The background is either a livery photo, a
 * CSS grid texture, or a marked placeholder. Photo banners can set `dim` to lay
 * a flat dark wash over the image so the copy stays legible.
 */
export default function Banner({ banner }: BannerProps) {
  const {
    index,
    label,
    headline,
    accentWord,
    body,
    media,
    align = "left",
    dim = false,
    variant,
    minHeight = "70vh",
    actions = [],
  } = banner;

  const hasPhoto = media?.kind === "photo";

  return (
    <Box
      component="section"
      className="jw-banner"
      style={{
        minHeight,
        display: "flex",
        alignItems: "center",
        backgroundColor: hasPhoto ? "#0a0a0a" : "var(--mantine-color-body)",
      }}
    >
      {media?.kind === "photo" && (
        <Box className="jw-banner-media">
          <img
            src={media.src}
            srcSet={media.srcSet}
            sizes="100vw"
            alt={media.alt}
            loading={variant === "hero" ? "eager" : "lazy"}
          />
        </Box>
      )}
      {hasPhoto && dim && <Box className="jw-banner-dim" aria-hidden />}

      {media?.kind === "texture" && (
        <Box className="jw-grid-texture" aria-hidden />
      )}
      {media?.kind === "placeholder" && (
        <Box className="jw-placeholder" aria-hidden />
      )}

      <Box className="jw-slash" aria-hidden />

      <Container
        size="lg"
        py={{ base: 64, sm: 96 }}
        style={{ position: "relative", zIndex: 2, width: "100%" }}
      >
        <Reveal>
          <Stack
            gap="lg"
            maw={variant === "hero" ? 820 : 640}
            ml={align === "right" ? "auto" : undefined}
            ta={align === "center" ? "center" : align}
            align={
              align === "center"
                ? "center"
                : align === "right"
                  ? "flex-end"
                  : "flex-start"
            }
          >
            {label && (
              <SectionLabel index={index} label={label} align={align} />
            )}

            <Title
              order={variant === "hero" ? 1 : 2}
              className="jw-display"
              fz={
                variant === "hero"
                  ? { base: "1.9rem", sm: "3rem", lg: "4rem" }
                  : { base: "1.5rem", sm: "2.35rem" }
              }
              lh={1.18}
              c={
                hasPhoto || media?.kind === "placeholder"
                  ? "#ffffff"
                  : undefined
              }
            >
              {headline}
              {accentWord && (
                <>
                  {" "}
                  <Text span inherit c="teal">
                    {accentWord}
                  </Text>
                </>
              )}
            </Title>

            {body.map((paragraph) => (
              <Text
                key={paragraph}
                size={variant === "hero" ? "xl" : "lg"}
                maw={560}
                c={
                  hasPhoto || media?.kind === "placeholder"
                    ? "#d6d6d6"
                    : "dimmed"
                }
              >
                {paragraph}
              </Text>
            ))}

            {actions.length > 0 && (
              <Group
                gap="md"
                mt="sm"
                justify={
                  align === "center"
                    ? "center"
                    : align === "right"
                      ? "flex-end"
                      : undefined
                }
              >
                {actions.map((action) =>
                  action.external ? (
                    <Button
                      key={action.label}
                      component="a"
                      href={action.href}
                      // A mail client isn't a new tab, so mailto: skips both.
                      target={isMailto(action.href) ? undefined : "_blank"}
                      rel={isMailto(action.href) ? undefined : "noreferrer"}
                      size="md"
                      radius="xl"
                      variant={action.variant ?? "filled"}
                      color="teal"
                      rightSection={
                        isMailto(action.href) ? (
                          <IconMail size={18} />
                        ) : (
                          <IconArrowUpRight size={18} />
                        )
                      }
                    >
                      {action.label}
                    </Button>
                  ) : (
                    <Button
                      key={action.label}
                      component={Link}
                      to={action.href}
                      size="md"
                      radius="xl"
                      variant={action.variant ?? "filled"}
                      color="teal"
                    >
                      {action.label}
                    </Button>
                  ),
                )}
              </Group>
            )}
          </Stack>
        </Reveal>
      </Container>
    </Box>
  );
}
