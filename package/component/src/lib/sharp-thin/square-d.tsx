
import { Icon } from "../../index";

/**
 * A component that renders the `square-d` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-d?s=sharp-thin square-d}
 * @preview ![square-d](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-d.svg)
 */
const SquareD: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zm136 96l88 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-88 0-8 0 0-8 0-240 0-8 8 0zm8 240l80 0c61.9 0 112-50.1 112-112s-50.1-112-112-112l-80 0 0 224z" />
    </Icon>
);

export default SquareD;