
import { Icon, generic } from "../../index";

/**
 * A component that renders the `anchor` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/anchor?s=sharp-duotone-solid anchor}
 * @preview ![anchor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/anchor.svg)
 */
const Anchor: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M192 96c0 33.4 17 62.8 42.9 80L224 176l-32 0 0 64 32 0 32 0 64 0 32 0 32 0 0-64-32 0-10.9 0C367 158.8 384 129.4 384 96c0-53-43-96-96-96s-96 43-96 96zm128 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M256 448l0-208 64 0 0 208 128 0 0-96-64 0 96-96 96 96-64 0 0 128 0 32-32 0-192 0L96 512l-32 0 0-32 0-128L0 352l96-96 96 96-64 0 0 96 128 0z" />
    </Icon>
);

export default Anchor;