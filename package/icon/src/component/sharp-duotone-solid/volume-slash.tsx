
import { Icon, generic } from "../../index";

/**
 * A component that renders the `volume-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-slash?s=sharp-duotone-solid volume-slash}
 * @preview ![volume-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/volume-slash.svg)
 */
const VolumeSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 160l0 192 128 0L304 480l48 0 0-106.7L81.2 160 32 160zm163.2-31.3L352 250.5 352 32l-48 0L195.2 128.7zm217.6 88.9c11.7 8.8 19.2 22.7 19.2 38.4s-7.5 29.6-19.2 38.4l5.9 7.9 30.7 23.9C468.3 308.7 480 283.7 480 256c0-31.4-15.1-59.3-38.4-76.8l-28.8 38.4zm57.6-76.8c35 26.3 57.6 68.1 57.6 115.2c0 38.8-15.3 74-40.3 99.9l38.1 29.6C557 351.3 576 305.9 576 256c0-62.8-30.2-118.6-76.8-153.6l-28.8 38.4z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L18.9 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default VolumeSlash;