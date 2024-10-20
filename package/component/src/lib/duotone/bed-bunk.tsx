
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bed-bunk` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-bunk?s=duotone bed-bunk}
 * @preview ![bed-bunk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bed-bunk.svg)
 */
const BedBunk: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 48a48 48 0 1 0 96 0A48 48 0 1 0 96 48zm0 256a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zM224 32l0 96 32 0 288 0 32 0C576 57.3 518.7 0 448 0L256 0c-17.7 0-32 14.3-32 32zm0 240l0 112 32 0 256 0 0-96 0-32-272 0c-8.8 0-16 7.2-16 16z" />
        <path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32l0 96 0 64L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 192 0 256 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 0-32 0-128 0-96 0-32 0-32-32 0-288 0L64 128l0-96zM512 288l0 96-256 0L64 384l0-192 192 0 256 0 0 96z" />
    </Icon>
);

export default BedBunk;