
import { Icon, generic } from "../../index";

/**
 * A component that renders the `caravan` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caravan?s=duotone caravan}
 * @preview ![caravan](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/caravan.svg)
 */
const Caravan: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 160c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 256c-17.7 0-32-14.3-32-32l0-64zM272 432a80 80 0 1 1 -160 0 80 80 0 1 1 160 0zm48-272c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 64-32 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0 0 96-99.2 0c-7.7-15-17.4-28.7-28.8-40.8L320 160z" />
        <path d="M0 112C0 67.8 35.8 32 80 32l336 0c88.4 0 160 71.6 160 160l0 160 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0-273.1 0c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96L80 416c-44.2 0-80-35.8-80-80L0 112zM348.8 352l99.2 0 0-192c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 151.2c11.4 12.1 21.2 25.8 28.8 40.8zM96 128c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L96 128z" />
    </Icon>
);

export default Caravan;