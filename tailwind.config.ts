import { TypographyPlugin, ScrollbarStylePlugin } from './src/plugins';
import { CUSTOM_COLORS } from './src/constants/style';

/** @type {import('tailwindcss').Config} */

type SizeType = Record<string, Record<string, Record<string, string>>>;

const size = {
  'unit0.5': {
    max10: {},
  },
  unit1: {
    max100: {},
    max1000: {},
    max1500: {},
  },
} as SizeType;

for (let i = 0; i <= 1500; i++) {
  if (i <= 1500) {
    size.unit1.max1500[i] = `${i}px`;
  }

  if (i <= 1000) {
    size.unit1.max1000[i] = `${i}px`;
  }

  if (i <= 100) {
    size.unit1.max100[i] = `${i}px`;
  }
}

for (let i = 0; i <= 10; i += 0.5) {
  size['unit0.5'].max10[i] = `${i}px`;
}

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...CUSTOM_COLORS,
      },
      spacing: size.unit1.max1500,
      maxWidth: size.unit1.max1500,
      minWidth: size.unit1.max1500,
      minHeight: size.unit1.max1500,
      borderWidth: size['unit0.5'].max10,
      borderRadius: size.unit1.max100,
    },
  },
  plugins: [TypographyPlugin, ScrollbarStylePlugin],
};
