
import { Icon } from "../../index";

/**
 * A component that renders the `align-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-right?s=sharp-solid align-right}
 * @preview ![align-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/align-right.svg)
 */
const AlignRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32l0 64L160 96l0-64 288 0zm0 256l0 64-288 0 0-64 288 0zM0 160l448 0 0 64L0 224l0-64zM448 416l0 64L0 480l0-64 448 0z" />
    </Icon>
);

export default AlignRight;