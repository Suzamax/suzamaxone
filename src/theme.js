import { polaris } from '@theme-ui/presets';

export default {
    ...polaris,
    styles: {
        ...polaris.styles,
    },
    fonts: {
        body: 'Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading: 'Roboto Slab, serif',
        monospace: 'Roboto Mono, monospace',
    },
    fontSizes: [
        12, 14, 16, 20, 24, 32, 48, 64
    ],
}