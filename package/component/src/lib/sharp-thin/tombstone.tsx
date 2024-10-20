
import { Icon } from "../../index";

/**
 * A component that renders the `tombstone` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone?s=sharp-thin tombstone}
 * @preview ![tombstone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/tombstone.svg)
 */
const Tombstone: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 464l0-272c0-97.2-78.8-176-176-176S48 94.8 48 192l0 272-16 0 0-272C32 86 118 0 224 0S416 86 416 192l0 272-16 0zM0 496l8 0 432 0 8 0 0 16-8 0L8 512l-8 0 0-16zM232 136l0 72 80 0 8 0 0 16-8 0-80 0 0 152 0 8-16 0 0-8 0-152-80 0-8 0 0-16 8 0 80 0 0-72 0-8 16 0 0 8z" />
    </Icon>
);

export default Tombstone;