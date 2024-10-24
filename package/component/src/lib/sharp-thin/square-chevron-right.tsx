
import { Icon } from "../../index";

/**
 * A component that renders the `square-chevron-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-chevron-right?s=sharp-thin square-chevron-right}
 * @preview ![square-chevron-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-chevron-right.svg)
 */
const SquareChevronRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 48L16 48l0 416 416 0 0-416zm16-16l0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32l16 0 416 0 16 0zM309.7 261.7l-120 120-5.7 5.7L172.7 376l5.7-5.7L292.7 256 178.3 141.7l-5.7-5.7L184 124.7l5.7 5.7 120 120 5.7 5.7-5.7 5.7z" />
    </Icon>
);

export default SquareChevronRight;