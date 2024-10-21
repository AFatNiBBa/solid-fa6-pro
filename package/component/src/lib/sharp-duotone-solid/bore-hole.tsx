
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bore-hole` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bore-hole?s=sharp-duotone-solid bore-hole}
 * @preview ![bore-hole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bore-hole.svg)
 */
const BoreHole: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128L0 512l512 0 0-384-160 0 0 224c0 53-43 96-96 96s-96-43-96-96l0-224L0 128z" />
        <path d="M288 32l0-32L224 0l0 32 0 264.6c-19.1 11.1-32 31.7-32 55.4c0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.7-12.9-44.4-32-55.4L288 32z" />
    </Icon>
);

export default BoreHole;