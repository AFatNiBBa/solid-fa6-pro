
import { Icon } from "../../index";

/**
 * A component that renders the `camera-viewfinder` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-viewfinder?s=sharp-thin camera-viewfinder}
 * @preview ![camera-viewfinder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/camera-viewfinder.svg)
 */
const CameraViewfinder: typeof Icon = x => (
    <Icon {...x}>
        <path d="M8 0L152 0l8 0 0 16-8 0L16 16l0 136 0 8L0 160l0-8L0 8 0 0 8 0zM512 0l0 8 0 144 0 8-16 0 0-8 0-136L360 16l-8 0 0-16 8 0L504 0l8 0zM192 96l128 0 12 32 68 0 16 0 0 16 0 224 0 16-16 0-288 0-16 0 0-16 0-224 0-16 16 0 68 0 12-32zm140 48l-11.1 0L317 133.6 308.9 112l-105.8 0L195 133.6 191.1 144 180 144l-68 0 0 224 288 0 0-224-68 0zM304 256a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-112 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM0 512l0-8L0 360l0-8 16 0 0 8 0 136 136 0 8 0 0 16-8 0L8 512l-8 0zm504 0l-144 0-8 0 0-16 8 0 136 0 0-136 0-8 16 0 0 8 0 144 0 8-8 0z" />
    </Icon>
);

export default CameraViewfinder;