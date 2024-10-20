
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-fast` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-fast?s=duotone truck-fast}
 * @preview ![truck-fast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/truck-fast.svg)
 */
const TruckFast: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 112c0 8.8 7.2 16 16 16l48 0 208 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L64 96 16 96c-8.8 0-16 7.2-16 16zM0 240c0 8.8 7.2 16 16 16l48 0 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L64 224l-48 0c-8.8 0-16 7.2-16 16zm32-64c0 8.8 7.2 16 16 16l16 0 176 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L64 160l-16 0c-8.8 0-16 7.2-16 16zM96 432a80 80 0 1 0 160 0A80 80 0 1 0 96 432zm288 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M64 48C64 21.5 85.5 0 112 0L368 0c26.5 0 48 21.5 48 48l0 48 50.7 0c17 0 33.3 6.7 45.3 18.7L589.3 192c12 12 18.7 28.3 18.7 45.3l0 18.7 0 32 0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0-1.1 0c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96l-66.3 0c-7.8-54.3-54.4-96-110.9-96c-48.1 0-89.2 30.4-105 73c-4.4-7.3-7-15.8-7-25l0-112 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L64 224l0-32 176 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L64 160l0-32 208 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L64 96l0-48zM416 256l128 0 0-18.7L466.7 160 416 160l0 96z" />
    </Icon>
);

export default TruckFast;