
import { Icon } from "../../index";

/**
 * A component that renders the `shoe-prints` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shoe-prints?s=solid shoe-prints}
 * @preview ![shoe-prints](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/shoe-prints.svg)
 */
const ShoePrints: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M416 0C352.3 0 256 32 256 32l0 128c48 0 76 16 104 32s56 32 104 32c56.4 0 176-16 176-96S512 0 416 0zM128 96c0 35.3 28.7 64 64 64l32 0 0-128-32 0c-35.3 0-64 28.7-64 64zM288 512c96 0 224-48 224-128s-119.6-96-176-96c-48 0-76 16-104 32s-56 32-104 32l0 128s96.3 32 160 32zM0 416c0 35.3 28.7 64 64 64l32 0 0-128-32 0c-35.3 0-64 28.7-64 64z" />
    </Icon>
);

export default ShoePrints;