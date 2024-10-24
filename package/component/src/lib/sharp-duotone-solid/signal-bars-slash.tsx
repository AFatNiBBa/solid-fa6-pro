
import { Icon, generic } from "../../index";

/**
 * A component that renders the `signal-bars-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars-slash?s=sharp-duotone-solid signal-bars-slash}
 * @preview ![signal-bars-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/signal-bars-slash.svg)
 */
const SignalBarsSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 384l0 128 96 0 0-128-96 0zM192 256l0 256 96 0 0-189.1L203.1 256 192 256zM352 128l0 122.5c32 24.8 64 49.7 96 74.5l0-197-96 0zm0 245.3L352 512l96 0 0-63-96-75.6zM512 0l0 374.7c32 24.8 64 49.7 96 74.5L608 0 512 0z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default SignalBarsSlash;