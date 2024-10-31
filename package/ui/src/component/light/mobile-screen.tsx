
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-screen` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-screen?s=light mobile-screen}
 * @preview ![mobile-screen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/mobile-screen.svg)
 */
const MobileScreen: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M288 32c17.7 0 32 14.3 32 32l0 256L64 320 64 64c0-17.7 14.3-32 32-32l192 0zm32 320l0 96c0 17.7-14.3 32-32 32L96 480c-17.7 0-32-14.3-32-32l0-96 256 0zM96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L96 0zm48 416c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default MobileScreen;