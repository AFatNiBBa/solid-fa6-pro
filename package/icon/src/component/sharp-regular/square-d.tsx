
import { Icon } from "../../index";

/**
 * A component that renders the `square-d` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-d?s=sharp-regular square-d}
 * @preview ![square-d](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-d.svg)
 */
const SquareD: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zm152 96l72 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-72 0-24 0 0-24 0-208 0-24 24 0zm24 208l48 0c44.2 0 80-35.8 80-80s-35.8-80-80-80l-48 0 0 160z" />
    </Icon>
);

export default SquareD;