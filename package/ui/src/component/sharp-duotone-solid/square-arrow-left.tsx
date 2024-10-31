
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-arrow-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-left?s=sharp-duotone-solid square-arrow-left}
 * @preview ![square-arrow-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-arrow-left.svg)
 */
const SquareArrowLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 448L0 480 0 32zM70.1 256c5.7 5.7 11.3 11.3 17 17c37.3 37.3 74.7 74.7 112 112c5.7 5.7 11.3 11.3 17 17c11.3-11.3 22.6-22.6 33.9-33.9c-5.7-5.7-11.3-11.3-17-17c-23.7-23.7-47.3-47.3-71-71c60.7 0 121.4 0 182.1 0c8 0 16 0 24 0l0-48c-8 0-16 0-24 0c-60.7 0-121.4 0-182.1 0l71-71 17-17c-11.3-11.3-22.6-22.6-33.9-33.9l-17 17L87 239l-17 17z" />
        <path d="M70.1 256l17-17L199 127l17-17L249.9 144l-17 17-71 71L344 232l24 0 0 48-24 0-182.1 0 71 71 17 17L216 401.9l-17-17L87 273l-17-17z" />
    </Icon>
);

export default SquareArrowLeft;