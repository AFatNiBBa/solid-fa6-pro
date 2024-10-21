
import { Icon } from "../../index";

/**
 * A component that renders the `light-switch-on` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-switch-on?s=solid light-switch-on}
 * @preview ![light-switch-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/light-switch-on.svg)
 */
const LightSwitchOn: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zm96 96l64 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-192c0-35.3 28.7-64 64-64zm32-64a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 416a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM160 128c-17.7 0-32 14.3-32 32l0 96 128 0 0-96c0-17.7-14.3-32-32-32l-64 0z" />
    </Icon>
);

export default LightSwitchOn;