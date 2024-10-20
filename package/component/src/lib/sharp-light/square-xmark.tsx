
import { Icon } from "../../index";

/**
 * A component that renders the `square-xmark` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-xmark?s=sharp-light square-xmark}
 * @preview ![square-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-xmark.svg)
 */
const SquareXmark: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM159.4 168.8l11.3 11.3L224 233.4l53.3-53.3 11.3-11.3 22.6 22.6-11.3 11.3L246.6 256l53.3 53.3 11.3 11.3-22.6 22.6-11.3-11.3L224 278.6l-53.3 53.3-11.3 11.3-22.6-22.6 11.3-11.3L201.4 256l-53.3-53.3-11.3-11.3 22.6-22.6z" />
    </Icon>
);

export default SquareXmark;