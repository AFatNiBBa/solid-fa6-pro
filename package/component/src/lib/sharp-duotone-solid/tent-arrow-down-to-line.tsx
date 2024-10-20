
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tent-arrow-down-to-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tent-arrow-down-to-line?s=sharp-duotone-solid tent-arrow-down-to-line}
 * @preview ![tent-arrow-down-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tent-arrow-down-to-line.svg)
 */
const TentArrowDownToLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M164.6 448L192 256 384 128 576 256l27.4 192-142.6 0L384 320l0 128-219.4 0z" />
        <path d="M225 153l17-17L208 102.1l-17 17-23 23L168 24l0-24L120 0l0 24 0 118.1L97 119l-17-17L46.1 136l17 17 64 64 17 17 17-17 64-64zM32 448L0 448l0 64 32 0 576 0 32 0 0-64-32 0L32 448z" />
    </Icon>
);

export default TentArrowDownToLine;