import plugin from 'tailwindcss/plugin';

import { TYPOGRAPHY } from '../constants/style';

export const TypographyPlugin = plugin(({ addUtilities }) => {
  addUtilities(TYPOGRAPHY);
});
