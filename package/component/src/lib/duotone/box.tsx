
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box?s=duotone box}
 * @preview ![box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/box.svg)
 */
const Box: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 160l208 0 0-128L93.7 32C75.5 32 58.9 42.3 50.7 58.5L0 160zM240 32l0 128 208 0L397.3 58.5C389.1 42.3 372.5 32 354.3 32L240 32z" />
        <path d="M240 160l208 0 0 256c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 160l208 0 0-128 32 0 0 128z" />
    </Icon>
);

export default Box;