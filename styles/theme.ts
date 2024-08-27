import { MantineThemeOverride } from "@mantine/core";

const customTheme: MantineThemeOverride = {
  components: {
    Input: {
      styles: {
        input: {
          borderColor: "transparent",
          "&:focus": {
            borderColor: "transparent",
          },
        },
      },
    },
    Textarea: {
      styles: {
        input: {
          borderColor: "transparent",
          "&:focus": {
            borderColor: "transparent",
          },
        },
      },
    },
    NumberInput: {
      styles: {
        input: {
          borderColor: "transparent",
          "&:focus": {
            borderColor: "transparent",
          },
        },
      },
    },
  },
};

export default customTheme;
