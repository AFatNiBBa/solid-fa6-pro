
import { Icon, generic } from "../../index";

/**
 * A component that renders the `light-switch` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-switch?s=duotone light-switch}
 * @preview ![light-switch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/light-switch.svg)
 */
const LightSwitch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M96 240l0 32 192 0 0-32L96 240z" />
        <path d="M0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm96 96l0 192c0 35.3 28.7 64 64 64l64 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-64 0c-35.3 0-64 28.7-64 64zM208 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm0 416a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default LightSwitch;