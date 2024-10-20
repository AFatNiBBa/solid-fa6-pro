
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-history` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-history?s=light rectangle-history}
 * @preview ![rectangle-history](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/rectangle-history.svg)
 */
const RectangleHistory: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 192c0-17.7-14.3-32-32-32L64 160c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-256zm-32-64c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64l384 0zm0-64c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 96c-8.8 0-16-7.2-16-16s7.2-16 16-16l384 0zM400 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L112 32c-8.8 0-16-7.2-16-16s7.2-16 16-16L400 0z" />
    </Icon>
);

export default RectangleHistory;