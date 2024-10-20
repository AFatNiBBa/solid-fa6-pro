
import { Icon } from "../../index";

/**
 * A component that renders the `square-i` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-i?s=sharp-regular square-i}
 * @preview ![square-i](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-i.svg)
 */
const SquareI: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zm152 96l72 0 72 0 24 0 0 48-24 0-48 0 0 160 48 0 24 0 0 48-24 0-48 0-48 0-48 0-24 0 0-48 24 0 48 0 0-160-48 0-24 0 0-48 24 0z" />
    </Icon>
);

export default SquareI;