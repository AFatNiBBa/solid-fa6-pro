
import { Icon, generic } from "../../index";

/**
 * A component that renders the `backpack` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backpack?s=sharp-duotone-solid backpack}
 * @preview ![backpack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/backpack.svg)
 */
const Backpack: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 384l0 16 0 112 256 0 0-112 0-16L96 384zM136 0l0 24 0 72 48 0 0-48 80 0 0 48 48 0 0-72 0-24L288 0 160 0 136 0z" />
        <path d="M0 224C0 153.3 57.3 96 128 96l192 0c70.7 0 128 57.3 128 128l0 288-96 0 0-112 0-112L96 288l0 112 0 112L0 512 0 224zm144-48l-16 0 0 32 16 0 160 0 16 0 0-32-16 0-160 0z" />
    </Icon>
);

export default Backpack;