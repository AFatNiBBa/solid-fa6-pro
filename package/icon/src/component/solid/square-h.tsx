
import { Icon } from "../../index";

/**
 * A component that renders the `square-h` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-h?s=solid square-h}
 * @preview ![square-h](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-h.svg)
 */
const SquareH: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM336 152l0 104 0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-80-128 0 0 80c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-208c0-13.3 10.7-24 24-24s24 10.7 24 24l0 80 128 0 0-80c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default SquareH;