
import { Icon } from "../../index";

/**
 * A component that renders the `square-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-left?s=sharp-thin square-left}
 * @preview ![square-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-left.svg)
 */
const SquareLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 464l416 0 0-416L16 48l0 416zM0 480l0-16L0 48 0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480zM224 288l112 0 0-64-112 0-16 0 0-16 0-64-1.4 0L94.6 256l112 112 1.4 0 0-64 0-16 16 0zM83.3 267.3L72 256l11.3-11.3L200 128l8 0 16 0 0 16 0 48 0 16 16 0 96 0 16 0 0 16 0 64 0 16-16 0-96 0-16 0 0 16 0 48 0 16-16 0-8 0L83.3 267.3z" />
    </Icon>
);

export default SquareLeft;