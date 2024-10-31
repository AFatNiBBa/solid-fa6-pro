
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-bus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-bus?s=duotone car-bus}
 * @preview ![car-bus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/car-bus.svg)
 */
const CarBus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 74.5L0 384c0 17.7 14.3 32 32 32l16 0 0 32c0 17.7 14.3 32 32 32l16 0c17.7 0 32-14.3 32-32l0-32 64 0 0-64c0-32.8 16.5-61.8 41.6-79.1L249.9 224 208 224l0-128 88 0c13.3 0 24 10.7 24 24l0 16.4c13.2-5.4 27.7-8.4 42.6-8.4l21.4 0 0-53.5c0-16.2-9.2-31-23.7-38.3C312.8 12.4 260.3 0 207.1 0L176.9 0C123.7 0 71.2 12.4 23.7 36.2C9.2 43.4 0 58.2 0 74.5zM64 120c0-13.3 10.7-24 24-24l88 0 0 128-88 0c-13.3 0-24-10.7-24-24l0-80zm56 200a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M347.4 234.9L329.7 288l204.5 0-17.7-53.1c-2.2-6.5-8.3-10.9-15.2-10.9l-138.8 0c-6.9 0-13 4.4-15.2 10.9zm-87.3 59.4l26.6-79.7C297.6 182 328.2 160 362.6 160l138.8 0c34.4 0 65 22 75.9 54.7l26.6 79.7C625.2 304.7 640 326.6 640 352l0 96s0 0 0 0l0 32c0 17.7-14.3 32-32 32l-16 0c-17.7 0-32-14.3-32-32l0-32-256 0 0 32c0 17.7-14.3 32-32 32l-16 0c-17.7 0-32-14.3-32-32l0-32s0 0 0 0l0-96c0-25.4 14.8-47.3 36.1-57.6zM328 368a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm232 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default CarBus;