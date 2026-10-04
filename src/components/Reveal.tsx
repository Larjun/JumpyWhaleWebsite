import { Box, type BoxProps } from "@mantine/core";
import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

type RevealProps = BoxProps & {
  children: ReactNode;
  /** Stagger in seconds, so siblings can arrive one after another. */
  delay?: number;
};

export default function Reveal({ children, delay = 0, ...rest }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <Box
      ref={ref}
      className="jw-reveal"
      data-visible={visible}
      style={{ transitionDelay: delay ? `${delay}s` : undefined }}
      {...rest}
    >
      {children}
    </Box>
  );
}
