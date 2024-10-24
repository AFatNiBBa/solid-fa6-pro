
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-screen-button` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-screen-button?s=thin mobile-screen-button}
 * @preview ![mobile-screen-button](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/mobile-screen-button.svg)
 */
const MobileScreenButton: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M288 16c26.5 0 48 21.5 48 48l0 288L48 352 48 64c0-26.5 21.5-48 48-48l192 0zm48 352l0 80c0 26.5-21.5 48-48 48L96 496c-26.5 0-48-21.5-48-48l0-80 288 0zM96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L96 0zm96 448a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm-32-16a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
    </Icon>
);

export default MobileScreenButton;