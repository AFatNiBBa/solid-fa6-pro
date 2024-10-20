
import { Icon } from "../../index";

/**
 * A component that renders the `door-closed` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/door-closed?s=light door-closed}
 * @preview ![door-closed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/door-closed.svg)
 */
const DoorClosed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M416 32c17.7 0 32 14.3 32 32l0 416-320 0 0-416c0-17.7 14.3-32 32-32l256 0zm64 448l0-416c0-35.3-28.7-64-64-64L160 0C124.7 0 96 28.7 96 64l0 416-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 32 0 320 0 32 0 80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-80 0zM408 256a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default DoorClosed;