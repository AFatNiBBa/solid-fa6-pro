
import { Icon } from "../../index";

/**
 * A component that renders the `square-y` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-y?s=sharp-solid square-y}
 * @preview ![square-y](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-y.svg)
 */
const SquareY: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM200 295.9L88.6 144l59.5 0L224 247.4 299.8 144l59.5 0L248 295.9l0 80.1 0 24-48 0 0-24 0-80.1z" />
    </Icon>
);

export default SquareY;