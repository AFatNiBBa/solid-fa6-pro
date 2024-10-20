
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gear-complex` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gear-complex?s=sharp-duotone-solid gear-complex}
 * @preview ![gear-complex](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/gear-complex.svg)
 */
const GearComplex: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 256a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M302.7 0l-96 0-7 55.7c-16.8 4.7-32.7 11.5-47.5 20L107.6 41 39.7 108.9l35 45c-8.3 14.7-14.8 30.4-19.4 47L-1.3 208l0 96 56.7 7.1c3.9 14.4 9.4 28.2 16.2 41.1L34.1 397.4l79.2 79.2L158 439.5c11.2 6 23 11 35.3 14.9l5.4 57.6 112 0 5.3-56.8c12.7-3.8 24.8-8.8 36.4-14.8l43.7 36.2 79.2-79.2-35.9-43.3c6.3-11.7 11.4-24 15.4-36.9l55.9-5.2 0-112-55.9-5.2c-4.6-15.1-10.9-29.4-18.7-42.8l33.5-43.1L401.8 41 358.3 74.9c-15.2-8.6-31.5-15.3-48.7-19.9L302.7 0zM256 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default GearComplex;