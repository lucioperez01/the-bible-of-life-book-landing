export type Theme = {
    bgRadial: string;
    bgLinearText: string;
    bgCardGradient: string;
    bg: string;
    text: string;
    color: string;
    ctaBg: string;
    borderColor: string;
    bColorHighlight: string;
    bgPricingCardAmber: string;
    bgPricingCardIndigo: string;
};

export const themes: Record<string, Theme> = {
    'dark': {
        bgRadial: 'bg-radial from-blue-900 to-slate-950 bg-fixed',
        bgLinearText: 'bg-linear-to-r from-indigo-500 via-fuchsia-500',
        bgCardGradient: 'from-indigo-600 via-fuchsia-500 to-amber-500',
        bg: 'bg-blue-600',
        text: 'text-white',
        color: 'blue-600',
        ctaBg: 'bg-linear-to-br from-blue-500 to-cyan-600',
        borderColor: 'border-indigo-500',
        bColorHighlight: 'border-amber-400',
        bgPricingCardAmber: 'bg-amber-500',
        bgPricingCardIndigo: 'bg-indigo-500',
    },
}


export type ThemeKey = keyof typeof themes;