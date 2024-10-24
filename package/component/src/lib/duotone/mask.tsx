
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mask` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mask?s=duotone mask}
 * @preview ![mask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mask.svg)
 */
const Mask: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 272C0 384 80 448 176 448l8.4 0c24.2 0 46.4-13.7 57.2-35.4l23.2-46.3c4.4-8.8 13.3-14.3 23.2-14.3s18.8 5.5 23.2 14.3l23.2 46.3c10.8 21.7 33 35.4 57.2 35.4l8.4 0c96 0 176-64 176-176s-64-208-288-208S0 160 0 272zm224-16A64 64 0 1 1 96 256a64 64 0 1 1 128 0zm256 0a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
        <path d="M160 320a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm256 0a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default Mask;