
import { Icon } from "../../index";

/**
 * A component that renders the `rectangles-mixed` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangles-mixed?s=sharp-light rectangles-mixed}
 * @preview ![rectangles-mixed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/rectangles-mixed.svg)
 */
const RectanglesMixed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 64l0 160L32 224 32 64l256 0zM32 32L0 32 0 64 0 224l0 32 32 0 256 0 32 0 0-32 0-160 0-32-32 0L32 32zM544 64l0 288-128 0 0-288 128 0zM416 32l-32 0 0 32 0 288 0 32 32 0 128 0 32 0 0-32 0-288 0-32-32 0L416 32zM96 336l208 0 0 112L96 448l0-112zM64 304l0 32 0 112 0 32 32 0 208 0 32 0 0-32 0-112 0-32-32 0L96 304l-32 0z" />
    </Icon>
);

export default RectanglesMixed;