
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-signal-out` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-signal-out?s=light mobile-signal-out}
 * @preview ![mobile-signal-out](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/mobile-signal-out.svg)
 */
const MobileSignalOut: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 32l128 0 0-32L96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-160-32 0 0 160c0 17.7-14.3 32-32 32L96 480c-17.7 0-32-14.3-32-32L64 64c0-17.7 14.3-32 32-32zm64 368c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0zM272 0c-8.8 0-16 7.2-16 16s7.2 16 16 16c114.9 0 208 93.1 208 208c0 8.8 7.2 16 16 16s16-7.2 16-16C512 107.5 404.5 0 272 0zm16 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM256 112c0 8.8 7.2 16 16 16c61.9 0 112 50.1 112 112c0 8.8 7.2 16 16 16s16-7.2 16-16c0-79.5-64.5-144-144-144c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default MobileSignalOut;