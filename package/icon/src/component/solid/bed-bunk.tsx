
import { Icon } from "../../index";

/**
 * A component that renders the `bed-bunk` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-bunk?s=solid bed-bunk}
 * @preview ![bed-bunk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/bed-bunk.svg)
 */
const BedBunk: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 192 0 256 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 0-32 0-128 0-32 0-64 0-32 0-48C576 50.1 525.9 0 464 0L256 0c-17.7 0-32 14.3-32 32l0 96L64 128l0-96zM512 256l-256 0c-17.7 0-32 14.3-32 32l0 96L64 384l0-192 192 0 256 0 0 64zM192 304a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM144 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default BedBunk;