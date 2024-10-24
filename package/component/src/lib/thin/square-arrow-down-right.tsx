
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-down-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-down-right?s=thin square-arrow-down-right}
 * @preview ![square-arrow-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-arrow-down-right.svg)
 */
const SquareArrowDownRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 464c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0zm64-48c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320zM168 352c-4.4 0-8-3.6-8-8s3.6-8 8-8l124.7 0L130.3 173.7c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L304 324.7 304 200c0-4.4 3.6-8 8-8s8 3.6 8 8l0 144c0 4.4-3.6 8-8 8l-144 0z" />
    </Icon>
);

export default SquareArrowDownRight;