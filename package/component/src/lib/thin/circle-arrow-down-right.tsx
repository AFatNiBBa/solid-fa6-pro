
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-down-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-down-right?s=thin circle-arrow-down-right}
 * @preview ![circle-arrow-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-arrow-down-right.svg)
 */
const CircleArrowDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 496a240 240 0 1 1 0-480 240 240 0 1 1 0 480zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM200 352l144 0c4.4 0 8-3.6 8-8l0-144c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 124.7L173.7 162.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L324.7 336 200 336c-4.4 0-8 3.6-8 8s3.6 8 8 8z" />
    </Icon>
);

export default CircleArrowDownRight;