
import { Icon } from "../../index";

/**
 * A component that renders the `square-caret-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-right?s=sharp-light square-caret-right}
 * @preview ![square-caret-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-caret-right.svg)
 */
const SquareCaretRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 64L32 64l0 384 384 0 0-384zm32-32l0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32l32 0 384 0 32 0zM160 128l32 0 8 0L320 256 200 384l-8 0-32 0 0-32 0-192 0-32zM276.1 256L192 166.3l0 179.5L276.1 256z" />
    </Icon>
);

export default SquareCaretRight;