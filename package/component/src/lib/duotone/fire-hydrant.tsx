
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fire-hydrant` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fire-hydrant?s=duotone fire-hydrant}
 * @preview ![fire-hydrant](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/fire-hydrant.svg)
 */
const FireHydrant: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M16 304l0 64c0 17.7 14.3 32 32 32l16 0 0-128-16 0c-17.7 0-32 14.3-32 32zM32 152c0 13.3 10.7 24 24 24l8 0 256 0 8 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-12 0c-11.6-45-47-80.4-92-92l0-4c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 4c-45 11.6-80.4 47-92 92l-12 0c-13.3 0-24 10.7-24 24zM320 272l0 128 16 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-16 0z" />
        <path d="M64 176l256 0 0 288 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0L64 512l-8 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l8 0 0-288zM192 400a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default FireHydrant;