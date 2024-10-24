
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lamp` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lamp?s=duotone lamp}
 * @preview ![lamp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/lamp.svg)
 */
const Lamp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 432c0 24.4 8.3 44.6 16.4 58.7c8.5 14.7 25.2 21.3 42.1 21.3l139 0c17 0 33.6-6.6 42.1-21.3c8.1-14 16.4-34.3 16.4-58.7c0-61.5-64-128-64-128l0-48-128 0 0 48s-64 66.5-64 128z" />
        <path d="M112 0C99.1 0 87.4 7.8 82.5 19.7l-80 192c-4.1 9.9-3 21.2 2.9 30.1S21.3 256 32 256l384 0c10.7 0 20.7-5.3 26.6-14.2s7-20.2 2.9-30.1l-80-192C360.6 7.8 348.9 0 336 0L112 0z" />
    </Icon>
);

export default Lamp;