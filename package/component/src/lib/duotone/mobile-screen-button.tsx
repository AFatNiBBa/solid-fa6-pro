
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mobile-screen-button` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-screen-button?s=duotone mobile-screen-button}
 * @preview ![mobile-screen-button](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mobile-screen-button.svg)
 */
const MobileScreenButton: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zm64 0l0 320 224 0 0-320L80 64zm80 384a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M80 64H304V384H80V64z" />
    </Icon>
);

export default MobileScreenButton;