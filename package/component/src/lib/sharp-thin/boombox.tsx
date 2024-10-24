
import { Icon } from "../../index";

/**
 * A component that renders the `boombox` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boombox?s=sharp-thin boombox}
 * @preview ![boombox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/boombox.svg)
 */
const Boombox: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M72 0L64 0l0 8 0 152-48 0L0 160l0 16L0 496l0 16 16 0 608 0 16 0 0-16 0-320 0-16-16 0-48 0L576 8l0-8-8 0L72 0zM560 160l-112 0 0-24 0-8-8 0-48 0-8 0 0 8 0 24-32 0 0-24 0-8-8 0-48 0-8 0 0 8 0 24-32 0 0-24 0-8-8 0-48 0-8 0 0 8 0 24L80 160 80 16l480 0 0 144zM72 176l128 0 48 0 48 0 48 0 48 0 48 0 128 0 56 0 0 320L16 496l0-320 56 0zm328-32l32 0 0 16-32 0 0-16zm-64 16l-32 0 0-16 32 0 0 16zm-96-16l0 16-32 0 0-16 32 0zm-64 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm0 208a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM368 336a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm208 0a112 112 0 1 0 -224 0 112 112 0 1 0 224 0z" />
    </Icon>
);

export default Boombox;