
import { Icon, generic } from "../../index";

/**
 * A component that renders the `h1` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h1?s=duotone h1}
 * @preview ![h1](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/h1.svg)
 */
const H1: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 256 0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 192 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128L64 224 64 96c0-17.7-14.3-32-32-32S0 78.3 0 96z" />
        <path d="M496.8 68.8C506.3 74.6 512 84.9 512 96l0 288 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-236.2-17.7 8.8c-15.8 7.9-35 1.5-42.9-14.3s-1.5-35 14.3-42.9l64-32c9.9-5 21.7-4.4 31.1 1.4z" />
    </Icon>
);

export default H1;