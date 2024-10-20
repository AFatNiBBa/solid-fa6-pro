
import { Icon, generic } from "../../index";

/**
 * A component that renders the `glass-citrus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass-citrus?s=duotone glass-citrus}
 * @preview ![glass-citrus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/glass-citrus.svg)
 */
const GlassCitrus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M.2 163.2L29.3 454.4C32.5 487.1 60.1 512 93 512L259 512c32.9 0 60.4-24.9 63.7-57.6c5.6-56.4 11.3-112.8 16.9-169.2c2.1-21.4 4.3-42.8 6.4-64.3c1.9-19.3 3.9-38.5 5.8-57.8c.9-9-2-18-8.1-24.7S329 128 320 128l-30.4 0-64.7 0L32 128c-9 0-17.7 3.8-23.7 10.5s-9 15.7-8.1 24.7zM67.4 192l217.3 0c-2.1 21.3-4.3 42.7-6.4 64c-6.4 64-12.8 128-19.2 192L93 448c-6.4-64-12.8-128-19.2-192c-2.1-21.3-4.3-42.7-6.4-64z" />
        <path d="M448 144c0 44.2-35.8 80-80 80c-7.6 0-15-1.1-21.9-3l-6.4 64.3c9.2 1.8 18.7 2.8 28.4 2.8c79.5 0 144-64.5 144-144S447.5 0 368 0C293.9 0 232.8 56 224.9 128l64.7 0C297 91.5 329.3 64 368 64c44.2 0 80 35.8 80 80zM73.8 256L93 448 259 448l19.2-192L73.8 256z" />
    </Icon>
);

export default GlassCitrus;