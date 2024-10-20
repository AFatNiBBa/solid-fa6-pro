
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-from-arc` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-from-arc?s=thin arrow-up-from-arc}
 * @preview ![arrow-up-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-up-from-arc.svg)
 */
const ArrowUpFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 496C123.5 496 16 388.5 16 256c0-4.4-3.6-8-8-8s-8 3.6-8 8C0 397.4 114.6 512 256 512s256-114.6 256-256c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 132.5-107.5 240-240 240zM121.9 154.8c-2.8 3.4-2.4 8.4 1 11.3s8.4 2.4 11.3-1L248 29.9 248 344c0 4.4 3.6 8 8 8s8-3.6 8-8l0-314.1L377.9 165.2c2.8 3.4 7.9 3.8 11.3 1s3.8-7.9 1-11.3l-128-152C260.6 1 258.4 0 256 0s-4.6 1-6.1 2.8l-128 152z" />
    </Icon>
);

export default ArrowUpFromArc;