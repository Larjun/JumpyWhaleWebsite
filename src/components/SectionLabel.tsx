import { Box } from "@mantine/core";

type SectionLabelProps = {
  /** Two-digit section number, e.g. "01". */
  index: string;
  label: string;
  /** Right alignment flips the trailing rule to the other side. */
  align?: "left" | "right" | "center";
};

export default function SectionLabel({
  index,
  label,
  align = "left",
}: SectionLabelProps) {
  return (
    <Box
      className={
        align === "right"
          ? "jw-sectionlabel jw-sectionlabel--right"
          : "jw-sectionlabel"
      }
      mb="md"
    >
      {index} / {label}
    </Box>
  );
}
