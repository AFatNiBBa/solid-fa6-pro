
import { Icon, generic } from "../../index";

/**
 * A component that renders the `share-from-square` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/share-from-square?s=sharp-duotone-solid share-from-square}
 * @preview ![share-from-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/share-from-square.svg)
 */
const ShareFromSquare: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32l32 0 96 0 32 0 0 64-32 0L64 96l0 352 352 0 0-32 0-32 64 0 0 32 0 64 0 32-32 0L32 512 0 512l0-32L0 64 0 32z" />
        <path d="M576 160L416 320l-32 0 0-96-16 0-17.5 0c-52.2 0-94.5 42.3-94.5 94.5c0 39.3 32 65.5 32 65.5s-128-39.3-128-144c0-79.5 64.5-144 144-144l80 0 0-96 32 0L576 160z" />
    </Icon>
);

export default ShareFromSquare;