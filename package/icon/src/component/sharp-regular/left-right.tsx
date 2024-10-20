
import { Icon } from "../../index";

/**
 * A component that renders the `left-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-right?s=sharp-regular left-right}
 * @preview ![left-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/left-right.svg)
 */
const LeftRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 328l48 0 0 8 0 40 0 8 48 0 94.1-94.1L512 256l-33.9-33.9L384 128l-48 0 0 8 0 40 0 8-48 0-64 0-48 0 0-8 0-40 0-8-48 0L33.9 222.1 0 256l33.9 33.9L128 384l48 0 0-8 0-40 0-8 48 0 64 0zM128 316.1L67.9 256 128 195.9l0 36.1 48 0 160 0 48 0 0-36.1L444.1 256 384 316.1l0-36.1-48 0-160 0-48 0 0 36.1z" />
    </Icon>
);

export default LeftRight;