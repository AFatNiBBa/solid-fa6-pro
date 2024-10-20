
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-screen` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-screen?s=thin mobile-screen}
 * @preview ![mobile-screen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/mobile-screen.svg)
 */
const MobileScreen: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M288 16c26.5 0 48 21.5 48 48l0 320L48 384 48 64c0-26.5 21.5-48 48-48l192 0zm48 384l0 48c0 26.5-21.5 48-48 48L96 496c-26.5 0-48-21.5-48-48l0-48 288 0zM96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L96 0zm40 448c0 4.4 3.6 8 8 8l96 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-96 0c-4.4 0-8 3.6-8 8z" />
    </Icon>
);

export default MobileScreen;