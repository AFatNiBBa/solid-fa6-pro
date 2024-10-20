
import { Icon } from "../../index";

/**
 * A component that renders the `volume-slash` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-slash?s=sharp-regular volume-slash}
 * @preview ![volume-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/volume-slash.svg)
 */
const VolumeSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48.4 14.8L29.4 .1 0 38l19 14.7L591.5 497.2l19 14.7L639.9 474l-19-14.7-95.1-73.8C557 351.3 576 305.9 576 256c0-62.8-30.2-118.6-76.8-153.6l-28.8 38.4c35 26.3 57.6 68.1 57.6 115.2c0 38.8-15.3 74-40.3 99.9l-38.2-29.7C468.3 308.7 480 283.7 480 256c0-31.4-15.1-59.3-38.4-76.8l-28.8 38.4c11.7 8.8 19.2 22.7 19.2 38.4s-7.5 29.6-19.2 38.4l5.9 7.9L352 250.5 352 80l0-48-48 0L195.2 128.7 48.4 14.8zM233.7 158.7L304 96.2l0 117-70.3-54.6zM80 160l-48 0 0 48 0 96 0 48 48 0 80 0L304 480l48 0 0-48 0-58.7-48-37.8 0 80.3L191.9 316.1 178.2 304 160 304l-80 0 0-96 62.1 0L81.2 160 80 160z" />
    </Icon>
);

export default VolumeSlash;