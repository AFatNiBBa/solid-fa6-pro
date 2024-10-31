
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sunglasses` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sunglasses?s=sharp-duotone-solid sunglasses}
 * @preview ![sunglasses](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sunglasses.svg)
 */
const Sunglasses: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M48 396l152-76 8 0 0 16 0 96L48 432l0-36zm320 0l152-76 8 0 0 32 0 24 0 56-160 0 0-36z" />
        <path d="M61 31.9l21.8 3.2 88.7 13.2 23.7 3.5-7 47.5-23.7-3.5L97.6 85.8c-8.4 34.3-15.4 59.6-22.4 84.6c0 0 0 0 0 0l-.3 1c-8.1 29-16.1 57.8-26.2 100.6L232 272l24 0 0 24 0 8 64 0 0-8 0-24 24 0 183.3 0c-10.1-42.8-18.1-71.7-26.2-100.6l-.3-1s0 0 0 0s0 0 0 0s0 0 0 0c-7-25-14-50.3-22.4-84.6l-66.9 9.9-23.7 3.5-7-47.5 23.7-3.5 88.7-13.2L515 31.9l5 21.5c10.5 44.8 18.8 74.3 27.1 104.2l.2 .9c8.5 30.3 17.1 61.2 28 108.1l.6 2.7 0 2.8s0 0 0 0l0 24 0 56 0 24 0 80 0 24-24 0-208 0-24 0 0-24 0-88-64 0 0 88 0 24-24 0L24 480 0 480l0-24 0-80 0-24 0-56 0-24s0 0 0 0l0-2.8 .6-2.7c10.9-46.9 19.5-77.7 28-108.1l.3-.9C37.2 127.7 45.5 98.1 56 53.4l5-21.5zM528 320l-160 0 0 16 0 96 160 0 0-56 0-24 0-32zM48 352l0 24 0 56 160 0 0-96 0-16L48 320l0 32z" />
    </Icon>
);

export default Sunglasses;