
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shoe-prints` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shoe-prints?s=duotone shoe-prints}
 * @preview ![shoe-prints](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/shoe-prints.svg)
 */
const ShoePrints: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 416c0 35.3 28.7 64 64 64l32 0 0-128-32 0c-35.3 0-64 28.7-64 64zm128-64l0 128s96.3 32 160 32c96 0 224-48 224-128s-119.6-96-176-96c-48 0-76 16-104 32s-56 32-104 32z" />
        <path d="M256 32s96.3-32 160-32c96 0 224 48 224 128s-119.6 96-176 96c-48 0-76-16-104-32s-56-32-104-32l0-128zm-64 0l32 0 0 128-32 0c-35.3 0-64-28.7-64-64s28.7-64 64-64z" />
    </Icon>
);

export default ShoePrints;