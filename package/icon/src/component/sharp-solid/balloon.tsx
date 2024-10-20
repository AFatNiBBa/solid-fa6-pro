
import { Icon } from "../../index";

/**
 * A component that renders the `balloon` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/balloon?s=sharp-solid balloon}
 * @preview ![balloon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/balloon.svg)
 */
const Balloon: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 192C0 86 86 0 192 0S384 86 384 192c0 128-160 240-160 240l32 80-128 0 32-80S0 320 0 192zm96 0c0-53 43-96 96-96l0-32C121.3 64 64 121.3 64 192l32 0z" />
    </Icon>
);

export default Balloon;