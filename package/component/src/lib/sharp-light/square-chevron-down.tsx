
import { Icon } from "../../index";

/**
 * A component that renders the `square-chevron-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-chevron-down?s=sharp-light square-chevron-down}
 * @preview ![square-chevron-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-chevron-down.svg)
 */
const SquareChevronDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 448L32 64l384 0 0 384L32 448zM0 480l32 0 384 0 32 0 0-32 0-384 0-32-32 0L32 32 0 32 0 64 0 448l0 32zM235.3 347.3l112-112L358.6 224 336 201.4l-11.3 11.3L224 313.4 123.3 212.7 112 201.4 89.4 224l11.3 11.3 112 112L224 358.6l11.3-11.3z" />
    </Icon>
);

export default SquareChevronDown;