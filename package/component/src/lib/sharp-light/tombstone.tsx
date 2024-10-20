
import { Icon } from "../../index";

/**
 * A component that renders the `tombstone` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone?s=sharp-light tombstone}
 * @preview ![tombstone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/tombstone.svg)
 */
const Tombstone: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 448l0-256c0-88.4-71.6-160-160-160S64 103.6 64 192l0 256-32 0 0-256C32 86 118 0 224 0S416 86 416 192l0 256-32 0zM0 480l16 0 416 0 16 0 0 32-16 0L16 512 0 512l0-32zM240 144l0 64 64 0 16 0 0 32-16 0-64 0 0 128 0 16-32 0 0-16 0-128-64 0-16 0 0-32 16 0 64 0 0-64 0-16 32 0 0 16z" />
    </Icon>
);

export default Tombstone;