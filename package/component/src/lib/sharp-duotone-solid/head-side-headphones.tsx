
import { Icon, generic } from "../../index";

/**
 * A component that renders the `head-side-headphones` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/head-side-headphones?s=sharp-duotone-solid head-side-headphones}
 * @preview ![head-side-headphones](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/head-side-headphones.svg)
 */
const HeadSideHeadphones: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224.3 0C100.4 0 0 100.4 0 224.3c0 58.7 23 115 64 156.9L64 480l0 32 32 0 192 0 32 0 0-32 0-32 96 0 32 0 0-32 0-96 32 0 32 0 0-32 0-16 0-11.2-7-8.8-57.3-71.7C441.6 79.7 358.1 0 256 0L224.3 0zm0 0L256 0l0 32 0 74.8c37.8 18 64 56.5 64 101.2c0 61.9-50.1 112-112 112s-112-50.1-112-112c0-44.7 26.2-83.2 64-101.2L160 32l0-22.6C180.4 3.3 202 0 224.3 0z" />
        <path d="M224.3 0L256 0l0 32 0 74.8c37.8 18 64 56.5 64 101.2c0 61.9-50.1 112-112 112s-112-50.1-112-112c0-44.7 26.2-83.2 64-101.2L160 32l0-22.6C180.4 3.3 202 0 224.3 0zM272 208a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-96 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default HeadSideHeadphones;