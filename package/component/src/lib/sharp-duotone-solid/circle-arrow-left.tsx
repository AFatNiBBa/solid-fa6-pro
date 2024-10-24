
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-arrow-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-left?s=sharp-duotone-solid circle-arrow-left}
 * @preview ![circle-arrow-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-arrow-left.svg)
 */
const CircleArrowLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm102.1 0l17-17L231 127l17-17c11.3 11.3 22.6 22.6 33.9 33.9l-17 17c-23.7 23.7-47.4 47.4-71 71c60.7 0 121.4 0 182.1 0c8 0 16 0 24 0l0 48c-8 0-16 0-24 0c-60.7 0-121.4 0-182.1 0c23.7 23.7 47.4 47.4 71 71c5.7 5.7 11.3 11.3 17 17c-11.3 11.3-22.6 22.6-33.9 33.9c-5.7-5.7-11.3-11.3-17-17c-37.3-37.3-74.7-74.7-112-112c-5.7-5.7-11.3-11.3-17-17z" />
        <path d="M102.1 256l17-17L231 127l17-17L281.9 144l-17 17-71 71L376 232l24 0 0 48-24 0-182.1 0 71 71 17 17L248 401.9l-17-17L119 273l-17-17z" />
    </Icon>
);

export default CircleArrowLeft;