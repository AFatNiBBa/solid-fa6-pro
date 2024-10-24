
import { Icon } from "../../index";

/**
 * A component that renders the `door-open` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/door-open?s=sharp-light door-open}
 * @preview ![door-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/door-open.svg)
 */
const DoorOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 0L288 8 64 64l0 416-48 0L0 480l0 32 16 0 48 0 16 0 16 0 192 0 32 0 0-32 0-447 0-33zM288 41l0 439L96 480 96 89 288 41zM232 288c13.2 0 24-14.4 24-32s-10.8-32-24-32s-24 14.4-24 32s10.7 32 24 32zM496 64L352 64l0 32 128 0 0 400 0 16 16 0 64 0 16 0 0-32-16 0-48 0 0-400 0-16-16 0z" />
    </Icon>
);

export default DoorOpen;