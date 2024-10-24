
import { Icon } from "../../index";

/**
 * A component that renders the `light-switch-on` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-switch-on?s=regular light-switch-on}
 * @preview ![light-switch-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/light-switch-on.svg)
 */
const LightSwitchOn: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M169.4 48c3.3 9.3 12.2 16 22.6 16s19.3-6.7 22.6-16L320 48c8.8 0 16 7.2 16 16l0 384c0 8.8-7.2 16-16 16l-105.4 0c-3.3-9.3-12.2-16-22.6-16s-19.3 6.7-22.6 16L64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l105.4 0zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zm80 256l96 0 0 112-96 0 0-112zm0-160c-26.5 0-48 21.5-48 48l0 224c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48l-96 0z" />
    </Icon>
);

export default LightSwitchOn;