
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-arrow-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-down?s=sharp-duotone-solid circle-arrow-down}
 * @preview ![circle-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-arrow-down.svg)
 */
const CircleArrowDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm110.1 8c11.3-11.3 22.6-22.6 33.9-33.9l17 17 71 71c0-60.7 0-121.4 0-182.1c0-8 0-16 0-24c16 0 32 0 48 0c0 8 0 16 0 24c0 60.7 0 121.4 0 182.1c23.7-23.7 47.3-47.3 71-71c5.7-5.7 11.3-11.3 17-17c11.3 11.3 22.6 22.6 33.9 33.9c-5.7 5.7-11.3 11.3-17 17c-37.3 37.3-74.7 74.7-112 112c-5.7 5.7-11.3 11.3-17 17c-5.7-5.7-11.3-11.3-17-17c-37.3-37.3-74.7-74.7-112-112c-5.7-5.7-11.3-11.3-17-17z" />
        <path d="M256 409.9l17-17L385 281l17-17L368 230.1l-17 17-71 71L280 136l0-24-48 0 0 24 0 182.1-71-71-17-17L110.1 264l17 17L239 393l17 17z" />
    </Icon>
);

export default CircleArrowDown;