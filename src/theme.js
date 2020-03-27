import { swiss } from '@theme-ui/presets';
import { deep } from '@theme-ui/presets';

let d = new Date().getHours();
let theme = (d > 19 || d < 7) ? deep : swiss;

export default {
    ...theme,
    styles: {
        ...theme.styles,
    },
    fonts: {
        body: 'Roboto, "Noto Color Emoji",  sans-serif',
        heading: 'Roboto Slab, serif',
        monospace: 'Roboto Mono, monospace',
    },
    fontSizes: [
        12, 14, 16, 20, 24, 32, 48, 64
    ],
}