
import { Icon } from "../../index";

/**
 * A component that renders the `square-b` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-b?s=solid square-b}
 * @preview ![square-b](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-b.svg)
 */
const SquareB: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm64 120c0-13.3 10.7-24 24-24l92 0c42 0 76 34 76 76c0 16.2-5.1 31.3-13.8 43.7C324.3 261.6 336 283.4 336 308c0 42-34 76-76 76l-108 0c-13.3 0-24-10.7-24-24l0-104 0-104zm144 52c0-15.5-12.5-28-28-28l-68 0 0 56 68 0c15.5 0 28-12.5 28-28zM176 336l84 0c15.5 0 28-12.5 28-28s-12.5-28-28-28l-16 0-68 0 0 56z" />
    </Icon>
);

export default SquareB;