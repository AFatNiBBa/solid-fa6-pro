
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wine-glass-crack` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wine-glass-crack?s=duotone wine-glass-crack}
 * @preview ![wine-glass-crack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/wine-glass-crack.svg)
 */
const WineGlassCrack: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M18.1 197.8c-6 72 42.5 135.2 109.9 150.6l0 99.6-48 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l80 0 80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-48 0 0-99.6c67.4-15.4 115.9-78.6 109.9-150.6l-14-168.4C286.5 12.8 272.6 0 256 0L208 0l25.8 51.7c3.5 7.1 1.4 15.7-5.1 20.3l-58.4 40.9c-6 4.2-8.4 12-5.8 18.9l31.1 81c2.1 5.5-1.9 11.4-7.8 11.4c-2.4 0-4.7-1.1-6.3-2.9L92.1 118c-6.4-7.4-4.7-18.7 3.5-24l58.6-37.3c7.6-4.8 9.7-14.9 4.7-22.4L136 0 64 0C47.4 0 33.5 12.8 32.1 29.3l-14 168.4z" />
        <path d="M154.2 56.8L95.7 94c-8.2 5.2-9.9 16.6-3.5 24l89.3 103.1c1.6 1.8 3.9 2.9 6.3 2.9c5.9 0 9.9-5.9 7.8-11.4l-31.1-81c-2.6-6.9-.3-14.6 5.8-18.9l58.4-40.9c6.5-4.5 8.7-13.2 5.1-20.3L208 0H136l22.9 34.4c5 7.5 2.8 17.6-4.7 22.4z" />
    </Icon>
);

export default WineGlassCrack;