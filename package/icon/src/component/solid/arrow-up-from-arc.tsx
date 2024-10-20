
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-from-arc` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-from-arc?s=solid arrow-up-from-arc}
 * @preview ![arrow-up-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/arrow-up-from-arc.svg)
 */
const ArrowUpFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 448C150 448 64 362 64 256c0-17.7-14.3-32-32-32s-32 14.3-32 32C0 397.4 114.6 512 256 512s256-114.6 256-256c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 106-86 192-192 192zM121.4 121.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 224 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 57.4 57.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0l-112 112z" />
    </Icon>
);

export default ArrowUpFromArc;