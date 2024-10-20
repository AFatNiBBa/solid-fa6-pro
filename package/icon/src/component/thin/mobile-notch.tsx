
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-notch` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-notch?s=thin mobile-notch}
 * @preview ![mobile-notch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/mobile-notch.svg)
 */
const MobileNotch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M256 16l0 24c0 13.3-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24l0-24L96 16C69.5 16 48 37.5 48 64l0 384c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l0-384c0-26.5-21.5-48-48-48l-32 0zm-16 0l-96 0 0 24c0 4.4 3.6 8 8 8l80 0c4.4 0 8-3.6 8-8l0-24zM32 64C32 28.7 60.7 0 96 0L288 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64L32 64z" />
    </Icon>
);

export default MobileNotch;