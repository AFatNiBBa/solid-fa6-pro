
import { Icon } from "../../index";

/**
 * A component that renders the `square-u` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-u?s=solid square-u}
 * @preview ![square-u](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-u.svg)
 */
const SquareU: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm96 136l0 120c0 35.3 28.7 64 64 64s64-28.7 64-64l0-120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 120c0 61.9-50.1 112-112 112s-112-50.1-112-112l0-120c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default SquareU;