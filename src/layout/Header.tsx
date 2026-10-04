import {
  Box,
  Burger,
  Container,
  Drawer,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import { NavLink, Link } from "react-router-dom";

type NavItem = {
  label: string;
  to: string;
  /** Leaves the site, so it renders as a plain anchor rather than a route. */
  external?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Liveries", to: "https://design.jumpywhale.com", external: true },
  { label: "About Me", to: "/about" },
];

export default function Header() {
  const [drawerOpen, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [scroll] = useWindowScroll();

  return (
    <>
      <Box component="header" className="jw-nav" data-scrolled={scroll.y > 40}>
        <Container size="lg" h="100%">
          <Group h="100%" justify="space-between" wrap="nowrap">
            <Text
              component={Link}
              to="/"
              className="jw-logo"
              fz={{ base: "1.5rem", sm: "1.75rem" }}
              c="teal"
              style={{ textDecoration: "none", whiteSpace: "nowrap" }}
            >
              jumPy whAle
            </Text>

            <Group gap="xl" visibleFrom="sm" h="100%">
              {NAV_ITEMS.map((item) =>
                item.external ? (
                  <a
                    key={item.to}
                    href={item.to}
                    target="_blank"
                    rel="noreferrer"
                    className="jw-navlink"
                  >
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      isActive ? "jw-navlink is-active" : "jw-navlink"
                    }
                  >
                    {item.label}
                  </NavLink>
                ),
              )}
            </Group>

            <Burger
              opened={drawerOpen}
              onClick={toggleDrawer}
              hiddenFrom="sm"
              size="sm"
              color="var(--jw-accent)"
              aria-label="Toggle navigation"
            />
          </Group>
        </Container>
      </Box>

      <Drawer
        opened={drawerOpen}
        onClose={closeDrawer}
        position="right"
        size="75%"
        padding="xl"
        hiddenFrom="sm"
        zIndex={300}
        title={
          <Text className="jw-logo" fz="1.5rem" c="teal">
            jumPy whAle
          </Text>
        }
      >
        <Stack gap={0} mt="md">
          {NAV_ITEMS.map((item) =>
            item.external ? (
              <a
                key={item.to}
                href={item.to}
                target="_blank"
                rel="noreferrer"
                onClick={closeDrawer}
                className="jw-navlink jw-navlink-mobile"
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={closeDrawer}
                className={({ isActive }) =>
                  `jw-navlink jw-navlink-mobile${isActive ? " is-active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </Stack>
      </Drawer>
    </>
  );
}
