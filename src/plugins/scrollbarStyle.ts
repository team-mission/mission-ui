import plugin from 'tailwindcss/plugin';

import { SCROLLBAR_STYLES } from '../constants/style';

export const ScrollbarStylePlugin = plugin(({ addUtilities }) => {
  addUtilities(SCROLLBAR_STYLES);
});
