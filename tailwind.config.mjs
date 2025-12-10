/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: ['class', '[data-theme="dark"]'],
    theme: {
        extend: {
            colors: {
                // HugeContext Design System Colors
                'hc-ink': '#020617',
                'hc-slate': {
                    900: '#0B1120',
                    800: '#111827',
                    700: '#1E293B',
                    500: '#64748B',
                    300: '#CBD5F5',
                },
                'hc-signal': '#06B6D4',
                'hc-signal-soft': '#22D3EE',
                'hc-focus': '#22C55E',
                'hc-warn': '#F59E0B',
                'hc-error': '#EF4444',
                'hc-text': {
                    primary: '#E5E7EB',
                    secondary: '#9CA3AF',
                },
            },
            fontFamily: {
                sans: ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
                mono: ['Fira Code', 'JetBrains Mono', 'Menlo', 'monospace'],
            },
            fontSize: {
                'h1': ['40px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
                'h2': ['32px', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
                'h3': ['24px', { lineHeight: '1.3', letterSpacing: '-0.005em', fontWeight: '600' }],
                'h4': ['20px', { lineHeight: '1.35', fontWeight: '600' }],
                'body-l': ['18px', { lineHeight: '1.6' }],
                'body': ['16px', { lineHeight: '1.6' }],
                'caption': ['12px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
                'code': ['13px', { lineHeight: '1.5' }],
            },
            spacing: {
                's0': '4px',
                's1': '8px',
                's2': '16px',
                's3': '24px',
                's4': '32px',
                's5': '48px',
            },
            borderRadius: {
                'sm': '4px',
                'md': '8px',
                'lg': '12px',
                'xl': '16px',
            },
            boxShadow: {
                'card': '0 12px 30px rgba(0,0,0,0.45)',
                'card-hover': '0 16px 40px rgba(0,0,0,0.55)',
                'modal': '0 24px 60px rgba(0,0,0,0.6)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                pulseSubtle: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' },
                },
            },
        },
    },
    plugins: [],
};
