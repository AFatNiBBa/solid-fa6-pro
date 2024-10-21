
import { Icon, generic } from "../../index";

/**
 * A component that renders the `anchor-lock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/anchor-lock?s=sharp-duotone-solid anchor-lock}
 * @preview ![anchor-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/anchor-lock.svg)
 */
const AnchorLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 352l64 0 0 128 0 32 32 0 192 0 96 0 0-64-64 0 0-208 32 0 32 0 0-64-32 0-10.9 0C367 158.8 384 129.4 384 96c0-53-43-96-96-96s-96 43-96 96c0 33.4 17 62.8 42.9 80L224 176l-32 0 0 64 32 0 32 0 0 208-128 0 0-96 64 0L96 256 0 352zM320 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M496 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0z" />
    </Icon>
);

export default AnchorLock;