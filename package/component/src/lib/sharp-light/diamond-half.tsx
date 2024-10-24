
import { Icon } from "../../index";

/**
 * A component that renders the `diamond-half` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-half?s=sharp-light diamond-half}
 * @preview ![diamond-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/diamond-half.svg)
 */
const DiamondHalf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M233.4 22.6L256 0l0 32 0 13.3 0 421.5 0 13.3 0 32-22.6-22.6L224 480 22.6 278.6 0 256l22.6-22.6L224 32l9.4-9.4zM224 77.3L45.3 256 224 434.7l0-357.5z" />
    </Icon>
);

export default DiamondHalf;