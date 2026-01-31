export type Theme = {
    bgRadial: string;
    bgLinearText: string;
    bgCardGradient: string;
    bg: string;
    text: string;
    color: string;
    ctaBg: string;
    borderColor: string;
};

export const themes: Record<string, Theme> = {
    'dark': {
        bgRadial: 'bg-radial from-blue-800 to-black',
        bgLinearText: 'bg-linear-to-r from-indigo-500 via-fuchsia-500',
        bgCardGradient: 'from-indigo-600 via-fuchsia-500 to-amber-500',
        bg: 'bg-blue-800',
        text: 'text-white',
        color: 'blue-600',
        ctaBg: 'bg-linear-to-br from-blue-500  to-cyan-600 bg-size-[200%_200%]',
        borderColor: 'border-indigo-500',
    },

    

}


export type ThemeKey = keyof typeof themes;