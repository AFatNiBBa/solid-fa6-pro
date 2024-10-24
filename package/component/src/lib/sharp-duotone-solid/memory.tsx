
import { Icon, generic } from "../../index";

/**
 * A component that renders the `memory` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/memory?s=sharp-duotone-solid memory}
 * @preview ![memory](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/memory.svg)
 */
const Memory: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64l0 82.7c18.6 6.6 32 24.4 32 45.3s-13.4 38.7-32 45.3L0 320l576 0 0-82.7c-18.6-6.6-32-24.4-32-45.3s13.4-38.7 32-45.3L576 64 0 64zm128 64l64 0 0 32 0 64 0 32-64 0 0-32 0-64 0-32zm128 0l64 0 0 32 0 64 0 32-64 0 0-32 0-64 0-32zm128 0l64 0 0 32 0 64 0 32-64 0 0-32 0-64 0-32z" />
        <path d="M192 160l0 64 0 32-64 0 0-32 0-64 0-32 64 0 0 32zm128 0l0 64 0 32-64 0 0-32 0-64 0-32 64 0 0 32zm128 0l0 64 0 32-64 0 0-32 0-64 0-32 64 0 0 32zM0 320l576 0 0 128-80 0 0-32 0-16-32 0 0 16 0 32-96 0 0-32 0-16-32 0 0 16 0 32-96 0 0-32 0-16-32 0 0 16 0 32-96 0 0-32 0-16-32 0 0 16 0 32L0 448 0 320z" />
    </Icon>
);

export default Memory;