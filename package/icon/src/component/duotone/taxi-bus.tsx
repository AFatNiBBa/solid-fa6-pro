
import { Icon, generic } from "../../index";

/**
 * A component that renders the `taxi-bus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/taxi-bus?s=duotone taxi-bus}
 * @preview ![taxi-bus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/taxi-bus.svg)
 */
const TaxiBus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 74.5L0 384c0 17.7 14.3 32 32 32l16 0 0 32c0 17.7 14.3 32 32 32l16 0c17.7 0 32-14.3 32-32l0-32 64 0 0-64c0-32.8 16.5-61.8 41.6-79.1L249.9 224 208 224l0-128 88 0c13.3 0 24 10.7 24 24l0 16.4c5.7-2.4 11.7-4.3 17.8-5.6C343.6 110.7 362.1 96 384 96l0-21.5c0-16.2-9.2-31-23.7-38.3C312.8 12.4 260.3 0 207.1 0L176.9 0C123.7 0 71.2 12.4 23.7 36.2C9.2 43.4 0 58.2 0 74.5zM64 120c0-13.3 10.7-24 24-24l88 0 0 128-88 0c-13.3 0-24-10.7-24-24l0-80zm56 200a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M392 128c-13.3 0-24 10.7-24 24l0 8-5.4 0c-34.4 0-65 22-75.9 54.7l-26.6 79.7C238.8 304.7 224 326.6 224 352l0 96s0 0 0 0l0 32c0 17.7 14.3 32 32 32l16 0c17.7 0 32-14.3 32-32l0-32 256 0 0 32c0 17.7 14.3 32 32 32l16 0c17.7 0 32-14.3 32-32l0-32s0 0 0 0l0-96c0-25.4-14.8-47.3-36.1-57.6l-26.6-79.7C566.4 182 535.8 160 501.4 160l-5.4 0 0-8c0-13.3-10.7-24-24-24l-80 0zm-29.4 96l138.8 0c6.9 0 13 4.4 15.2 10.9L534.3 288l-204.5 0 17.7-53.1c2.2-6.5 8.3-10.9 15.2-10.9zM304 344a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm232 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default TaxiBus;