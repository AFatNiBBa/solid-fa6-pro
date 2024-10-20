
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gauge-low` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-low?s=duotone gauge-low}
 * @preview ![gauge-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/gauge-low.svg)
 */
const GaugeLow: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm16-104c0-.3 0-.6 0 0zM288 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm112 48a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm48 112a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M190 142.3c-5.3-12.1-19.5-17.6-31.6-12.3s-17.6 19.5-12.3 31.6l64.1 145.7C198.9 318.9 192 334.6 192 352c0 35.3 28.7 64 64 64s64-28.7 64-64s-28.7-64-64-64c-.6 0-1.3 0-1.9 0L190 142.3z" />
    </Icon>
);

export default GaugeLow;