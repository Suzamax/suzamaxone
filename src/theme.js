import { polaris } from '@theme-ui/presets';

export default {
    ...polaris,
    styles: {
        ...polaris.styles,
    },
    fonts: {
        body: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading: 'Georgia, serif',
        monospace: 'Menlo, monospace',
    },
    fontSizes: [
        12, 14, 16, 20, 24, 32, 48, 64
    ],
}