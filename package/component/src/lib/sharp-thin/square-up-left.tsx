
import { Icon } from "../../index";

/**
 * A component that renders the `square-up-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-up-left?s=sharp-thin square-up-left}
 * @preview ![square-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-up-left.svg)
 */
const SquareUpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM284.7 179.3l-25.4 25.4L248 216l11.3 11.3 73.4 73.4L344 312l-11.3 11.3-41.4 41.4L280 376l-11.3-11.3-73.4-73.4L184 280l-11.3 11.3-25.4 25.4L136 328l-11.3-11.3L112 304l0-144 0-16 16 0 144 0 12.7 12.7L296 168l-11.3 11.3zm-48 48L225.4 216l11.3-11.3L273.4 168l-8-8L128 160l0 137.4 8 8 36.7-36.7L184 257.4l11.3 11.3L280 353.4 321.4 312l-84.7-84.7z" />
    </Icon>
);

export default SquareUpLeft;