
import { Icon, generic } from "../../index";

/**
 * A component that renders the `honey-pot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/honey-pot?s=sharp-duotone-solid honey-pot}
 * @preview ![honey-pot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/honey-pot.svg)
 */
const HoneyPot: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 224l448 0c0 50.4-10.5 93-25.5 128l-397 0C10.5 317 0 274.4 0 224zM128 32l48 0 0 104 0 24-48 0 0-24 0-104z" />
        <path d="M64 32l64 0 0 104 0 24 48 0 0-24 0-104 208 0 32 0 0 64-32 0c38.9 29.2 64 75.7 64 128L0 224c0-52.3 25.1-98.8 64-128L32 96l0-64 32 0zM25.5 352l397 0C385.2 439.3 320 480 320 480l-192 0s-65.2-40.7-102.5-128z" />
    </Icon>
);

export default HoneyPot;