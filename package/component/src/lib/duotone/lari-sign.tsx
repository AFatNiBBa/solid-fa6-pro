
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lari-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lari-sign?s=duotone lari-sign}
 * @preview ![lari-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/lari-sign.svg)
 */
const LariSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M112 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32.7c-22.7 1.9-44.2 7.7-64 16.8L112 64zm0 124.1c18-14.4 40-24.1 64-27.1l0 95c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-67.9zM208 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 49.4c-19.8-9.1-41.3-14.9-64-16.8L208 64zm0 97c24 3 46 12.7 64 27.1l0 67.9c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-95z" />
        <path d="M64 288c0-70.7 57.3-128 128-128c61.9 0 113.6 44 125.4 102.4c3.5 17.3 20.4 28.5 37.7 25s28.5-20.4 25-37.7C362.4 162 284.9 96 192 96C86 96 0 182 0 288c0 49.2 18.5 94 48.9 128L32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0c-70.7 0-128-57.3-128-128z" />
    </Icon>
);

export default LariSign;