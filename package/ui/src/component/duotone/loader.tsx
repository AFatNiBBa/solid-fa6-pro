
import { Icon, generic } from "../../index";

/**
 * A component that renders the `loader` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/loader?s=duotone loader}
 * @preview ![loader](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/loader.svg)
 */
const Loader: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M65.6 414.4c0 8.2 3.1 16.4 9.4 22.6c12.5 12.5 32.8 12.5 45.3 0l45.3-45.3c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L75 391.8c-6.2 6.2-9.4 14.4-9.4 22.6zM224 416l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32zM346.5 120.2c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L437 120.2c12.5-12.5 12.5-32.8 0-45.3c-6.2-6.2-14.4-9.4-22.6-9.4s-16.4 3.1-22.6 9.4l-45.3 45.3zm0 226.3c-12.5 12.5-12.5 32.8 0 45.3L391.8 437c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-45.3-45.3c-12.5-12.5-32.8-12.5-45.3 0zM384 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32z" />
        <path d="M256 0c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64c0-17.7-14.3-32-32-32zM0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32zM120.2 75C107.7 62.5 87.5 62.5 75 75s-12.5 32.8 0 45.3l45.3 45.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L120.2 75z" />
    </Icon>
);

export default Loader;