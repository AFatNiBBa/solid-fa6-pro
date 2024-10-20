
import { Icon } from "../../index";

/**
 * A component that renders the `square-chevron-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-chevron-left?s=sharp-thin square-chevron-left}
 * @preview ![square-chevron-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-chevron-left.svg)
 */
const SquareChevronLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 464l416 0 0-416L16 48l0 416zM0 480l0-16L0 48 0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480zM138.3 250.3l120-120 5.7-5.7L275.3 136l-5.7 5.7L155.3 256 269.7 370.3l5.7 5.7L264 387.3l-5.7-5.7-120-120-5.7-5.7 5.7-5.7z" />
    </Icon>
);

export default SquareChevronLeft;