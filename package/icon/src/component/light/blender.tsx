
import { Icon } from "../../index";

/**
 * A component that renders the `blender` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blender?s=light blender}
 * @preview ![blender](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/blender.svg)
 */
const Blender: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 72C0 32.2 32.2 0 72 0l56 0 24 0 8.1 0L471 0c20.8 0 36.1 19.6 31 39.8L423.1 355.4C456 365.3 480 395.9 480 432l0 32c0 26.5-21.5 48-48 48l-288 0c-26.5 0-48-21.5-48-48l0-32c0-37.8 26.2-69.5 61.5-77.9L148 240l-76 0c-39.8 0-72-32.2-72-72L0 72zM128 432l0 32c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16l0-32c0-26.5-21.5-48-48-48l-224 0c-26.5 0-48 21.5-48 48zM423 224l-119 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l127 0 16-64-143 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l151 0 16-64L162.8 32l26.7 320L391 352l32-128zM72 32C49.9 32 32 49.9 32 72l0 96c0 22.1 17.9 40 40 40l73.3 0L130.7 32 72 32zM288 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Blender;