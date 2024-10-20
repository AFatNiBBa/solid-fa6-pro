
import { Icon } from "../../index";

/**
 * A component that renders the `square-fragile` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-fragile?s=sharp-regular square-fragile}
 * @preview ![square-fragile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-fragile.svg)
 */
const SquareFragile: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zm128 80l48 0 32 64-32 32 80 64-32-64 48-32-32-64 80 0 0 112c0 47.6-34.6 87.1-80 94.7l0 49.3 48 0 0 32-128 0 0-32 48 0 0-49.3c-45.4-7.6-80-47.1-80-94.7l0-112z" />
    </Icon>
);

export default SquareFragile;