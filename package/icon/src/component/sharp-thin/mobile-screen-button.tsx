
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-screen-button` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-screen-button?s=sharp-thin mobile-screen-button}
 * @preview ![mobile-screen-button](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mobile-screen-button.svg)
 */
const MobileScreenButton: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 16l0 336L48 352 48 16l288 0zm0 352l0 128L48 496l0-128 288 0zM48 0L32 0l0 16 0 480 0 16 16 0 288 0 16 0 0-16 0-480 0-16L336 0 48 0zM192 448a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm-32-16a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
    </Icon>
);

export default MobileScreenButton;