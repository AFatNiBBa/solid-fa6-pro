
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sun-bright` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sun-bright?s=duotone sun-bright}
 * @preview ![sun-bright](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sun-bright.svg)
 */
const SunBright: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 13.3 10.7 24 24 24l64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0c-13.3 0-24 10.7-24 24zM75 75c-9.4 9.4-9.4 24.6 0 33.9l45.3 45.3c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L108.9 75c-9.4-9.4-24.6-9.4-33.9 0zm0 328.1c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l45.3-45.3c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L75 403.1zM232 24l0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24zm0 400l0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24zM357.8 120.2c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L437 108.9c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-45.3 45.3zm0 237.6c-9.4 9.4-9.4 24.6 0 33.9L403.1 437c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-45.3-45.3c-9.4-9.4-24.6-9.4-33.9 0zM400 256c0 13.3 10.7 24 24 24l64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0c-13.3 0-24 10.7-24 24z" />
        <path d="M256 144a112 112 0 1 0 0 224 112 112 0 1 0 0-224z" />
    </Icon>
);

export default SunBright;