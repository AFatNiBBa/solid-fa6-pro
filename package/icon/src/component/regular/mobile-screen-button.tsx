
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-screen-button` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-screen-button?s=regular mobile-screen-button}
 * @preview ![mobile-screen-button](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/mobile-screen-button.svg)
 */
const MobileScreenButton: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 448c0 8.8 7.2 16 16 16l224 0c8.8 0 16-7.2 16-16l0-80L64 368l0 80zm0-128l256 0 0-256c0-8.8-7.2-16-16-16L80 48c-8.8 0-16 7.2-16 16l0 256zM16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM192 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default MobileScreenButton;