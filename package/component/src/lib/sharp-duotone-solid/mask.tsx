
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mask` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mask?s=sharp-duotone-solid mask}
 * @preview ![mask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mask.svg)
 */
const Mask: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 272C0 384 80 448 176 448l48 0 32-96 64 0 32 96 48 0c96 0 176-64 176-176s-64-208-288-208S0 160 0 272zm224-16A64 64 0 1 1 96 256a64 64 0 1 1 128 0zm256 0a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
        <path d="M160 320a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm256 0a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default Mask;