
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sun-bright` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sun-bright?s=sharp-duotone-solid sun-bright}
 * @preview ![sun-bright](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sun-bright.svg)
 */
const SunBright: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 232l0 48 24 0 64 0 24 0 0-48-24 0-64 0L0 232zM58 92l17 17 45.3 45.3 17 17 33.9-33.9-17-17L108.9 75 92 58 58 92zM58 420L92 454l17-17 45.3-45.3 17-17-33.9-33.9-17 17L75 403.1 58 420zM232 0l0 24 0 64 0 24 48 0 0-24 0-64 0-24L232 0zm0 400l0 24 0 64 0 24 48 0 0-24 0-64 0-24-48 0zM340.9 137.2l33.9 33.9 17-17L437 108.9l17-17L420 58l-17 17-45.3 45.3-17 17zm0 237.6l17 17L403.1 437l17 17L454 420l-17-17-45.3-45.3-17-17-33.9 33.9zM400 232l0 48 24 0 64 0 24 0 0-48-24 0-64 0-24 0z" />
        <path d="M256 144a112 112 0 1 0 0 224 112 112 0 1 0 0-224z" />
    </Icon>
);

export default SunBright;