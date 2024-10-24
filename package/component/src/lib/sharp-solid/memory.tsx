
import { Icon } from "../../index";

/**
 * A component that renders the `memory` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/memory?s=sharp-solid memory}
 * @preview ![memory](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/memory.svg)
 */
const Memory: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 64L0 64l0 82.7c18.6 6.6 32 24.4 32 45.3s-13.4 38.7-32 45.3L0 320l576 0 0-82.7c-18.6-6.6-32-24.4-32-45.3s13.4-38.7 32-45.3L576 64zm0 288L0 352l0 96 80 0 0-32 0-16 32 0 0 16 0 32 96 0 0-32 0-16 32 0 0 16 0 32 96 0 0-32 0-16 32 0 0 16 0 32 96 0 0-32 0-16 32 0 0 16 0 32 80 0 0-96zM192 128l0 32 0 64 0 32-64 0 0-32 0-64 0-32 64 0zm128 32l0 64 0 32-64 0 0-32 0-64 0-32 64 0 0 32zm128-32l0 32 0 64 0 32-64 0 0-32 0-64 0-32 64 0z" />
    </Icon>
);

export default Memory;