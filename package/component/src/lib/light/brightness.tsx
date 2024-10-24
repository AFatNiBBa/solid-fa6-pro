
import { Icon } from "../../index";

/**
 * A component that renders the `brightness` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brightness?s=light brightness}
 * @preview ![brightness](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/brightness.svg)
 */
const Brightness: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 104c0 8.8 7.2 16 16 16s16-7.2 16-16l0-88c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 88zm16 88a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 160a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm0 160c8.8 0 16-7.2 16-16l0-80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 80c0 8.8 7.2 16 16 16zM0 256c0 8.8 7.2 16 16 16l80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-80 0c-8.8 0-16 7.2-16 16zm408-16c-8.8 0-16 7.2-16 16s7.2 16 16 16l88 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-88 0zM75 437c6.2 6.2 16.4 6.2 22.6 0l56.6-56.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L75 414.4c-6.2 6.2-6.2 16.4 0 22.6zM352.2 137.2c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L437 97.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-62.2 62.2zM75 75c-6.2 6.2-6.2 16.4 0 22.6l56.6 56.6c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L97.6 75c-6.2-6.2-16.4-6.2-22.6 0zM374.8 352.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L414.4 437c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-62.2-62.2z" />
    </Icon>
);

export default Brightness;