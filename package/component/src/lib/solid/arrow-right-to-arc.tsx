
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-to-arc` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-arc?s=solid arrow-right-to-arc}
 * @preview ![arrow-right-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/arrow-right-to-arc.svg)
 */
const ArrowRightToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 256c0-106-86-192-192-192c-17.7 0-32-14.3-32-32s14.3-32 32-32C397.4 0 512 114.6 512 256s-114.6 256-256 256c-17.7 0-32-14.3-32-32s14.3-32 32-32c106 0 192-86 192-192zM230.6 121.4l112 112c12.5 12.5 12.5 32.8 0 45.3l-112 112c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 288 32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l210.7 0-57.4-57.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0z" />
    </Icon>
);

export default ArrowRightToArc;