
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wine-glass-crack` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wine-glass-crack?s=sharp-duotone-solid wine-glass-crack}
 * @preview ![wine-glass-crack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/wine-glass-crack.svg)
 */
const WineGlassCrack: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M14.5 192.7C20.3 128.4 26.2 64.2 32 0L136 0l32 48L80 104 200 224 160 120l80-56L208 0l80 0 17.5 192.7c.4 4.5 .6 9 .6 13.4c0 68.9-48.4 127.7-114.1 142.4l0 99.5 80 0 0 64-112 0L48 512l0-64 80 0 0-99.5C58 332.9 7.7 267.3 14.5 192.7z" />
        <path d="M80 104L200 224 160 120l80-56L208 0H136l32 48L80 104z" />
    </Icon>
);

export default WineGlassCrack;