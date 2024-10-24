
import { Icon } from "../../index";

/**
 * A component that renders the `square-chevron-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-chevron-right?s=sharp-light square-chevron-right}
 * @preview ![square-chevron-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-chevron-right.svg)
 */
const SquareChevronRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 64L32 64l0 384 384 0 0-384zm32-32l0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32l32 0 384 0 32 0zM315.3 267.3l-112 112L192 390.6 169.4 368l11.3-11.3L281.4 256 180.7 155.3 169.4 144 192 121.4l11.3 11.3 112 112L326.6 256l-11.3 11.3z" />
    </Icon>
);

export default SquareChevronRight;