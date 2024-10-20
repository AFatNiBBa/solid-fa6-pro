
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-arrow-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-right?s=sharp-duotone-solid square-arrow-right}
 * @preview ![square-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-arrow-right.svg)
 */
const SquareArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM80 232c8 0 16 0 24 0c60.7 0 121.4 0 182.1 0c-23.7-23.7-47.4-47.4-71-71c-5.7-5.7-11.3-11.3-17-17L232 110.1c5.7 5.7 11.3 11.3 17 17c37.3 37.3 74.7 74.7 112 112c5.7 5.7 11.3 11.3 17 17c-5.7 5.7-11.3 11.3-17 17c-37.3 37.3-74.7 74.7-112 112c-5.7 5.7-11.3 11.3-17 17c-11.3-11.3-22.6-22.6-33.9-33.9c5.7-5.7 11.3-11.3 17-17c23.7-23.7 47.4-47.4 71-71c-60.7 0-121.4 0-182.1 0c-8 0-16 0-24 0c0-16 0-32 0-48z" />
        <path d="M377.9 256l-17 17L249 385l-17 17L198.1 368l17-17 71-71L104 280l-24 0 0-48 24 0 182.1 0-71-71-17-17L232 110.1l17 17L361 239l17 17z" />
    </Icon>
);

export default SquareArrowRight;