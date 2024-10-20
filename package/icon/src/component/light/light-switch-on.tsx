
import { Icon } from "../../index";

/**
 * A component that renders the `light-switch-on` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-switch-on?s=light light-switch-on}
 * @preview ![light-switch-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/light-switch-on.svg)
 */
const LightSwitchOn: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M176 48l0-16L64 32C46.3 32 32 46.3 32 64l0 384c0 17.7 14.3 32 32 32l112 0 0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16 112 0c17.7 0 32-14.3 32-32l0-384c0-17.7-14.3-32-32-32L208 32l0 16c0 8.8-7.2 16-16 16s-16-7.2-16-16zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM176 168l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-48-24l0 96 128 0 0-96c0-8.8-7.2-16-16-16l-96 0c-8.8 0-16 7.2-16 16zm0 224c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-96-128 0 0 96zM96 144c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 224c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-224z" />
    </Icon>
);

export default LightSwitchOn;