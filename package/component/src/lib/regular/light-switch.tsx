
import { Icon } from "../../index";

/**
 * A component that renders the `light-switch` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-switch?s=regular light-switch}
 * @preview ![light-switch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/light-switch.svg)
 */
const LightSwitch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 64c-10.4 0-19.3-6.7-22.6-16L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l105.4 0c3.3-9.3 12.2-16 22.6-16s19.3 6.7 22.6 16L320 464c8.8 0 16-7.2 16-16l0-384c0-8.8-7.2-16-16-16L214.6 48c-3.3 9.3-12.2 16-22.6 16zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM144 368l96 0 0-88-96 0 0 88zm0-224l0 88 96 0 0-88-96 0zm-48 0c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 224c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-224z" />
    </Icon>
);

export default LightSwitch;