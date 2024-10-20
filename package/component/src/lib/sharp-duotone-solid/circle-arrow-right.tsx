
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-arrow-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-right?s=sharp-duotone-solid circle-arrow-right}
 * @preview ![circle-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-arrow-right.svg)
 */
const CircleArrowRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM112 232c0 16 0 32 0 48c8 0 16 0 24 0c60.7 0 121.4 0 182.1 0c-23.7 23.7-47.3 47.3-71 71c-5.7 5.7-11.3 11.3-17 17c11.3 11.3 22.6 22.6 33.9 33.9c5.7-5.7 11.3-11.3 17-17c37.3-37.3 74.7-74.7 112-112c5.7-5.7 11.3-11.3 17-17c-5.7-5.7-11.3-11.3-17-17c-37.3-37.3-74.7-74.7-112-112c-5.7-5.7-11.3-11.3-17-17L230.1 144c5.7 5.7 11.3 11.3 17 17c23.7 23.7 47.3 47.3 71 71c-60.7 0-121.4 0-182.1 0c-8 0-16 0-24 0z" />
        <path d="M409.9 256l-17 17L281 385l-17 17L230.1 368l17-17 71-71L136 280l-24 0 0-48 24 0 182.1 0-71-71-17-17L264 110.1l17 17L393 239l17 17z" />
    </Icon>
);

export default CircleArrowRight;