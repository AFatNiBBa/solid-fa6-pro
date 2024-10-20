
import { Icon } from "../../index";

/**
 * A component that renders the `square-c` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-c?s=solid square-c}
 * @preview ![square-c](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-c.svg)
 */
const SquareC: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM167.4 199.4c-31.2 31.2-31.2 81.9 0 113.1s81.9 31.2 113.1 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-31.2-31.2-81.9-31.2-113.1 0z" />
    </Icon>
);

export default SquareC;