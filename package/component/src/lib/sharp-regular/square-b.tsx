
import { Icon } from "../../index";

/**
 * A component that renders the `square-b` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-b?s=sharp-regular square-b}
 * @preview ![square-b](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-b.svg)
 */
const SquareB: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zm128 96l24 0 92 0c42 0 76 34 76 76c0 16.2-5.1 31.3-13.8 43.7C324.3 261.6 336 283.4 336 308c0 42-34 76-76 76l-108 0-24 0 0-24 0-80 0-24 0-24 0-80 0-24zm144 76c0-15.5-12.5-28-28-28l-68 0 0 56 68 0c15.5 0 28-12.5 28-28zM176 336l84 0c15.5 0 28-12.5 28-28s-12.5-28-28-28l-16 0-68 0 0 56z" />
    </Icon>
);

export default SquareB;