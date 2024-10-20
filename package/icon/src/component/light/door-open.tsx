
import { Icon } from "../../index";

/**
 * A component that renders the `door-open` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/door-open?s=light door-open}
 * @preview ![door-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/door-open.svg)
 */
const DoorOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 480L96 480 96 86.2c0-7.5 5.1-13.9 12.4-15.6l166-38.3c.8-.2 1.7-.3 2.5-.3C283 32 288 37 288 43.1L288 480zm32 0l0-436.9C320 19.3 300.7 0 276.9 0c-3.3 0-6.5 .4-9.7 1.1l-166 38.3C79.4 44.4 64 63.8 64 86.2L64 480l-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 16 0 16 0 192 0 32 0 0-32zM232 288c13.2 0 24-14.4 24-32s-10.8-32-24-32s-24 14.4-24 32s10.7 32 24 32zM464 64L352 64l0 32 112 0c8.8 0 16 7.2 16 16l0 384c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-368c0-26.5-21.5-48-48-48z" />
    </Icon>
);

export default DoorOpen;