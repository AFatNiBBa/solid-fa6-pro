
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-to-arc` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-arc?s=sharp-solid arrow-down-to-arc}
 * @preview ![arrow-down-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-down-to-arc.svg)
 */
const ArrowDownToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 448c106 0 192-86 192-192l64 0c0 141.4-114.6 256-256 256S0 397.4 0 256l64 0c0 106 86 192 192 192zM390.6 230.6l-112 112L256 365.3l-22.6-22.6-112-112L98.7 208 144 162.7l22.6 22.6L224 242.7 224 32l0-32 64 0 0 32 0 210.7 57.4-57.4L368 162.7 413.3 208l-22.6 22.6z" />
    </Icon>
);

export default ArrowDownToArc;